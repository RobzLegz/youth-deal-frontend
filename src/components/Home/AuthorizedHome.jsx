import React, { useEffect, useState } from 'react';
import './AuthorizedHome.scss';

import CrownIcon from '../../assets/svg/crown.svg';
import Avatar from '../../assets/svg/avatar.svg';
import Bookmark2 from '../../assets/svg/bookmark2.svg';

import { useSelector } from 'react-redux';
import { userData } from '../../slices/user/userSlice';
import { searchData, setSearchInfo } from '../../slices/searchresults/searchResultSlice';
import { useHistory, useParams } from 'react-router-dom';
import { getUserProffession } from '../../logic/user/proffessions/proffessions';
import { useDispatch } from 'react-redux';
import { proffessionData } from '../../slices/proffessions/proffessionSlice';
import { getUserInfoByID } from '../../logic/user/info/getUserInfo';

import LoadingPopup from '../popups/loading/LoadingPopup';
import ScrollJobs from './JobsPanel/ScrollJobs';
import SwipeJobs from './JobsPanel/SwipeJobs';

function AuthorizedHome() {
    // Temp data for developement
    const contacts = Array(5).fill({
        name: "Pseidons",
        avatar: "https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg",
        last_msg: "Hello",
        last_msg_time: "15:30"
    });
    const recomendations = Array(3).fill({
        avatar: "https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg",
        name: "Renault",
        positionInfo: "Kompānija"
    });
    const jobs = Array(5).fill({
        name: "Renault",
        avatar: "https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg",
        date: "12.07.2021",
        requirements: ["front-end", "back-end"],
        title: "Work for us!",
        image: "https://cdn.discordapp.com/attachments/838837120575471717/887753254027526224/unknown.png",
        description: "Need help on project.",
        price: "1000"
    });

    const [isUsersProfile, setIsUsersProfile] = useState(false);
    const [activeJobPanel, setActiveJobPanel] = useState(<ScrollJobs jobs={jobs} />);
    const [activeJobOption, setActiveJobOption] = useState('longterm');

    const { searchID } = useParams();

    const userInfo = useSelector(userData);
    const searchInfo = useSelector(searchData);
    const proffessionInfo = useSelector(proffessionData);
    const history = useHistory();
    const dispatch = useDispatch();

    const [editLastJob, setEditLastJob] = useState("");
    const [editKnowledge, setEditKnowledge] = useState("");
    const [editExtraSkills, setEditExtraSkills] = useState("");

    useEffect(() => {
        if (!userInfo.loggedIn) {
            history.push("/");
        }
    }, [history, userInfo.loggedIn]);

    useEffect(() => {
        if (searchInfo.info) {
            setEditLastJob(searchInfo.info.profile.experience);
            setEditKnowledge(searchInfo.info.profile.knowledge);
            setEditExtraSkills(searchInfo.info.profile.extra);
        }
    }, [searchInfo.info]);

    useEffect(() => {
        if (userInfo.info) {
            if (userInfo.info.id === parseInt(searchID)) {
                dispatch(setSearchInfo(userInfo.info));
                setIsUsersProfile(true);
            } else {
                getUserInfoByID(searchID, dispatch);
                setIsUsersProfile(false);
            }
        }
    }, [userInfo.info, searchID, dispatch, proffessionInfo.proffessions]);

    useEffect(() => {
        if (searchInfo.info && !searchInfo.info.is_employer) {
            getUserProffession(searchInfo.info.profile.profession_aka_activity, dispatch, proffessionInfo.proffessions);
        }
    }, [searchInfo.info, dispatch, proffessionInfo.proffessions]);

    if (searchInfo.info) {
        return (
            <div className="auth-home">

                <div className="auth-home__left">
                    <div className="panel">
                        <div className="auth-home__left__user">
                            <img src={searchInfo.info.profile.photo ? searchInfo.info.profile.photo : Avatar} alt="avatar" />
                            <div className="username-wrapper">
                                <h2>{searchInfo.info.first_name} {searchInfo.info.last_name} <span>{searchInfo.info.profile.is_active_jobseeker && '#AMD'}</span></h2>
                                {searchInfo.info.profile.jobCategory && searchInfo.info.profile.job ? (
                                    <small>{`${searchInfo.info.profile.jobCategory} | ${searchInfo.info.profile.job}`}</small>
                                ) : searchInfo.info.profile.job && (
                                    <small>{searchInfo.info.profile.job}</small>
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
                            <p><img src={Bookmark2} alt="" /> Saglabātie</p>
                        </div>
                    </div>
                </div>

                <div className="auth-home__middle">
                    <div className="auth-home__middle__job-options panel">
                        <div onClick={() => {
                            setActiveJobPanel(<ScrollJobs jobs={jobs} />);
                            setActiveJobOption('longterm');
                        }} className={`auth-home__middle__job-options__job-option ${activeJobOption === 'longterm' ? 'active' : ''}`}>
                            <h3>Ilgtermiņa darbi</h3>
                            <div className="active-line"></div>
                        </div>
                        <div onClick={() => {
                            setActiveJobPanel(<SwipeJobs jobs={jobs} />);
                            setActiveJobOption('shortterm');
                        }} className={`auth-home__middle__job-options__job-option ${activeJobOption === 'shortterm' ? 'active' : ''}`}>
                            <h3>Īstermiņa darbi</h3>
                            <div className="active-line"></div>
                        </div>
                        <div onClick={() => {
                            setActiveJobPanel(<ScrollJobs jobs={jobs} />);
                            setActiveJobOption('volunteer');
                        }} className={`auth-home__middle__job-options__job-option ${activeJobOption === 'volunteer' ? 'active' : ''}`}>
                            <h3>Brīvprātīgie darbi</h3>
                            <div className="active-line"></div>
                        </div>
                    </div>
                    <div className="auth-home__middle__jobs">
                        {activeJobPanel}
                    </div>
                </div>

                <div className="auth-home__right">
                    <h2>Čats</h2>
                    <div className="auth-home__right__chat panel">
                        {contacts.map((contact) =>
                            <div className="auth-home__right__chat__contact">
                                <img src={contact.avatar} alt="renault" />
                                <div className="auth-home__right__chat__contact__info">
                                    <p id="username">{contact.name}</p>
                                    <small id="last-msg">{contact.last_msg}</small>
                                </div>
                                <p className="auth-home__right__chat__contact__last-msg-time">{contact.last_msg_time}</p>
                            </div>
                        )}
                    </div>

                    <h2>Recomendācijas</h2>
                    <div className="auth-home__right__recomendations panel">
                        {recomendations.map((recomendation) =>
                            <div className="auth-home__right__recomendations__recomendation">
                                <img src={recomendation.avatar} alt="avatar" />
                                <div className="info">
                                    <p id="name">{recomendation.name}</p>
                                    <small id="info">{recomendation.positionInfo}</small>
                                </div>
                                <button>+ Sekot</button>
                            </div>
                        )}
                    </div>

                </div>

            </div >
        )
    } else {
        return <LoadingPopup />;
    }
}

export default AuthorizedHome;
