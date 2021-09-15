import React, { useEffect, useState } from 'react';
import './Profile.scss'

import pen from '../../assets/svg/pen.svg';
import CloseIcon from '../../assets/svg/close.svg';
import calendar from '../../assets/svg/calendar.svg';
import marker from '../../assets/svg/marker.svg';
import Avatar from '../../assets/svg/avatar.svg';

import ProfileModal from './editModals/ProfileModal/ProfileModal';
import { useSelector } from 'react-redux';
import { userData } from '../../slices/user/userSlice';
import { useHistory, useParams } from 'react-router-dom';
import LoadingPopup from '../popups/loading/LoadingPopup';
import { getUserProffession } from '../../logic/user/proffessions/proffessions';
import { useDispatch } from 'react-redux';
import { proffessionData } from '../../slices/proffessions/proffessionSlice';
import { getUserInfoByID } from '../../logic/user/info/getUserInfo';
import { searchData, setSearchInfo } from '../../slices/searchresults/searchResultSlice';
import { updateKnowledgeJobExtra } from '../../logic/user/info/updateProfileInfo';

function Profile(){
    const [editProfile, setEditProfile] = useState(false);
    const [isUsersProfile, setIsUsersProfile] = useState(false);
    const [editingKnowledge, setEditingKnowledge] = useState(false);
    const [editingLastJob, setEditingLastJob] = useState(false);
    const [editingExtraSkills, setEditingExtraSkills] = useState(false);

    const {searchID} = useParams()

    const userInfo = useSelector(userData);
    const searchInfo = useSelector(searchData);
    const proffessionInfo = useSelector(proffessionData);
    const history = useHistory();
    const dispatch = useDispatch();

    const [editLastJob, setEditLastJob] = useState("");
    const [editKnowledge, setEditKnowledge] = useState("");
    const [editExtraSkills, setEditExtraSkills] = useState("");

    useEffect(() => {
        if(!userInfo.loggedIn){
            history.push("/");
        }
    }, [history, userInfo.loggedIn]);

    useEffect(() => {
        if(searchInfo.info){
            setEditLastJob(searchInfo.info.profile.experience);
            setEditKnowledge(searchInfo.info.profile.knowledge);
            setEditExtraSkills(searchInfo.info.profile.extra);
        }
    }, [searchInfo.info]);

    useEffect(() => {
        if(userInfo.info){
            if(userInfo.info.id === parseInt(searchID)){
                dispatch(setSearchInfo(userInfo.info));
                setIsUsersProfile(true);
            }else{
                getUserInfoByID(searchID, dispatch);
                setIsUsersProfile(false);
            }
        }
    }, [userInfo.info, searchID, dispatch, proffessionInfo.proffessions]);

    useEffect(() => {
        if(searchInfo.info && !searchInfo.info.is_employer){
            getUserProffession(searchInfo.info.profile.profession_aka_activity, dispatch, proffessionInfo.proffessions)
        }
    }, [searchInfo.info, dispatch, proffessionInfo.proffessions]);

    const handleProfileModal = () => {
        setEditProfile(!editProfile)
    }

    if(searchInfo.info){
        if(searchInfo.info.is_employer){
            return (
                <div></div>
            )
        }else{
            return (
                <div className="profile">
        
                    {editProfile && <ProfileModal handleProfileModal={handleProfileModal} /> }
        
                    <div className="profile__left">
        
                        <div className="profile__left__top">
                           
                            <div className="profile__left__top__img-wrapper">
                                <img src={searchInfo.info.profile.photo ? searchInfo.info.profile.photo : Avatar} alt="avatar" />
                                {/* <div className='onlineStatus' id={user.onlineStatus || 'offline'}></div> */}
                            </div>
                            <div className="profile__left__top__info">
                                <div>
                                    <p>{searchInfo.info.first_name} {searchInfo.info.last_name} <span>{searchInfo.info.profile.is_active_jobseeker && '#ADM'}</span> </p>
                                    {searchInfo.info.profile.jobCategory && searchInfo.info.profile.job ? (
                                        <small>{`${searchInfo.info.profile.jobCategory} | ${searchInfo.info.profile.job}`}</small>
                                    ) : searchInfo.info.profile.job && (
                                        <small>{searchInfo.info.profile.job}</small>
                                    )}
                                </div>
                            </div>
                            {isUsersProfile && (
                                <img onClick={handleProfileModal} className='profile__left__top__change-info' src={pen} alt="pen" />
                            )}
                        </div>
        
                        <div className="profile__left__middle">
        
                            <div className="profile__left__middle__row" id='born-date'>
                                <div>
                                    <img src={calendar} alt="calendar" />
                                    <p>Dzimšanas datums</p>
                                </div>
                                <p>{searchInfo.info.profile.birth_date}</p>
                            </div>
        
                            <div className="profile__left__middle__row" id='city'>
                                <div>
                                    <img src={marker} alt="location" />
                                    <p>Pilsēta</p>
                                </div>
                                <p>{searchInfo.info.profile.city}, {searchInfo.info.profile.country}</p>
                            </div>
        
                        </div>
        
                        <div className="profile__left__bottom">
                            <div className="profile__left__bottom__my-desc">
                                <p className='profile__left__bottom__my-desc__title'>Apraksts par sevi:</p>
                                <p className='profile__left__bottom__my-desc__desc'>{searchInfo.info.profile.bio}</p>
                            </div>
                        </div>
        
                    </div>
        
                    {
                        searchInfo.info.profile.knowledge || 
                        searchInfo.info.profile.experience || 
                        searchInfo.info.profile.extra  ? (
                            <div className="profile__right">
                                {searchInfo.info.profile.knowledge && searchInfo.info.profile.knowledge !== "" && (
                                    <section className="profile__right__section">
                                        <div className="profile__right__section__header">
                                            <p className='profile__right__section__header__title'>Izglītība</p>
                                            {isUsersProfile && (<img src={editingKnowledge ? CloseIcon : pen} alt="edit" onClick={() => setEditingKnowledge(!editingKnowledge)} />)}
                                        </div>
                                        <div className="profile__right__section__items">
                                            {editingKnowledge ? (
                                                <form>
                                                    <textarea 
                                                        value={editKnowledge}
                                                        onChange={(e) => setEditKnowledge(e.target.value)}
                                                        type="text" 
                                                    ></textarea>
                                                    <button onClick={(e) => {updateKnowledgeJobExtra(e, userInfo.info.id, editKnowledge, editLastJob, editExtraSkills, dispatch, userInfo.accessToken);setEditKnowledge(false)}}>Saglabāt</button>
                                                </form>
                                            ) : (
                                                <p>{searchInfo.info.profile.knowledge}</p>
                                            )}
                                        </div>
                                    </section>
                                )}
                                {searchInfo.info.profile.experience && searchInfo.info.profile.experience !== "" && (
                                    <section className="profile__right__section">
                                        <div className="profile__right__section__header">
                                            <p className='profile__right__section__header__title'>{userInfo.info.profile.is_active_jobseeker ? "Pēdējais" : "Esošais"} amats</p>
                                            {isUsersProfile && (<img src={editingLastJob ? CloseIcon : pen} alt="edit" onClick={() => setEditingLastJob(!editingLastJob)} />)}
                                        </div>
                                        <div className="profile__right__section__items">
                                            {editingLastJob ? (
                                                <form>
                                                    <textarea 
                                                        value={editLastJob}
                                                        onChange={(e) => setEditLastJob(e.target.value)}
                                                        type="text" 
                                                    ></textarea>
                                                    <button onClick={(e) => {updateKnowledgeJobExtra(e, userInfo.info.id, editKnowledge, editLastJob, editExtraSkills, dispatch, userInfo.accessToken);setEditingLastJob(false)}}>Saglabāt</button>
                                                </form>
                                            ) : (
                                                <p>{searchInfo.info.profile.experience}</p>
                                            )}
                                        </div>
                                    </section>
                                )}
                                {searchInfo.info.profile.extra && searchInfo.info.profile.extra !== "" && (
                                    <section className="profile__right__section">
                                        <div className="profile__right__section__header">
                                            <p className='profile__right__section__header__title'>Papildus prasmes</p>
                                            {isUsersProfile && (<img src={editingExtraSkills ? CloseIcon : pen} alt="edit" onClick={() => setEditingExtraSkills(!editingExtraSkills)} />)}
                                        </div>
                                        <div className="profile__right__section__items">
                                            {editingExtraSkills ? (
                                                <form>
                                                    <textarea 
                                                        value={editExtraSkills}
                                                        onChange={(e) => setEditExtraSkills(e.target.value)}
                                                        type="text" 
                                                    ></textarea>
                                                    <button onClick={(e) => {updateKnowledgeJobExtra(e, userInfo.info.id, editKnowledge, editLastJob, editExtraSkills, dispatch, userInfo.accessToken);setEditingExtraSkills(false)}}>Saglabāt</button>
                                                </form>
                                            ) : (
                                                <p>{searchInfo.info.profile.extra}</p>
                                            )}
                                        </div>
                                    </section>
                                )}
                            </div>
                        ) : (
                            <div className="profile__right">
                                <h3>Šis lietotājs nav pabeidzis veidot savu profilu</h3>
                            </div>
                        )
                    }
                    
                    
        
                </div>
            )
        }
    }else{
        return <LoadingPopup />
    }
}

export default Profile;