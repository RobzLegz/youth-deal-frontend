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
import { updateMainInfo } from '../../../../logic/user/info/updateProfileInfo';
import ProffessionPopup from '../../../popups/proffessions/ProffessionPopup';
import { getUserJobNoSearch } from '../../../../logic/user/proffessions/proffessions';
import { proffessionData } from '../../../../slices/proffessions/proffessionSlice';

function ProfileModal({handleProfileModal}){
    const userInfo = useSelector(userData);
    const locationInfo = useSelector(locationData);
    const proffessionInfo = useSelector(proffessionData);

    const [name, setName] = useState(userInfo.info.first_name);
    const [surname, setSurName] = useState(userInfo.info.last_name);
    const [companyName, setCompanyName] = useState(userInfo.info.profile.company_name);
    const [website, setWebsite] = useState(userInfo.info.profile.website_url);
    const [companySize, setCompanySize] = useState(userInfo.info.profile.company_size);
    const [phoneNumber, setPhoneNumber] = useState(userInfo.info.profile.phone_number);
    const [email, setEmail] = useState(userInfo.info.email);
    const [birthDate, setBirthDate] = useState(userInfo.info.profile.birth_date);
    const [country, setCountry] = useState(userInfo.info.profile.country);
    const [city, setCity] = useState(userInfo.info.profile.city);
    const [isActiveJobSeeker, setIsActiveJobSeeker] = useState(userInfo.info.profile.is_active_jobseeker);
    const [bio, setBio] = useState(userInfo.info.profile.bio);
    const [avatar, setAvatar] = useState(userInfo.info.profile.photo);
    const [sendAvatar, setSendAvatar] = useState(userInfo.info.profile.photo);
    const [proffessionID, setProffessionID] = useState(userInfo.info.profile.profession_aka_activity);

    const [countryListOpen, setCountryListOpen] = useState(false);
    const [cityListOpen, setCityListOpen] = useState(false);
    const [companySizeListOpen, setCompanySizeListOpen] = useState(false);

    const [proffessionListOpen, setProffessionListOpen] = useState(false);

    const dispatch = useDispatch();

    const selectAvatar = (e) => {
        if(e.target.files && e.target.files[0]){
            setAvatar(URL.createObjectURL(e.target.files[0]))
            setSendAvatar(e.target.files[0]);
        }
    }

    useEffect(() => {
        if(proffessionID){
            getUserJobNoSearch(proffessionID, dispatch, proffessionInfo.proffessions);
        }
    }, [proffessionID, dispatch, proffessionInfo.proffessions]);

    useEffect(() => {
        if(country && country !== "" && locationInfo.countries.some(c => c.country_name === country)){
            getCountryCities(country, dispatch, locationInfo.token);
        }
    }, [country, dispatch, locationInfo.countries, locationInfo.token]);

    const sendData = (e) => {
        e.preventDefault();
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
            updateMainInfo(
                userInfo.info.email,
                name,
                surname,
                userInfo.info.id,
                sendAvatar,
                bio,
                birthDate,
                country,
                city,
                proffessionID,
                isActiveJobSeeker,
                dispatch,
                userInfo.accessToken
            );
            handleProfileModal();
        }else{
            handleProfileModal();
        }
    }

    return (
        <div className="profileModal">
            <form className="profileModal__inner" autoComplete="off">
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

                    {userInfo.info.is_employer ?
                        <>
                            <div className="profileModal__inner__personal-information__input-group">
                                <label htmlFor="company_name">Kompānijas nosaukums:</label>
                                <input
                                    type="text"
                                    name='company_name'
                                    id='company_name'
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </div>

                            <div className="profileModal__inner__personal-information__input-group">
                                <label htmlFor="website">Mājas lapa:</label>
                                <input
                                    type="url"
                                    name='website'
                                    id='website'
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
                            </div>

                            <div className="profileModal__inner__personal-information__input-group">
                                <label htmlFor="company_size">Darbinieku skaits:</label>
                                <div className="profileModal__inner__personal-information__input-group__custom-input">
                                    <div onClick={() => setCompanySizeListOpen(true)}>
                                        <input
                                            type="text"
                                            name='company_size'
                                            id='company_size'
                                            autoComplete="off"
                                            readOnly
                                            value={companySize}
                                            onChange={(e) => setCompanySize(e.target.value)}
                                        />
                                    </div>
                                    <img src={dropdown} alt="dropdown" onClick={() => setCompanySizeListOpen(!countryListOpen)} />
                                    <ul className={companySizeListOpen ? "profileModal__inner__personal-information__input-group__custom-input__listopened" : "profileModal__inner__personal-information__input-group__custom-input__listclosed"}>
                                        {['1-10', '10-50', '50-100', '100-250', '250-500', '500+'].map((ammount, i) => 
                                            <li key={i} onClick={() => {setCompanySize(ammount);setCompanySizeListOpen(false)}}>{ammount}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="profileModal__inner__personal-information__input-group">
                                <label htmlFor="phone_number">Telefona nummurs:</label>
                                <input
                                    type="tel"
                                    name='phone_number'
                                    id='phone_number'
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>

                            <div className="profileModal__inner__personal-information__input-group">
                                <label htmlFor="email">E-pasts:</label>
                                <input
                                    type="email"
                                    name='email'
                                    id='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </> :
                        <>
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
                                <label>Profesija{userInfo.info.profile.user_proffession && `: ${userInfo.info.profile.user_proffession}`}</label>
                                <button 
                                    className="profileModal__inner__personal-information__input-group__jobselection"
                                    onClick={(e) => {e.preventDefault();setProffessionListOpen(true)}}
                                >{userInfo.info.profile.user_proffession ? "Mainīt" : "Izvēlēties"}</button>

                                {proffessionListOpen && (
                                    <ProffessionPopup 
                                        proffessionID={proffessionID}
                                        setProffessionID={setProffessionID}
                                        setProffessionListOpen={setProffessionListOpen}
                                    />
                                )}
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
                        </>
                    }

                    <div className="profileModal__inner__personal-information__input-group">
                        <label htmlFor="country">Valsts:</label>
                        <div className="profileModal__inner__personal-information__input-group__custom-input">
                            <div onClick={() => setCountryListOpen(true)}>
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
                            <img src={dropdown} alt="dropdown" onClick={() => setCountryListOpen(!countryListOpen)} />
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
                            <div onClick={() => setCityListOpen(true)}>
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
                            <img src={dropdown} alt="dropdown" onClick={() => setCityListOpen(!cityListOpen)} />
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

                    {!userInfo.info.is_employer &&
                        <div className="profileModal__inner__personal-information__input-group">
                            <label>Vai esat aktīvā darba meklēšanā?</label>
                            <div className="profileModal__inner__personal-information__input-group__admbuttons">
                                <button 
                                    className={isActiveJobSeeker ? "profileModal__inner__personal-information__input-group__admbuttons__active" : "profileModal__inner__personal-information__input-group__admbuttons__notactive"}
                                    onClick={(e) => {e.preventDefault();setIsActiveJobSeeker(true)}}
                                >Jā</button>
                                <button 
                                    className={!isActiveJobSeeker ? "profileModal__inner__personal-information__input-group__admbuttons__active" : "profileModal__inner__personal-information__input-group__admbuttons__notactive"}
                                    onClick={(e) => {e.preventDefault();setIsActiveJobSeeker(false)}}
                                >Nē</button>
                            </div>
                        </div>
                    }
                </div>

                <div className="profileModal__inner__desc">
                    <label htmlFor="aboutme">{userInfo.info.is_employer ?  'Kompānijas apraksts:' : 'Apraksts par sevi:'}</label>
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
                    <button onClick={(e) => {e.preventDefault();handleProfileModal()}}>Atpakaļ</button>
                    <button onClick={(e) => sendData(e)}>Saglabāt</button>
                </div>

            </form>

        </div>
    )
}

export default ProfileModal;