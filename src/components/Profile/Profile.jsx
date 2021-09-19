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
import { NewChat } from '../../logic/chat/chatOptions';
import { socketData } from '../../slices/socket/socketSlice';
import { chatData } from '../../slices/chat/chatSlice';

function Profile(){
    const [editProfile, setEditProfile] = useState(false);
    const [isUsersProfile, setIsUsersProfile] = useState(false);
    const [editingKnowledge, setEditingKnowledge] = useState(false);
    const [editingLastJob, setEditingLastJob] = useState(false);
    const [editingExtraSkills, setEditingExtraSkills] = useState(false);
    const [hasChat, setHasChat] = useState(null);

    const {searchID} = useParams()

    const userInfo = useSelector(userData);
    const chatInfo = useSelector(chatData);
    const searchInfo = useSelector(searchData);
    const socketInfo = useSelector(socketData);
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
        if(chatInfo.chats && searchInfo.info && hasChat === null){
            setHasChat(chatInfo.chats.some(c => c.users.includes(searchInfo.info.id.toString())));
        }
    }, [chatInfo.chats, searchInfo.info, hasChat]);

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

    const EditForm = ({ value, setValue, setEditing }) => {
        return (
            <form>
                <textarea 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text" 
                ></textarea>
                <button onClick={(e) => {updateKnowledgeJobExtra(e, userInfo.info.id, editKnowledge, editLastJob, editExtraSkills, dispatch, userInfo.accessToken);setEditing(false)}}>Saglabāt</button>
            </form>
        )
    }

    const ProfileRightSection = ({ title, value, formValue, setFormValue, editing, setEditing }) => {
        return (value && value !== "") ? (
            <section className="profile__right__section">
                <div className="profile__right__section__header">
                    <p className='profile__right__section__header__title'>{title}</p>
                    {isUsersProfile && (<img src={editing ? CloseIcon : pen} alt="edit" onClick={() => setEditing(!editing)} />)}
                </div>
                <div className="profile__right__section__items">
                    {editing && isUsersProfile ? (
                        <EditForm value={formValue} setValue={setFormValue} setEditing={setEditing} />
                    ) : (
                        <p>{value}</p>
                    )}
                </div>
            </section>
        ) : <>
            {isUsersProfile ? (
                <section className="profile__right__section">
                    <div className="profile__right__section__header">
                        <p className='profile__right__section__header__title'>{title}</p>
                    </div>
                    <div className="profile__right__section__items">
                        <EditForm value={formValue} setValue={setFormValue} setEditing={setEditing} />
                    </div>
                </section>
            ) : <></>}
        </>
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
                                {/* <div className='onlineStatus' id={socketInfo.onlineUsers.some(s => s.userId === searchInfo.info.id) ? 'online' : 'offline'}></div> */}
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
                                {!isUsersProfile && userInfo.info.id && searchInfo.info.id && hasChat !== null && (
                                    <button
                                        onClick={() => {
                                            if(hasChat){
                                                history.push("/chat")
                                            }else{
                                                NewChat(userInfo.info.id, searchInfo.info.id, history, dispatch);
                                            }
                                        }}
                                    >{hasChat ? "Sarakste" : "Sākt saraksti"}</button>
                                )}
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
                        searchInfo.info.profile.extra ? (
                            <div className="profile__right">
                                <ProfileRightSection
                                    title="Izglītība"
                                    value={searchInfo.info.profile.knowledge}
                                    formValue={editKnowledge}
                                    setFormValue={setEditKnowledge}
                                    editing={editingKnowledge}
                                    setEditing={setEditingKnowledge}
                                />
                                <ProfileRightSection
                                    title={userInfo.info.profile.is_active_jobseeker ? "Pēdējais" : "Esošais"}
                                    value={searchInfo.info.profile.experience}
                                    formValue={editLastJob}
                                    setFormValue={setEditLastJob}
                                    editing={editingLastJob}
                                    setEditing={setEditingLastJob}
                                />
                                <ProfileRightSection
                                    title="Papildus prasmes"
                                    value={searchInfo.info.profile.extra}
                                    formValue={editExtraSkills}
                                    setFormValue={setEditExtraSkills}
                                    editing={editingExtraSkills}
                                    setEditing={setEditingExtraSkills}
                                />
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