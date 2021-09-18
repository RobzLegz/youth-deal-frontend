import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserChatInfo } from '../../../logic/user/info/getUserInfo';
import { userData } from '../../../slices/user/userSlice';
import Avatar from '../../../assets/svg/avatar.svg';

function Contact({contact}) {
    const [chatMemberInfo, setChatMemberInfo] = useState(null);
    const [otherMembers, setOtherMembers] = useState(null);
    const [name, setName] = useState(null);

    const history = useHistory();
    const userInfo = useSelector(userData);

    useEffect(() => {
        if(!otherMembers){
            setOtherMembers(parseInt(contact.users.find(m => m !== userInfo.info.id.toString())))
        }
    }, [otherMembers, userInfo.info.id, contact.users]);


    useEffect(() => {
        if(!chatMemberInfo && otherMembers){
            getUserChatInfo(otherMembers, setChatMemberInfo);
        }else if(chatMemberInfo){
            setName(`${chatMemberInfo.first_name} ${chatMemberInfo.last_name}`);
        }
    }, [chatMemberInfo, otherMembers]);

    if(chatMemberInfo){
        return (
            <div className="auth-home__right__chat__contact" onClick={() => history.push(`/chats/${contact._id}`)}>
                <img src={chatMemberInfo.profile.photo ? chatMemberInfo.profile.photo : Avatar} alt="profile" />
                <div className="auth-home__right__chat__contact__info">
                    <p id="username">{name}</p>
                    {/* <small id="last-msg">{contact.last_msg}</small> */}
                </div>
                <p className="auth-home__right__chat__contact__last-msg-time">{contact.last_msg_time}</p>
            </div>
        )
    }else{
        return null;
    }
    
}

export default Contact
