import React, { useState } from 'react';
import dropdown from '../../../../assets/svg/dropdown.svg'
import close from '../../../../assets/svg/close.svg'
import marker from '../../../../assets/svg/marker.svg'

import './ProfileModal.scss';
import { userData } from '../../../../slices/user/userSlice';
import { useSelector } from 'react-redux';

function ProfileModal({handleProfileModal, updateProfileInfo}){
    const userInfo = useSelector(userData);

    const [name, setName] = useState(userInfo.info.first_name);
    const [surname, setSurName] = useState(userInfo.info.last_name);
    const [birthDate, setBirthDate] = useState(userInfo.info.profile.birth_date);
    const [country, setCountry] = useState(userInfo.info.profile.country);
    const [city, setCity] = useState(userInfo.info.profile.city);
    const [isActiveJobSeeker, setIsActiveJobSeeker] = useState(userInfo.info.profile.is_active_jobseeker);
    const [bio, setBio] = useState(userInfo.info.profile.bio);
    const [avatar, setAvatar] = useState(userInfo.info.profile.photo);

    return (
        <div className="profileModal">
            
            <div className="profileModal__inner">
                <div className="profileModal__inner__close">
                    <img onClick={handleProfileModal} src={close} alt="close" />
                </div>
                
                <header className="profileModal__inner__header">
                    <p>Profila rediģēšana</p>
                </header>

                <div className="profileModal__inner__avatar-wrapper">
                    <img src={avatar ? avatar : ""} alt="avatar" />
                    <label htmlFor="avatar">Izmainīt</label>
                    <input type="file" name="avatar" id="avatar" />
                </div>

                <div className="profileModal__inner__personal-information">

                    <div className="profileModal__inner__personal-information__input-group">
                        <label htmlFor="name">Vārds:</label>
                        <input type="text" name='name' id='name' value={name} />
                    </div>

                    <div className="profileModal__inner__personal-information__input-group">
                        <label htmlFor="surname">Uzvārds:</label>
                        <input type="text" name='surname' id='surname' value={surname} />
                    </div>

                    <div className="profileModal__inner__personal-information__input-group">
                        <label htmlFor="position">Nodarbošanas veids:</label>
                        <input type="text" name='position' id='position' value={'user.position'} />
                    </div>

                    <div className="profileModal__inner__personal-information__input-group">
                        <label htmlFor="bornDate">Dzimšanas datums:</label>
                        <div className="profileModal__inner__personal-information__input-group__custom-input">
                            <input type="date" name='bornDate' id='bornDate' value={birthDate} />
                        </div>
                    </div>

                    <div className="profileModal__inner__personal-information__input-group">
                        <label htmlFor="country">Valsts:</label>
                        <div className="profileModal__inner__personal-information__input-group__custom-input">
                            <div>
                                <img src={marker} alt="dropdown" />
                                <input type="text" name='country' id='country' value={country} />
                            </div>
                            <img src={dropdown} alt="dropdown" />
                        </div>
                    </div>

                    <div className="profileModal__inner__personal-information__input-group">
                        <label htmlFor="city">Pilsēta:</label>
                        <div className="profileModal__inner__personal-information__input-group__custom-input">
                            <div>
                                <img src={marker} alt="dropdown" />
                                <input type="text" name='city' id='city' value={city} />
                            </div>
                            <img src={dropdown} alt="dropdown" />
                        </div>
                    </div>

                    <div className="profileModal__inner__personal-information__input-group">
                        <label>Vai esat aktīvā darba meklēšanā?</label>
                        <div className="profileModal__inner__personal-information__input-group__admbuttons">
                            <button className={isActiveJobSeeker ? "profileModal__inner__personal-information__input-group__admbuttons__active" : "profileModal__inner__personal-information__input-group__admbuttons__notactive"}>Jā</button>
                            <button className={!isActiveJobSeeker ? "profileModal__inner__personal-information__input-group__admbuttons__active" : "profileModal__inner__personal-information__input-group__admbuttons__notactive"}>Nē</button>
                        </div>
                    </div>

                </div>

                <div className="profileModal__inner__desc">
                    <label htmlFor="aboutme">Apraksts par sevi:</label>
                    <textarea name="aboutme" id="aboutme" cols="10" rows="10" value={bio}></textarea>
                </div>

                <div className="profileModal__inner__edit-options">
                    <button onClick={handleProfileModal}>Atpakaļ</button>
                    <button onClick={updateProfileInfo}>Saglabāt</button>
                </div>

            </div>

        </div>
    )
}

export default ProfileModal;