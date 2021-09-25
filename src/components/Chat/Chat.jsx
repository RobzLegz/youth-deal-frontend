import React, {useState, useEffect, useRef} from 'react';
import './Chat.scss'
// import optionsIcon from '../../../src/assets/svg/options-icon.svg'
import sendIcon from '../../../src/assets/svg/send.svg'
import smileEmoji from '../../../src/assets/svg/emoji/smile.svg'
import Contacts from './Contacts/Contacts';
import {useDispatch, useSelector} from "react-redux";
import {userData} from "../../slices/user/userSlice"
import ContactBook from '../../assets/svg/chat/contact-book.svg'
import { useParams } from 'react-router-dom';
import { getChatByID, newMessage } from '../../logic/chat/chatOptions';
import { chatData, setActiveChatMessages } from '../../slices/chat/chatSlice';
import AvatarIcon from "../../assets/svg/avatar.svg"
import { getChatMessages } from '../../logic/chat/chatOptions';
import {useHistory} from "react-router-dom"
import { socketData } from '../../slices/socket/socketSlice';
import NoChatIcon from "../../assets/svg/chat/nochat.svg";
import CloseIcon from "../../assets/svg/close-black.svg";

function Chat() {
    const {id} = useParams();
    const userInfo = useSelector(userData);
    const chatInfo = useSelector(chatData);
    const socketInfo = useSelector(socketData);

    const [contactsToggled, setContactsToggled] = useState(false)
    const [messageText, setMessageText] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    // const [isOptionsPopup, setIsOptionsPopup] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [emojisOpen, setEmojisOpen] = useState(false);

    const scrollRef = useRef();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if(id && userInfo.info){
            getChatByID(id, userInfo.info.id, dispatch, history);
        }
    }, [id, dispatch, userInfo.info, history]);

    useEffect(() => {
        if(socketInfo.socket){
            socketInfo.socket.on("getMessage", (data) => {
                setArrivalMessage({
                    sender: data.senderId,
                    text: data.text,
                    createdAt: Date.now(),
                });
            });
        }
    }, [socketInfo.socket]);

    useEffect(() => {
        if(arrivalMessage && chatInfo.messages && chatInfo.activeChat.id === arrivalMessage.sender){
            if(chatInfo.messages.length === 0){
                dispatch(setActiveChatMessages([...chatInfo.messages, arrivalMessage]));
                scrollRef.current.scrollIntoView({
                    behavior: "smooth",
                });
            }else if(chatInfo.messages[chatInfo.messages.length - 1].text !== arrivalMessage.text && chatInfo.messages[chatInfo.messages.length - 1].sender !== arrivalMessage.sender){
                dispatch(setActiveChatMessages([...chatInfo.messages, arrivalMessage]));
                scrollRef.current.scrollIntoView({
                    behavior: "smooth",
                });
            }
            
        }
    }, [arrivalMessage, chatInfo.messages, chatInfo.activeChat, dispatch]);

    useEffect(() => {
        if(chatInfo.activeChatID && chatInfo.activeChat && !chatInfo.messages){
            getChatMessages(chatInfo.activeChatID, dispatch);
            
            scrollRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }
    }, [chatInfo.activeChatID, chatInfo.activeChat, dispatch, chatInfo.messages]);

    useEffect(() => {
        if(messageSent){
            console.log("sdsadhi")
            setMessageText("");

            scrollRef.current.scrollIntoView({
                behavior: "smooth",
            });
            setMessageSent(false);
        }
    }, [messageSent]);


    function handleContactsToggle() {
        setContactsToggled(!contactsToggled);
    }

    // function handleOptionsPopup() {
    //     setIsOptionsPopup(() => {
    //         if (isOptionsPopup) {
    //             return false
    //         } else {
    //             return true;
    //         }
    //     })
    // }

    const sendMessage = (e) => {
        e.preventDefault();

        if(socketInfo.socket && messageText !== ""){
            socketInfo.socket.emit("sendMessage", {
                senderId: userInfo.info.id,
                receiverId: chatInfo.activeChat.id,
                text: messageText,
            });
      
            newMessage(userInfo.info.id, chatInfo.activeChat.id, chatInfo.activeChatID, messageText, dispatch, setMessageSent);
        }
    };

    const addEmoji = (emoji) => {
        setMessageText(`${messageText}${emoji}`);
    }

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

    return (
        <div id={'chat-container'}>
            <Contacts 
                active={contactsToggled} 
                handleToggle={handleContactsToggle} 
            />
            {chatInfo.activeChat ? (
                <form className="chat">
                    <img src={ContactBook} alt="contacts" onClick={handleContactsToggle} className="chat__contacts-toggle" />
                    <div className="chat__header">
                        <div className="chat__header__profile-info">
                            {chatInfo.activeChat.profile && (
                                <img src={chatInfo.activeChat.is_employer ? chatInfo.activeChat.profile.logo ? chatInfo.activeChat.profile.logo : AvatarIcon : chatInfo.activeChat.profile.photo ? chatInfo.activeChat.profile.photo : AvatarIcon} alt="renault" onClick={() => history.push(`/profile/${chatInfo.activeChat.id}`)} />
                            )}
                            <div className="chat__header__profile-info__text" onClick={() => history.push(`/profile/${chatInfo.activeChat.id}`)} >
                                <p id="username">{chatInfo.activeChat.is_employer ? `${chatInfo.activeChat.profile.company_name}` : `${chatInfo.activeChat.first_name} ${chatInfo.activeChat.last_name}`}</p>
                                <small id="activity-status">{socketInfo.onlineUsers && socketInfo.onlineUsers.some(u => u.userId === chatInfo.activeChat.id) ? "online" : "offline"}</small>
                            </div>
                        </div>
                        {/* <img onClick={handleOptionsPopup} className="chat__header__profile-option-img" src={optionsIcon} alt="optionsIcon" />
                        <div className={`chat__header__profile-options-popup ${isOptionsPopup ? 'active' : ''}`}>
                            <a href='#profils'>Profils</a>
                            <p>Bez skaņas</p>
                            <p>Bloķēt</p>
                        </div> */}
                    </div>
                    <div className="chat__messages">
                        {chatInfo.messages && chatInfo.messages.map((msg, i) => {
                            if(msg){
                                return(
                                    <div key={i} className={`chat__messages__message ${msg.sender === userInfo.info.id.toString() ? 'my-msg' : 'target-msg'}`}>
                                        <div className="chat__messages__message__text-box">
                                            <p id='msg'>{msg.text}</p>
                                            <small id='time'>{relativeTime(msg.createdAt)}</small>
                                        </div>
                                    </div>
                                )
                            }
                            return null
                        })}
                        <div ref={scrollRef}></div>
                    </div>
                    <div className="chat__input-container">
                        <div className="chat__input-container__options">
                            <img src={smileEmoji} alt="smile" onClick={() => setEmojisOpen(!emojisOpen)} />
                            {emojisOpen && (
                                <div className="chat__input-container__options__emojiOptions">
                                    <div className="chat__input-container__options__emojiOptions__header">
                                        <img src={CloseIcon} alt="close" onClick={() => setEmojisOpen(false)} />
                                    </div>
                                    <ul>
                                        <li onClick={() => addEmoji("😃")}>😃</li>
                                        <li onClick={() => addEmoji("😄")}>😄</li>
                                        <li onClick={() => addEmoji("😅")}>😅</li>
                                        <li onClick={() => addEmoji("😂")}>😂</li>
                                        <li onClick={() => addEmoji("😇")}>😇</li>
                                        <li onClick={() => addEmoji("😱")}>😱</li>
                                        <li onClick={() => addEmoji("🤨")}>🤨</li>
                                    </ul>
                                    <ul>
                                        <li onClick={() => addEmoji("👋")}>👋</li>
                                        <li onClick={() => addEmoji("👌")}>👌</li>
                                        <li onClick={() => addEmoji("👍")}>👍</li>
                                        <li onClick={() => addEmoji("👎")}>👎</li>
                                        <li onClick={() => addEmoji("🙏")}>🙏</li>
                                        <li onClick={() => addEmoji("✌️")}>✌️</li>
                                        <li onClick={() => addEmoji("🤞")}>🤞</li>
                                        <li onClick={() => addEmoji("🤟")}>🤟</li>
                                        <li onClick={() => addEmoji("🤘")}>🤘</li>
                                    </ul>
                                </div>
                            )}
                            <label htmlFor="fileMessage">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26.89" height="26.89" viewBox="0 0 26.89 26.89">
                                    <g id="link" transform="translate(-0.007 0)" opacity="0.8">
                                        <g id="Group_33" data-name="Group 33" transform="translate(0.007 0)">
                                            <g id="Group_32" data-name="Group 32">
                                                <g id="Group_31" data-name="Group 31">
                                                    <path id="Path_361" data-name="Path 361" d="M10.154,188.134,6.986,191.3a3.361,3.361,0,0,1-4.754-4.753l6.338-6.338a3.36,3.36,0,0,1,4.753,0,1.12,1.12,0,0,0,1.585-1.585,5.6,5.6,0,0,0-7.922,0L.647,184.965a5.6,5.6,0,1,0,7.923,7.922l3.169-3.169a1.12,1.12,0,1,0-1.585-1.584Z" transform="translate(0.994 -167.639)" fill="#6d6d6d"/>
                                                    <path id="Path_362" data-name="Path 362" d="M205.157.64a5.6,5.6,0,0,0-7.923,0l-3.8,3.8a1.12,1.12,0,0,0,1.585,1.585l3.8-3.8a3.361,3.361,0,1,1,4.754,4.753L196.6,13.949a3.36,3.36,0,0,1-4.753,0,1.12,1.12,0,0,0-1.585,1.585,5.6,5.6,0,0,0,7.922,0l6.971-6.971A5.6,5.6,0,0,0,205.157.64Z" transform="translate(-179.908 1)" fill="#6d6d6d"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </label>
                            <input type="file" name="fileMessage" id="fileMessage" />
                        </div>
                        <div className="chat__input-container__input">
                            <input type="text" placeholder="Raksti šeit" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
                        </div>
                        <div className="chat__input-container__send">
                            <img src={sendIcon} alt="send icon" onClick={(e) => sendMessage(e)} />
                        </div>
                    </div>
                    <button className="chat__invizButton" onClick={(e) => sendMessage(e)}></button>
                </form>    
            ) : (
                <div className="noChatSelected">
                    <img src={ContactBook} alt="contacts" onClick={handleContactsToggle} className="chat__contacts-toggle" />
                    <p>Izvēlieties kontaktu ar kuru sarakstīties</p>
                    <img src={NoChatIcon} alt="no chat" className="noChatSelected__no-chat-img" />
                </div>
            )}
        </div>
    )
}

export default Chat;