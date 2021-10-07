import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { MESSAGE_OPTIONS } from '../../../logic/chat/chatRoutes';
import { userData } from '../../../slices/user/userSlice';

function Message({msg}) {
    const userInfo = useSelector(userData);
    useEffect(() => {
        if(!msg.isRead){
            axios.post(`${MESSAGE_OPTIONS}/${msg._id}`);
        }
    }, [msg.isRead, msg._id]);

    const relativeTime = (postTime) => {
        const rtf = new Intl.RelativeTimeFormat('lv', {
            localeMatcher: 'best fit',
            numeric: 'auto',
            style: 'long'
        });
        const diff = new Date(postTime) - new Date();
        const units = {
            year  : 24 * 60 * 60 * 1000 * 365,
            month : 24 * 60 * 60 * 1000 * 365/12,
            day   : 24 * 60 * 60 * 1000,
            hour  : 60 * 60 * 1000,
            minute: 60 * 1000,
            second: 1000
        }
        for (const unit in  units) {
            if (Math.abs(diff) > units[unit] || unit === 'seconds') {
                return rtf.format(Math.round(diff/units[unit]), unit)
            }
        }
    }

    return(
        <div className={`chat__messages__message ${msg.senderId === userInfo.info.id ? 'my-msg' : 'target-msg'} ${msg.isRead && 'seen-msg'}`}>
            <div className="chat__messages__message__text-box">
                <p id='msg'>{msg.text}</p>
                <small id='time'>{relativeTime(msg.createdAt)}</small>
            </div>
        </div>
    )
}

export default Message
