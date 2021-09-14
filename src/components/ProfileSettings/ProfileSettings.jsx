import React from 'react';
import './ProfileSettings.scss';
import notifications from '../../assets/svg/profileSettings/notifications.svg'
import payment from '../../assets/svg/profileSettings/payment.svg'
import premium from '../../assets/svg/profileSettings/premium.svg'
import profile from '../../assets/svg/profileSettings/profile.svg'
import security from '../../assets/svg/profileSettings/security.svg'

// import Profile from './settings/Profile/Profile'
// import Security from './settings/Security/Security'
// import Premium from './settings/Premium/Premium'
// import Payment from './settings/Payment/Payment'
import Notifications from './settings/Notifications/Notifications'

function ProfileSettings(){
    return (
        <div className='profileSettings'>
            <aside className='profileSettings__aside'>
                <nav className='profileSettings__aside__nav'>
                    <a className='profileSettings__aside__nav__link' href="#konts"> <img src={profile} alt="profile" /> Konts</a>
                    <a className='profileSettings__aside__nav__link active' href="#drosiba"> <img src={security} alt="security" /> Drošība</a>
                    <a className='profileSettings__aside__nav__link' href="#Premiums-un-maksajumi"> <img src={premium} alt="premium" /> Premiums un maksājumi</a>
                    <a className='profileSettings__aside__nav__link' href="#maksajumi-un-informacija"> <img src={payment} alt="payment" /> Maksājumi un informācija</a>
                    <a className='profileSettings__aside__nav__link' href="#Pazinojumi"> <img src={notifications} alt="notifications" /> Paziņojumi</a>
                </nav>
            </aside>
            <main>
                <Notifications />
            </main>
        </div>
    )
}

export default ProfileSettings;