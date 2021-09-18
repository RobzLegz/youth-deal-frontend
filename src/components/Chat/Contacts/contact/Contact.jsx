import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserChatInfo } from '../../../../logic/user/info/getUserInfo';
import { userData } from '../../../../slices/user/userSlice';
import Avatar from '../../../../assets/svg/avatar.svg';
import CloseIcon from '../../../../assets/svg/close.svg';
import Option from '../../../../assets/svg/options-icon-no-background.svg'
import {useHistory} from "react-router-dom"
import { deleteChat } from '../../../../logic/chat/chatOptions';

function Contact({chat, search, setSearch}) {
    const [chatMemberInfo, setChatMemberInfo] = useState(null);
    const [contactOptionsActive, setContactOptionsActive] = useState(false);
    const [name, setName] = useState(null);

    const history = useHistory();
    const dispatch = useDispatch();

    const userInfo = useSelector(userData);
    let otherMembers = parseInt(chat.users.find(m => m !== userInfo.info.id.toString()))
    
    useEffect(() => {
        if(!chatMemberInfo){
            getUserChatInfo(otherMembers, setChatMemberInfo);
        }else{
            setName(`${chatMemberInfo.first_name} ${chatMemberInfo.last_name}`);
        }
    }, [chatMemberInfo, otherMembers]);

    if(chatMemberInfo && (search === "" || name.substr(0, search.length).toLowerCase() === search.toLowerCase())){
        return(
            <div className="contacts-container__contacts__contacts-list__contact" onClick={() => {history.push(`/chats/${chat._id}`);setSearch("")}}>
                <img src={chatMemberInfo.profile.photo ? chatMemberInfo.profile.photo : Avatar} alt="profile" className="contacts-container__contacts__contacts-list__contact__avatar" />
                <div className="contacts-container__contacts__contacts-list__contact__info">
                    <p id="username">{name}</p>
                </div>
                <img src={Option} alt="options" className="contacts-container__contacts__contacts-list__contact__options" onClick={() => setContactOptionsActive(true)} />
                {contactOptionsActive && (
                    <ul className="contacts-container__contacts__contacts-list__options">
                        <div className="contacts-container__contacts__contacts-list__options__header">
                            <img src={CloseIcon} alt="close" onClick={() => setContactOptionsActive(false)} />
                        </div>
                        <li onClick={() => deleteChat(chat._id, userInfo.info.id, dispatch)}>Dzēst saraksti</li>
                    </ul>
                )}
            </div>
        )
    }
    return null;
}

export default Contact
