import React, { useState } from 'react';
import './Contacts.scss'
import searchIcon from '../../../assets/svg/search-icon.svg'
import { useSelector } from 'react-redux';
import { chatData } from '../../../slices/chat/chatSlice';
import { userData } from '../../../slices/user/userSlice';
import Contact from './contact/Contact';
import Close from '../../../assets/svg/close.svg'

function Contacts({ active, handleToggle }) {
    const [search, setSearch] = useState("");

    const chatInfo = useSelector(chatData);
    const userInfo = useSelector(userData);
    
    return(
        <div className={`contacts-container ${active ? 'active' : ''}`}>
            <header className="contacts-container__header">
                <p>Pēdējie kontakti</p>
                <img src={Close} alt="close" onClick={() => handleToggle()} className="contacts-container__header__close" />
            </header>
            <div className="contacts-container__contacts">
                
                <div className="contacts-container__contacts__find-contacts">
                    <div className="input-group">
                        <img src={searchIcon} alt="searchIcon" />
                        <input type="text" placeholder='Meklēt kontaktu' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>

                <div className="contacts-container__contacts__contacts-list">
                    {chatInfo.chats && userInfo.info && chatInfo.chats.map((chat, i) => (
                        <Contact 
                            chat={chat}
                            key={i}
                            search={search}
                            setSearch={setSearch}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contacts