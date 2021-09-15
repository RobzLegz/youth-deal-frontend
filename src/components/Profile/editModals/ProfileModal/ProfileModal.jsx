import React, { useEffect, useState } from 'react';
import dropdown from '../../../../assets/svg/dropdown.svg'
import close from '../../../../assets/svg/close.svg'
import marker from '../../../../assets/svg/marker.svg'
import Avatar from '../../../../assets/svg/avatar.svg'

import './ProfileModal.scss';
import { userData } from '../../../../slices/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { locationData } from '../../../../slices/locations/locationSlice';
import { getCountryCities } from '../../../../logic/locations/getLoactionData';
import { updateProfileInfo } from '../../../../logic/user/info/updateProfileInfo';

function ProfileModal({handleProfileModal}){
    const userInfo = useSelector(userData);
    const locationInfo = useSelector(locationData);

    const [name, setName] = useState(userInfo.info.first_name);
    const [surname, setSurName] = useState(userInfo.info.last_name);
    const [birthDate, setBirthDate] = useState(userInfo.info.profile.birth_date);
    const [country, setCountry] = useState(userInfo.info.profile.country);
    const [city, setCity] = useState(userInfo.info.profile.city);
    const [isActiveJobSeeker, setIsActiveJobSeeker] = useState(userInfo.info.profile.is_active_jobseeker);
    const [bio, setBio] = useState(userInfo.info.profile.bio);
    const [avatar] = useState(userInfo.info.profile.photo);
    const [noAvatar, setNoAvatar] = useState();

    const [countryListOpen, setCountryListOpen] = useState(false);
    const [cityListOpen, setCityListOpen] = useState(false);

    const dispatch = useDispatch();

    const selectAvatar = (e) => {
        if(e.target.files && e.target.files[0]){
            setNoAvatar(e.target.files[0]);
            console.log(noAvatar)
        }
    }

    useEffect(() => {
        if(country && country !== "" && locationInfo.countries.some(c => c.country_name === country)){
            getCountryCities(country, dispatch);
        }
    }, [country, dispatch, locationInfo.countries]);

    const sendData = () => {
        if(
            country !== userInfo.info.profile.country || 
            city !== userInfo.info.profile.city || 
            name !== userInfo.info.name || 
            surname !== userInfo.info.surname || 
            birthDate !== userInfo.info.profile.birth_date || 
            isActiveJobSeeker !== userInfo.info.profile.is_active_jobseeker || 
            bio !== userInfo.info.profile.bio ||
            avatar !== userInfo.info.profile.photo
        ){
            updateProfileInfo(
                userInfo.info.id,
                avatar,
                bio,
                birthDate,
                country,
                city,
                userInfo.info.profile.interests,
                userInfo.info.profile.experience,
                userInfo.info.profile.languages,
                userInfo.info.profile.knowledge,
                userInfo.info.profile.extra,
                parseInt(userInfo.info.profile.profession_aka_activity),
                isActiveJobSeeker,
                dispatch,
                userInfo.accessToken
            );
        }
    }
    
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
                    <img src={avatar ? avatar : Avatar} alt="avatar" />
                    <label htmlFor="avatar">Izmainīt</label>
                    <input type="file" name="avatar" id="avatar" onChange={(e) => selectAvatar(e)} />
                </div>

                <div className="profileModal__inner__personal-information">

                    <div className="profileModal__inner__personal-information__input-group">
                        <label htmlFor="name">Vārds:</label>
                        <input
                            type="text"
                            name='name' 
                            id='name' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="profileModal__inner__personal-information__input-group">
                        <label htmlFor="surname">Uzvārds:</label>
                        <input
                            type="text"
                            name='surname' 
                            id='surname' 
                            value={surname}
                            onChange={(e) => setSurName(e.target.value)}
                        />
                    </div>

                    <div className="profileModal__inner__personal-information__input-group">
                        <label>Profesija</label>
                        <button className="profileModal__inner__personal-information__input-group__jobselection">Izvēlēties</button>
                    </div>

                    <div className="profileModal__inner__personal-information__input-group">
                        <label htmlFor="bornDate">Dzimšanas datums:</label>
                        <div className="profileModal__inner__personal-information__input-group__custom-input">
                            <input 
                                type="date" 
                                name='bornDate' 
                                id='bornDate' 
                                value={birthDate} 
                                onChange={(e) => setBirthDate(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="profileModal__inner__personal-information__input-group">
                        <label htmlFor="country">Valsts:</label>
                        <div className="profileModal__inner__personal-information__input-group__custom-input">
                            <div onClick={() => setCountryListOpen(!countryListOpen)}>
                                <img src={marker} alt="dropdown" />
                                <input
                                    type="text"
                                    name='country' 
                                    autoComplete="off"
                                    id='country' 
                                    value={country}
                                    onChange={(e) => {setCountry(e.target.value);setCountryListOpen(true)}}
                                />
                            </div>
                            <img src={dropdown} alt="dropdown" />
                            <ul className={countryListOpen ? "profileModal__inner__personal-information__input-group__custom-input__listopened" : "profileModal__inner__personal-information__input-group__custom-input__listclosed"}>
                                {locationInfo.countries.map((mappedCountry, i) => {
                                    if(mappedCountry && mappedCountry.country_name && mappedCountry.country_name.substr(0, country.length).toLowerCase() === country.toLowerCase()){
                                        return <li key={i} onClick={() => {setCountry(mappedCountry.country_name);setCountryListOpen(false)}}>{mappedCountry.country_name}</li>
                                    }

                                    return null;
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="profileModal__inner__personal-information__input-group">
                        <label htmlFor="city">Pilsēta:</label>
                        <div className="profileModal__inner__personal-information__input-group__custom-input">
                            <div onClick={() => setCityListOpen(!cityListOpen)}>
                                <img src={marker} alt="dropdown" />
                                <input
                                    type="text"
                                    name='city' 
                                    id='city' 
                                    autoComplete="off"
                                    value={city}
                                    onChange={(e) => {setCity(e.target.value);setCityListOpen(true)}}
                                />
                            </div>
                            <img src={dropdown} alt="dropdown" />
                            <ul className={cityListOpen && locationInfo.countryCitys ? "profileModal__inner__personal-information__input-group__custom-input__listopened" : "profileModal__inner__personal-information__input-group__custom-input__listclosed"}>
                                {locationInfo.countryCitys && locationInfo.countryCitys.map((mappedCity, i) => {
                                    if(mappedCity && mappedCity.state_name && mappedCity.state_name.substr(0, city.length).toLowerCase() === city.toLowerCase()){
                                        return <li key={i} onClick={() => {setCity(mappedCity.state_name);setCityListOpen(false)}}>{mappedCity.state_name}</li>
                                    }

                                    return null;
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="profileModal__inner__personal-information__input-group">
                        <label>Vai esat aktīvā darba meklēšanā?</label>
                        <div className="profileModal__inner__personal-information__input-group__admbuttons">
                            <button 
                                className={isActiveJobSeeker ? "profileModal__inner__personal-information__input-group__admbuttons__active" : "profileModal__inner__personal-information__input-group__admbuttons__notactive"}
                                onClick={() => setIsActiveJobSeeker(true)}
                            >Jā</button>
                            <button 
                                className={!isActiveJobSeeker ? "profileModal__inner__personal-information__input-group__admbuttons__active" : "profileModal__inner__personal-information__input-group__admbuttons__notactive"}
                                onClick={() => setIsActiveJobSeeker(false)}
                            >Nē</button>
                        </div>
                    </div>
                </div>

                <div className="profileModal__inner__desc">
                    <label htmlFor="aboutme">Apraksts par sevi:</label>
                    <textarea 
                        name="aboutme" 
                        id="aboutme" 
                        cols="10" 
                        rows="10" 
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                </div>

                <div className="profileModal__inner__edit-options">
                    <button onClick={handleProfileModal}>Atpakaļ</button>
                    <button onClick={() => sendData()}>Saglabāt</button>
                </div>

            </div>

        </div>
    )
}

export default ProfileModal;