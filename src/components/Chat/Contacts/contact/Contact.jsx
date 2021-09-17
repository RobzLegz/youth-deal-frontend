import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getUserChatInfo } from '../../../../logic/user/info/getUserInfo';
import { userData } from '../../../../slices/user/userSlice';
import Avatar from '../../../../assets/svg/avatar.svg';

function Contact({chat}) {
    const [chatMemberInfo, setChatMemberInfo] = useState(null);

    const userInfo = useSelector(userData);
    let otherMembers = chat.users.find(m => m !== userInfo.info.id)
    
    useEffect(() => {
        if(!chatMemberInfo){
            getUserChatInfo(otherMembers, setChatMemberInfo);
        }
    }, [chatMemberInfo, otherMembers]);

    console.log(chatMemberInfo)

    if(chatMemberInfo){
        return(
            <div className="contacts-container__contacts__contacts-list__contact">
                <img src={chatMemberInfo.profile.photo ? chatMemberInfo.profile.photo : Avatar} alt="profile" />
                <div className="contacts-container__contacts__contacts-list__contact__info">
                    <p id="username">{chatMemberInfo.first_name} {chatMemberInfo.last_name}</p>
                </div>
            </div>
        )
    }
    return null;
}

export default Contact
