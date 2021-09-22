import React, { useEffect, useState } from 'react';
import './AuthorizedHome.scss';

import CrownIcon from '../../assets/svg/crown.svg';
import Avatar from '../../assets/svg/avatar.svg';
import Bookmark2 from '../../assets/svg/bookmark2.svg';

import { useSelector } from 'react-redux';
import { userData } from '../../slices/user/userSlice';
import { useHistory } from 'react-router-dom';
import { getUserJobNoSearch } from '../../logic/user/proffessions/proffessions';
import { useDispatch } from 'react-redux';
import { proffessionData } from '../../slices/proffessions/proffessionSlice';
import { NewChat } from '../../logic/chat/chatOptions';

import LoadingPopup from '../popups/loading/LoadingPopup';
import ScrollJobs from './JobsPanel/ScrollJobs';
import SwipeJobs from './JobsPanel/SwipeJobs';
import { infoData } from '../../slices/info/infoSlice';
import { chatData } from '../../slices/chat/chatSlice';
import Contact from './chats/Contact';

function AuthorizedHome() {
    const pageInfo = useSelector(infoData);
    const [scrollJobs, setScrollJobs] = useState(null);
    const [swipeJobs, setSwipeJobs] = useState(null);
    const [woluntaryJobs, setWoluntaryJobs] = useState(null);

    const checkForUniqueJobs = (array, object) => {
        return array.some((job) => {
            if(
                job.contract_type === object.contract_type &&
                job.position_info === object.position_info &&
                job.position_tools === object.position_tools &&
                job.position_city === object.position_city &&
                job.position_country === object.position_country &&
                job.position_requirements === object.position_requirements &&
                job.price_range === object.price_range &&
                job.position_occupation === object.position_occupation &&
                job.company === object.company
            ){
                return true
            }
            return false
        })
    }

    useEffect(() => {
        if(pageInfo.jobOffers){
            if(!scrollJobs || !swipeJobs || !woluntaryJobs){
                setScrollJobs([]);
                setSwipeJobs([]);
                setWoluntaryJobs([]);
            }else{
                pageInfo.jobOffers.forEach((job) => {
                    let mappedJob = {
                        contract_type: job.contract_type,
                        position_info: job.position_info,
                        position_tools: job.position_tools,
                        position_city: job.position_city,
                        position_country: job.position_country,
                        position_requirements: job.position_requirements,
                        price_range : job.price_range,
                        position_occupation : job.position_occupation,
                        company : job.company,
                    }

                    if(mappedJob.contract_type === "long term" && !checkForUniqueJobs(scrollJobs, mappedJob)){
                        scrollJobs.push(mappedJob);
                    }else if(job.contract_type === "short term" && !checkForUniqueJobs(swipeJobs, mappedJob)){
                        swipeJobs.push(mappedJob);
                    }else if(job.contract_type === "woluntary job" && !checkForUniqueJobs(woluntaryJobs, mappedJob)){
                        woluntaryJobs.push(mappedJob);
                    }
                });
            }
        }
    }, [pageInfo.jobOffers, scrollJobs, swipeJobs, woluntaryJobs]);

    useEffect(() => {
        if(scrollJobs){
            setActiveJobPanel(<ScrollJobs jobs={scrollJobs} />);
        }
    }, [scrollJobs]);


    const [activeJobPanel, setActiveJobPanel] = useState(null);
    const [activeJobOption, setActiveJobOption] = useState('longterm');

    const userInfo = useSelector(userData);
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

    const fakeUsers = Array(4).fill({
        info: {
            id: 58,
            first_name: 'Fake',
            last_name: 'User',
            profile: {
                user: 58,
                photo: 'https://res.cloudinary.com/mareks/image/upload/v1/media/user_photos/Super-drawing-ideas-animals-student-44-ideas_zhy2oe',
                user_proffession: 'Full-stack programmētājs',
                user_proffession_category: 'IT'
            }
        }
    })
    const [hasChat] = useState(null);

    if (userInfo.info) {
        return (
            <div className="auth-home">

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
                        <div className="auth-home__left__premium">
                            <p><img src={CrownIcon} alt="crown"></img>Premium (aktīvs)</p>
                        </div>
                        <div className="auth-home__left__contacts">
                            <h3>Kontakti</h3>
                            <p>Atrodiet savus kontaktus, lai ar viņiem tērzētu</p>
                        </div>
                        <div className="auth-home__left__saved">
                            <p onClick={() => history.push('/saved')}><img src={Bookmark2} alt="bookmark" /> Saglabātie</p>
                        </div>
                    </div>
                </div>

                <div className="auth-home__middle">
                    {userInfo.info.is_employer ?
                        <>
                            <div className="auth-home__middle__create-job-button">
                                <button onClick={() => history.push('/new/jobOffer')}>Izveidot jaunu darba vakanci</button>
                            </div>
                            <h2>Lietotāji</h2>
                            <div className="auth-home__middle__users panel">
                                {fakeUsers.map((user, i) =>
                                    <div className="auth-home__middle__users__user" onClick={() => history.push(`/profile/${user.info.profile.user}`)} key={i}>
                                        <img src={user.info.profile.photo ? user.info.profile.photo : Avatar} alt="avatar" />
                                        <div className="auth-home__middle__users__user__info">
                                            <p>{user.info.first_name} {user.info.last_name}</p>
                                            {user.info.profile.user_proffession_category && user.info.profile.user_proffession ? (
                                                <small>{`${user.info.profile.user_proffession_category} | ${user.info.profile.user_proffession}`}</small>
                                            ) : user.info.profile.user_proffession && (
                                                <small>{user.info.profile.user_proffession}</small>
                                            )}
                                        </div>
                                        <button onClick={() => {
                                            if(hasChat){
                                                history.push("/chat")
                                            }else{
                                                NewChat(userInfo.info.id, user.info.id, history, dispatch);
                                            }
                                        }}>{hasChat ? "Sarakste" : "Sākt saraksti"}</button>
                                    </div>
                                )}
                            </div>
                        </> :
                        <>
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
                            {
                                (scrollJobs && swipeJobs && woluntaryJobs) && (
                                    <div className={`auth-home__middle__jobs ${activeJobOption === 'shortterm' ? '' : 'scroll'}`}>
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
