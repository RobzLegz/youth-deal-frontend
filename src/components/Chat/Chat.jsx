import React, {useState, useEffect} from 'react';
import './Chat.scss'
import optionsIcon from '../../../src/assets/svg/options-icon.svg'
import sendIcon from '../../../src/assets/svg/send.svg'
import smileEmoji from '../../../src/assets/svg/emoji/smile.svg'
import Contacts from './Contacts/Contacts';
import {io} from "socket.io-client";
import {useSelector} from "react-redux";
import {userData} from "../../slices/user/userSlice"

function Chat() {
    const userInfo = useSelector(userData)

    const [socket, setSocket] = useState(null);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [currentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    // const [newMessage, setNewMessage] = useState("");
    const [isOptionsPopup, setIsOptionsPopup] = useState(false)

    useEffect(() => {
        if(socket){
            if(userInfo.info){
                socket.emit("addUser", userInfo.info.id);
                socket.on("getUsers", users => {
                    console.log(users)
                })
            }

            socket.on("getMessage", (data) => {
                setArrivalMessage({
                  sender: data.senderId,
                  text: data.text,
                  createdAt: Date.now(),
                });
              });
        }else{
            setSocket(io("ws://localhost:8900"));
        }
    }, [socket, userInfo.info]);

    useEffect(() => {
        if(arrivalMessage && currentChat){
            currentChat.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
        }
      }, [arrivalMessage, currentChat]);


    function handleOptionsPopup() {
        setIsOptionsPopup(() => {
            if (isOptionsPopup) {
                return false
            } else {
                return true;
            }
        })
    }

    return (
        <div id={'chat-container'}>

            
            <Contacts />
            <div className="chat">
                <div className="chat__header">
                    <div className="chat__header__profile-info">
                        <img src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" alt="renault" />
                        
                        <div className="chat__header__profile-info__text">
                            <p id="username">Poseidons</p>
                            <small id="activity-status">online</small>
                        </div>

                    </div>
                    <img onClick={handleOptionsPopup} className="chat__header__profile-option-img" src={optionsIcon} alt="optionsIcon" />
                    <div className={`chat__header__profile-options-popup ${isOptionsPopup ? 'active' : ''}`}>
                        <a href='#profils'>Profils</a>
                        <p>Bez skaņas</p>
                        <p>Bloķēt</p>
                    </div>
                </div>
                <div className="chat__messages">
                    {messages.map((msg, i) => (
                        
                        <div key={i} className={`chat__messages__message ${msg.author === userInfo.info.name ? 'my-msg' : 'target-msg'}`}>
                            <div className="chat__messages__message__text-box">
                                <p id='msg'>{msg.message}</p>
                                <small id='time'>12:20</small>
                            </div>
                        </div>

                    ))}
                </div>
                <div className="chat__input-container">
                    <div className="chat__input-container__options">
                        <img src={smileEmoji} alt="smile" />
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
                    </div>
                    <div className="chat__input-container__input">
                        <input type="text" placeholder="Raksti šeit" />
                    </div>
                    <div className="chat__input-container__send">
                        <img src={sendIcon} alt="send icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;