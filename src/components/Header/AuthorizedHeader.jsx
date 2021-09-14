import React, { useState } from 'react'
import dropdown from '../../assets/svg/dropdown.svg'
import Crown from '../../assets/svg/crown.svg'
import Language from '../../assets/svg/global.svg'
import { useSelector } from 'react-redux';
import { logoutUser, userData } from '../../slices/user/userSlice';
import './AuthorizedHeader.scss'
import { useHistory } from 'react-router-dom';
import LoadingPopup from '../popups/loading/LoadingPopup'
import { useDispatch } from 'react-redux'
import { proffessionData } from '../../slices/proffessions/proffessionSlice'
import Avatar from '../../assets/svg/avatar.svg';

function AuthorizedHeader() {
    const [search, setSearch] = useState("");

    const proffessionInfo = useSelector(proffessionData);
    const userInfo = useSelector(userData);
    const history = useHistory();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const logout = () => {
        window.localStorage.removeItem("accessToken");
        dispatch(logoutUser());
        history.push("/");
    };

    if(userInfo.info){
        return (
            <nav>
                <div className="header__top">
                    <div className="header__top__left">
                        <svg className="header__top__left__logo" alt="Web Logo" onClick={() => history.push("/")} xmlns="http://www.w3.org/2000/svg" width="282.734" height="121.223" viewBox="0 0 282.734 121.223">
                            <g id="Logo" transform="translate(4.725 3.5)">
                                <g id="Group_2" data-name="Group 2" transform="translate(0 13.723)">
                                <text id="Youth_Deal" data-name="Youth Deal" transform="translate(0 67)" fill="#3e66ff" fontSize="41" fontFamily="Bungee-Regular, Bungee"><tspan x="0" y="0" fill="#000">Youth </tspan><tspan y="0" fill="#3e66ff">Deal</tspan></text>
                                </g>
                                <path id="Path_4" data-name="Path 4" d="M0,4.593S52.391-22.854,120.791-22.854,273.6,4.593,273.6,4.593" transform="translate(0 22.854)" fill="none" stroke="#01f" strokeLinecap="round" strokeWidth="7" strokeDasharray="25"/>
                            </g>
                        </svg>
                        <input 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Cilvēki, nosaukumi,kompānijas..."
                        />
                        <button type="submit">Meklēt</button>
                    </div>
                    <ul className="header__top__links">
                        <li>Galvenā</li>
                        <li>Čats</li>
                        <li>Kontakti</li>
                        <li>Paziņojumi</li>
                    </ul>
                    <div className="header__top__right">
                        <img 
                            className="header__top__right__profile__image" 
                            src={userInfo.info.profile.photo ? userInfo.info.profile.photo : Avatar} 
                            alt="profile" 
                            onClick={() => {history.push(`/profile/${userInfo.info.id}`);setOpen(false)}}
                        />
                        <p>{userInfo.info.name}</p>
                        <img src={dropdown} alt="dropdown" id="dropdown" onClick={() => setOpen(!open)}/>
                        {open && (
                        <div className="dropdown">
                            <ul>
                                <div className="dropdown__with__icon" onClick={() => {history.push(`/profile/${userInfo.info.id}`);setOpen(false)}}><img src={userInfo.info.profile.photo ? userInfo.info.profile.photo : Avatar} alt="profile" id="profile"/><li>Mans Konts</li></div>
                                <li>Jauna darba vakance</li>
                                <div className="dropdown__with__icon"><img src={Crown} alt="premium" id="profile_icon"/><li>Premium</li></div>
                                <li>Darbības</li>
                                <li>Saglābātie</li>
                                <div className="dropdown__with__icon"><img src={Language} alt="language" id="profile_icon"/><li>Latviešu</li></div>
                                <li>€ EUR</li>
                                <li>Iestatījumi</li>
                                {userInfo.info.isAdmin && (
                                    <li onClick={() => {history.push("/admin");setOpen(false)}}>Admin</li>
                                )}
                                <li className="dropdown__last" onClick={logout}>Iziet</li>
                            </ul>
                        </div>
                        )}
                    </div>
                </div>
                
                <div className="header__bottom">
                    <li className="header__bottom__link">#ADM</li>
                    <li className="header__bottom__link">Darba vakances</li>
                    <li className="header__bottom__link">Darba piedāvājumi</li>
                    <li className="header__bottom__link header__bottom__category__link">Kategorijas
                        <div className="header__bottom__category__link__categories">
                            {proffessionInfo.categories.map((category, i) => (
                                <p key={i}>{category.title}</p>
                            ))}
                        </div>    
                    </li>
                </div>
            </nav>
        )
    }else{
        return <LoadingPopup />
    }
}

export default AuthorizedHeader;