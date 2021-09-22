import React, { useState, useEffect } from 'react'
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
import SearchBar from './searchBar/SearchBar';

function AuthorizedHeader() {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [isHamburgerActive, setIsHamburgerActive] = useState(false)
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const proffessionInfo = useSelector(proffessionData);
    const userInfo = useSelector(userData);
    const history = useHistory();
    const dispatch = useDispatch();

    const [isCompany, setIsCompany] = useState(false);

    useEffect(() => {
        if (userInfo.info.is_employer) {
            setIsCompany(true);
        }
    }, [userInfo.info.is_employer]);

    useEffect(() => {
        window.addEventListener('resize', function (e) {
            setInnerWidth(e.target.innerWidth);
        });
    }, []);

    function handleHamburger() {
        setIsHamburgerActive(!isHamburgerActive);
    }

    const logout = () => {
        window.localStorage.removeItem("accessToken");
        dispatch(logoutUser());
        history.push("/");
    };

    const TopLinks = () => {
        return <ul className="header__top__links">
            <li onClick={() => history.push("/")}>Sākums</li>
            <li onClick={() => history.push("/chat")}>Čats</li>
            <li onClick={() => setCategoriesOpen(!categoriesOpen)}>Kategorijas</li>
            <div className={`header__top__links__categories ${categoriesOpen ? 'active' : ''}`}>
                {proffessionInfo.categories.map((category, i) => (
                    <p key={i}>{category.title}</p>
                ))}
            </div>
        </ul>
    };

    const TopRight = () => {
        return <div className="header__top__right">
            <div className="header__top__right__user-wrapper" onClick={() => { history.push(`/profile/${userInfo.info.id}`); setOpen(false); }}>
                <img
                    className="header__top__right__user-wrapper__profile__image"
                    src={userInfo.info.profile.photo ? userInfo.info.profile.photo : Avatar}
                    alt="profile"
                />
                <p>{isCompany ? `${userInfo.info.profile.company_name}` : `${userInfo.info.first_name} ${userInfo.info.last_name}`}</p>
            </div>
            <div onClick={() => setOpen(!open)} id="dropdown">
                <span>
                    {innerWidth < 1024 && <p>Extra Options</p>}
                    <img src={dropdown} alt="dropdown" />
                </span>
                    {open && (
                        <div className="dropdown">
                            <ul>
                                <div className="dropdown__with__icon" onClick={() => { history.push(`/profile/${userInfo.info.id}`); setOpen(false); }}><img src={userInfo.info.profile.photo ? userInfo.info.profile.photo : Avatar} alt="profile" id="profile" /><li>Mans Konts</li></div>
                                <li onClick={() => history.push(`/${isCompany ? "new/jobOffer" : ""}`)}>{isCompany ? "Jauna darba vakance" : "Profila reklāma"}</li>
                                <div className="dropdown__with__icon" onClick={() => history.push("/premium")}><img src={Crown} alt="premium" id="profile_icon" /><li>Premium</li></div>
                                <li onClick={() => history.push('/saved')}>Saglābātie</li>
                                <div className="dropdown__with__icon"><img src={Language} alt="language" id="profile_icon" /><li>Latviešu</li></div>
                                <li>€ EUR</li>
                                <li onClick={() => history.push(`/settings`)}>Iestatījumi</li>
                                {userInfo.info.isAdmin && (
                                    <li onClick={() => { history.push("/admin"); setOpen(false); }}>Admin</li>
                                )}
                                <li className="dropdown__last" onClick={logout}>Iziet</li>
                            </ul>
                        </div>
                    )}
            </div>
        </div>;
    };

    const Hamburger = () => {
        return <div onClick={handleHamburger} className={`header__top__hamburger ${isHamburgerActive ? 'active' : ''}`}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>;
    };

    const Dropdown = () => {
        return <div className={`header__dropdown ${isHamburgerActive ? 'active' : ''}`}>
            <SearchBar />
            <TopLinks />
            <TopRight mobile={true} />
        </div>;
    };

    if (userInfo.info) {
        return (
            <nav>
                <div className="header__top">
                    <div className="header__top__left">
                        <svg className="header__top__left__logo" alt="Web Logo" onClick={() => history.push("/")} xmlns="http://www.w3.org/2000/svg" width="282.734" height="121.223" viewBox="0 0 282.734 121.223">
                            <g id="Logo" transform="translate(4.725 3.5)">
                                <g id="Group_2" data-name="Group 2" transform="translate(0 13.723)">
                                    <text id="Youth_Deal" data-name="Youth Deal" transform="translate(0 67)" fill="#3e66ff" fontSize="41" fontFamily="Bungee-Regular, Bungee"><tspan x="0" y="0" fill="#000">Youth </tspan><tspan y="0" fill="#3e66ff">Deal</tspan></text>
                                </g>
                                <path id="Path_4" data-name="Path 4" d="M0,4.593S52.391-22.854,120.791-22.854,273.6,4.593,273.6,4.593" transform="translate(0 22.854)" fill="none" stroke="#01f" strokeLinecap="round" strokeWidth="7" strokeDasharray="25" />
                            </g>
                        </svg>
                    </div>
                    {innerWidth > 1024 && <SearchBar />}
                    {innerWidth > 1024 && <TopLinks />}
                    {innerWidth > 1024 && <TopRight mobile={false} />}
                    {innerWidth <= 1024 && <Hamburger />}
                </div>
                {innerWidth <= 1024 && <Dropdown />}
            </nav>
        )
    }else{
        return <LoadingPopup />
    }
}

export default AuthorizedHeader;