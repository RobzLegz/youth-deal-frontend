import React, { useEffect, useState } from 'react';
import './AuthorizedHome.scss';

import CrownIcon from '../../assets/svg/crown.svg';
import Avatar from '../../assets/svg/avatar.svg';
import Bookmark2 from '../../assets/svg/bookmark2.svg';
import CloseBlack from '../../assets/svg/close-black.svg';

import { useSelector } from 'react-redux';
import { userData } from '../../slices/user/userSlice';
import { useHistory } from 'react-router-dom';
import { getUserJobNoSearch } from '../../logic/user/proffessions/proffessions';
import { useDispatch } from 'react-redux';
import { proffessionData } from '../../slices/proffessions/proffessionSlice';

import LoadingPopup from '../popups/loading/LoadingPopup';
import ScrollJobs from './JobsPanel/ScrollJobs';
import SwipeJobs from './JobsPanel/SwipeJobs';
import { infoData, setFilterTags } from '../../slices/info/infoSlice';
import { chatData } from '../../slices/chat/chatSlice';
import Contact from './chats/Contact';
import SwipedUser from './swipedUser/SwipedUser';

function AuthorizedHome() {
    const pageInfo = useSelector(infoData);
    const userInfo = useSelector(userData);

    const [scrollJobs, setScrollJobs] = useState([]);
    const [swipeJobs, setSwipeJobs] = useState([]);
    const [woluntaryJobs, setWoluntaryJobs] = useState([]);
    const [filterJobs, setFilterJobs] = useState([]);

    useEffect(() => {
        if(pageInfo.jobOffers && userInfo.swipedPossitions){
            if(scrollJobs.length > 0 || swipeJobs.length > 0 || woluntaryJobs.length > 0){
                setScrollJobs([]);
                setSwipeJobs([]);
                setWoluntaryJobs([]);
            }
            pageInfo.jobOffers.forEach((job) => {
                let contractType = job.contract_type;
                let occupation = job.position_occupation;
                let jobID = job.id;

                if(!userInfo.swipedPossitions.some(sp => sp.position === jobID)){
                    if(pageInfo.filterTags){
                        if(filterJobs.length > 0){
                            setFilterJobs([]);
                        }
    
                        pageInfo.filterTags.forEach((tag) => {
                            const category = tag.type;
                            
                            if(category === "category"){
                                const tagOccupations = tag.occupations;
                    
                                if(tagOccupations.some(o => o.id === occupation)){
    
                                    if(filterJobs && scrollJobs && swipeJobs && woluntaryJobs && !scrollJobs.includes(job) && !swipeJobs.includes(job) && !woluntaryJobs.includes(job)){
                                        if(contractType === "long term"){
                                            scrollJobs.push(job);
                                        }else if(contractType === "short term"){
                                            swipeJobs.push(job);
                                        }else if(contractType === "woluntary job"){
                                            woluntaryJobs.push(job);
                                        }
                                    }
                                }
                            }
                        });
                    }else{
                        if(contractType === "long term"){
                            scrollJobs.push(job);
                        }else if(contractType === "short term"){
                            swipeJobs.push(job);
                        }else if(contractType === "woluntary job"){
                            woluntaryJobs.push(job);
                        }
                    }
                }
            });
        }
    }, [pageInfo.jobOffers, scrollJobs, swipeJobs, woluntaryJobs, pageInfo.filterTags, filterJobs, userInfo.swipedPossitions]);

    const removeTag = (tag) => {
        if(pageInfo.filterTags.length > 1){
            dispatch(setFilterTags(pageInfo.filterTags.filter(t => t !== tag)));
        }else{
            dispatch(setFilterTags(null));
        }
    };

    useEffect(() => {
        if(scrollJobs){
            setActiveJobPanel(<ScrollJobs jobs={scrollJobs} />);
        }
    }, [scrollJobs]);


    const [activeJobPanel, setActiveJobPanel] = useState(null);
    const [activeJobOption, setActiveJobOption] = useState('longterm');

    const chatInfo = useSelector(chatData);
    const proffessionInfo = useSelector(proffessionData);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userInfo.loggedIn) {
            history.push("/");
        }
    }, [history, userInfo.loggedIn]);

    useEffect(() => {
        if (userInfo.info && !userInfo.info.is_employer && !userInfo.info.profile.user_proffession && !userInfo.info.profile.user_proffession_category) {
            getUserJobNoSearch(userInfo.info.profile.profession_aka_activity, dispatch, proffessionInfo.proffessions);
        }
    }, [userInfo.info, dispatch, proffessionInfo.proffessions]);

    if (userInfo.info) {
        return (
            <div className="auth-home">
                {!userInfo.info.is_employer && (
                    <div className={`auth-home__invisible ${pageInfo.filterTags && 'extra-height'}`}></div>
                )}
                <div className="auth-home__left">
                    <div className="panel">
                        <div className="auth-home__left__user">
                            <img src={userInfo.info.profile.photo ? userInfo.info.profile.photo : Avatar} alt="avatar" />
                            <div className="username-wrapper">
                                <h2>
                                    {userInfo.info.is_employer ?
                                        userInfo.info.profile.company_name :
                                        <>{userInfo.info.first_name} {userInfo.info.last_name} {userInfo.info.profile.is_active_jobseeker && <span>#ADM</span>}</>
                                    }
                                </h2>
                                {userInfo.info.profile.user_proffession_category && userInfo.info.profile.user_proffession ? (
                                    <small>{`${userInfo.info.profile.user_proffession_category} | ${userInfo.info.profile.user_proffession}`}</small>
                                ) : userInfo.info.profile.user_proffession && (
                                    <small>{userInfo.info.profile.user_proffession}</small>
                                )}
                            </div>
                        </div>
                        {userInfo.info.has_premium && (
                            <div className="auth-home__left__premium">
                                <p><img src={CrownIcon} alt="crown"></img>Premium (aktīvs)</p>
                            </div>
                        )}
                        <div className="auth-home__left__contacts">
                            <h3>Kontakti</h3>
                            <p>Atrodiet savus kontaktus, lai ar viņiem tērzētu</p>
                        </div>
                        {!userInfo.info.is_employer &&
                            <div className="auth-home__left__saved">
                                <p onClick={() => history.push('/saved')}><img src={Bookmark2} alt="bookmark" /> Saglabātie</p>
                            </div>
                        }
                    </div>
                </div>
                
                <div className="auth-home__middle">
                    {userInfo.info.is_employer ?
                        <>
                            {userInfo.swipedPossitions && userInfo.swipedPossitions.length > 0 ? (
                                <>
                                    <h2>Lietotāji</h2>
                                    <div className="auth-home__middle__users panel">
                                        {userInfo.swipedPossitions.map((possition, i) => {
                                            return(
                                                <SwipedUser 
                                                    key={i}
                                                    info={possition}
                                                />
                                            )
                                        })}
                                    </div>
                                </>
                            ) : (
                                <p>Neviens lietotājs nav akceptējis Jūsu darba pidāvājumu</p>
                            )}
                            
                        </> :
                        <>
                            <div className="auth-home__middle__fixed">
                                <div className="auth-home__middle__job-options panel">
                                    <div onClick={() => {
                                        if(scrollJobs){
                                            setActiveJobPanel(<ScrollJobs jobs={scrollJobs} />);
                                        }
                                        setActiveJobOption('longterm');
                                    }} className={`auth-home__middle__job-options__job-option ${activeJobOption === 'longterm' ? 'active' : ''}`}>
                                        <h3>Ilgtermiņa <span>darbi</span></h3>
                                        <div className="active-line"></div>
                                    </div>
                                    <div onClick={() => {
                                        setActiveJobPanel(<SwipeJobs jobs={swipeJobs} />);
                                        setActiveJobOption('shortterm');
                                    }} className={`auth-home__middle__job-options__job-option ${activeJobOption === 'shortterm' ? 'active' : ''}`}>
                                        <h3>Īstermiņa <span>darbi</span></h3>
                                        <div className="active-line"></div>
                                    </div>
                                    <div onClick={() => {
                                        setActiveJobPanel(<ScrollJobs jobs={woluntaryJobs} />);
                                        setActiveJobOption('volunteer');
                                    }} className={`auth-home__middle__job-options__job-option ${activeJobOption === 'volunteer' ? 'active' : ''}`}>
                                        <h3>Brīvprātīgie <span>darbi</span></h3>
                                        <div className="active-line"></div>
                                    </div>
                                </div>
                                {pageInfo.filterTags && (
                                    <div className="auth-home__middle__tags panel">
                                        {pageInfo.filterTags.map((tag, i) =>
                                            <div key={i} className="auth-home__middle__tags__tag">
                                                <img src={CloseBlack} alt="close" onClick={() => removeTag(tag)} />
                                                <span>{tag.title}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            {
                                (scrollJobs && swipeJobs && woluntaryJobs) && (
                                    <div className={`auth-home__middle__jobs ${pageInfo.filterTags && 'extra-top-margin'}`}>
                                        {activeJobPanel}
                                    </div>
                                )
                            }
                        </>
                    }
                </div>
                
                <div className="auth-home__right">
                    {chatInfo.chats && chatInfo.chats.length > 0 && (
                        <>
                            <h2>Čats</h2>
                            <div className="auth-home__right__chat panel">
                                {chatInfo.chats.map((contact, i) =>
                                    <Contact 
                                        contact={contact}
                                        key={i}
                                    />
                                )}
                            </div>
                        </>
                    )}
                    

                    {/* <h2>Recomendācijas</h2>
                    <div className="auth-home__right__recomendations panel">
                        {chatInfo.chats.map((recomendation, i) =>
                            <div className="auth-home__right__recomendations__recomendation" key={i}>
                                <img src={recomendation.avatar} alt="avatar" />
                                <div className="info">
                                    <p id="name">{recomendation.name}</p>
                                    <small id="info">{recomendation.positionInfo}</small>
                                </div>
                                <button>+ Sekot</button>
                            </div>
                        )}
                    </div> */}

                </div>
            </div>
        );
    } else {
        return <LoadingPopup />;
    }
}

export default AuthorizedHome;
