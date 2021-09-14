import React, { useState } from 'react';
import './Contacts.scss'
import settingsIcon from '../../../assets/svg/settings-icon.svg'
import assignIcon from '../../../assets/svg/assign-icon.svg'
import searchIcon from '../../../assets/svg/search-icon.svg'
import Settings from '../Settings/Settings';


function Contacts() {
    const [isSettingsPopup, setIsSettingsPopup] = useState(false)

    function closePopup(){
        setIsSettingsPopup(false);
    }
    
    return(
        <div className="contacts-container">
            {isSettingsPopup && <Settings closePopup={closePopup} /> }
            <header className="contacts-container__header">
                <img onClick={() => setIsSettingsPopup(!isSettingsPopup)}src={settingsIcon} alt="settingsIcon" className="contacts-container__header__settings" />
                <p>Pēdējie kontakti</p>
                <img src={assignIcon} alt="assignIcon" className="contacts-container__header__add-contact" />
            </header>
            <div className="contacts-container__contacts">
                
                <div className="contacts-container__contacts__find-contacts">
                    <div className="input-group">
                        <img src={searchIcon} alt="searchIcon" />
                        <input type="text" placeholder='Meklēt kontaktu' />
                    </div>
                </div>

                <div className="contacts-container__contacts__contacts-list">
                    <div className="contacts-container__contacts__contacts-list__contact">
                    
                        <img src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" alt="renault" />
                        <div className="contacts-container__contacts__contacts-list__contact__info">
                            <p id="username">Poseidons</p>
                            <small id="last-msg">Last Message</small>
                        </div>
                        <p className="contacts-container__contacts__contacts-list__contact__last-msg-time">15:09</p>

                    </div>
                    <div className="contacts-container__contacts__contacts-list__contact">
                    
                        <img src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" alt="renault" />
                        <div className="contacts-container__contacts__contacts-list__contact__info">
                            <p id="username">Poseidons</p>
                            <small id="last-msg">Last Message</small>
                        </div>
                        <p className="contacts-container__contacts__contacts-list__contact__last-msg-time">15:09</p>

                    </div>
                    <div className="contacts-container__contacts__contacts-list__contact">
                    
                    <img src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" alt="renault" />
                    <div className="contacts-container__contacts__contacts-list__contact__info">
                        <p id="username">Poseidons</p>
                        <small id="last-msg">Last Message</small>
                    </div>
                    <p className="contacts-container__contacts__contacts-list__contact__last-msg-time">15:09</p>

                </div>
                    <div className="contacts-container__contacts__contacts-list__contact">
                        
                        <img src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" alt="renault" />
                        <div className="contacts-container__contacts__contacts-list__contact__info">
                            <p id="username">Poseidons</p>
                            <small id="last-msg">Last Message</small>
                        </div>
                        <p className="contacts-container__contacts__contacts-list__contact__last-msg-time">15:09</p>

                    </div>
                    <div className="contacts-container__contacts__contacts-list__contact">
                        
                        <img src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" alt="renault" />
                        <div className="contacts-container__contacts__contacts-list__contact__info">
                            <p id="username">Poseidons</p>
                            <small id="last-msg">Last Message</small>
                        </div>
                        <p className="contacts-container__contacts__contacts-list__contact__last-msg-time">15:09</p>

                    </div>
                    <div className="contacts-container__contacts__contacts-list__contact">
                        
                        <img src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" alt="renault" />
                        <div className="contacts-container__contacts__contacts-list__contact__info">
                            <p id="username">Poseidons</p>
                            <small id="last-msg">Last Message</small>
                        </div>
                        <p className="contacts-container__contacts__contacts-list__contact__last-msg-time">15:09</p>

                    </div>
                    <div className="contacts-container__contacts__contacts-list__contact">
                        
                        <img src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" alt="renault" />
                        <div className="contacts-container__contacts__contacts-list__contact__info">
                            <p id="username">Poseidons</p>
                            <small id="last-msg">Last Message</small>
                        </div>
                        <p className="contacts-container__contacts__contacts-list__contact__last-msg-time">15:09</p>

                    </div>
                    <div className="contacts-container__contacts__contacts-list__contact">
                        
                        <img src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" alt="renault" />
                        <div className="contacts-container__contacts__contacts-list__contact__info">
                            <p id="username">Poseidons</p>
                            <small id="last-msg">Last Message</small>
                        </div>
                        <p className="contacts-container__contacts__contacts-list__contact__last-msg-time">15:09</p>

                    </div>
                    <div className="contacts-container__contacts__contacts-list__contact">
                        
                        <img src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" alt="renault" />
                        <div className="contacts-container__contacts__contacts-list__contact__info">
                            <p id="username">Poseidons</p>
                            <small id="last-msg">Last Message</small>
                        </div>
                        <p className="contacts-container__contacts__contacts-list__contact__last-msg-time">15:09</p>

                    </div>
                    <div className="contacts-container__contacts__contacts-list__contact">
                        
                        <img src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" alt="renault" />
                        <div className="contacts-container__contacts__contacts-list__contact__info">
                            <p id="username">Poseidons</p>
                            <small id="last-msg">Last Message</small>
                        </div>
                        <p className="contacts-container__contacts__contacts-list__contact__last-msg-time">15:09</p>

                    </div>
                    <div className="contacts-container__contacts__contacts-list__contact">
                        
                        <img src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" alt="renault" />
                        <div className="contacts-container__contacts__contacts-list__contact__info">
                            <p id="username">Poseidons</p>
                            <small id="last-msg">Last Message</small>
                        </div>
                        <p className="contacts-container__contacts__contacts-list__contact__last-msg-time">15:09</p>

                    </div>
                    <div className="contacts-container__contacts__contacts-list__contact">
                    
                    <img src="https://group.renault.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg" alt="renault" />
                    <div className="contacts-container__contacts__contacts-list__contact__info">
                        <p id="username">Poseidons</p>
                        <small id="last-msg">Last Message</small>
                    </div>
                    <p className="contacts-container__contacts__contacts-list__contact__last-msg-time">15:09</p>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts