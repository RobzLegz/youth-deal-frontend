import React, { useState } from 'react';
import './Profile.scss'
import dropdown from '../../../../assets/svg/dropdown.svg'
import crown from '../../../../assets/svg/crown.svg'
function Profile(){

    // status codes:

        // 0 - Online
        // 1 - Idling

    // job status codes:

        // 0 - Es neesmu aktīva darba meklēšanā
        // 1 - Es esmu aktīva darba meklēšanā


    // premium status stages:

        // true = has premium status ( Zelta Plāns )
        // false = does not have premium status ( Standarta plāns)


    

    // profila datu imitācija.
    const [user] = useState({
        name: 'Real',
        surname: 'Man',
        email: 'realman@gmail.com',
        location: 'Riga,Latvia',
        onlineStatus: 'online',
        jobStatus: 'Es esmu aktīvā darba meklēšanā',
        premiumStatus: true,
    })

    function changeSwitchState(e) {
        const parent = e.target.parentNode;
        const className = parent.className;
        if (className.includes('active')) {
            parent.classList.remove('active')
        } else {
            parent.classList.add('active')
        }
    }

    return (
        <div className='profile'>
            <div id='profile-row1'>
                <h1 className="profile__title">PROFILS</h1>
                <div className="profile__options">

                    <div className="profile__options__option">
                        <label htmlFor='name' className="profile__options__option__name">Vārds</label>
                        <div className="profile__options__option__input-group">
                            <input type="text" name='name' value={user.name}  />
                        </div>
                    </div>

                    <div className="profile__options__option">
                        <label htmlFor='surname' className="profile__options__option__name">Uzvārds</label>
                        <div className="profile__options__option__input-group">
                            <input type="text" name='surname' value={user.surname} />
                        </div>

                    </div>

                    <div className="profile__options__option">
                        <label htmlFor='email' className="profile__options__option__name">E-Pasts</label>
                        <div className="profile__options__option__input-group">
                            <input type="text" name='email' value={user.email} />
                        </div>

                    </div>

                    <div className="profile__options__option">
                        <label htmlFor='city' className="profile__options__option__name">Pilsēta</label>
                        <div className="profile__options__option__input-group">
                            <input type="text" name='city' value={user.location} />
                        </div>
                    </div>

                    <div className="profile__options__option">
                        <label htmlFor='onlineStatus' className="profile__options__option__name">Online Statuss</label>
                        <div className="profile__options__option__input-group">
                            <p style={user.onlineStatus === 'online' ? {color: '#1DBF73'} : {color: 'rgb(216, 57, 17)'}}>{user.onlineStatus}</p>
                            <img src={dropdown} alt="dropdown" />
                        </div>
                    </div>

                    <div className="profile__options__option">
                        <p className="profile__options__option__name">Darba Statuss</p>
                        <div className="profile__options__option__input-group">
                            <p>{user.jobStatus}</p>
                            <img src={dropdown} alt="dropdown" />
                        </div>
                    </div>

                    <div className="profile__options__option">
                        <label htmlFor='premiumStatus' className="profile__options__option__name">Premium Statuss</label>
                        <div className="profile__options__option__input-group">
                            <p style={
                                user.premiumStatus ? {color: '#FFD700'} : {color: 'gray'}} 
                            >
                                {user.premiumStatus && <img src={crown} alt='crown' />}{user.premiumStatus ? "Zelta Plāns" : "Standarta Plāns" }
                            </p>
                        </div>

                    </div>
                    
                    <div className="profile__options__save-button">
                        <button>Saglabāt</button>
                    </div>

                </div>
                <p className="extra-options__title">Ko Tu gribi, lai citi lietotāji redzētu tavā profilā?</p>
                <div className="profile__extra-options">
                            
                <div className="profile__extra-options__option">
                    <p className="profile__extra-options__option__name">Dzimšanas datums</p>
                    <span className='profile__extra-options__option__switch'>
                        <div onClick={changeSwitchState} className="profile__extra-options__option__switch__circle"></div>
                    </span>
                </div>
                
                <div className="profile__extra-options__option">
                    <p className="profile__extra-options__option__name">E-Pasts</p>
                    <span onClick={changeSwitchState} className='profile__extra-options__option__switch'>
                        <div className="profile__extra-options__option__switch__circle"></div>
                    </span>
                </div>
                
                <div className="profile__extra-options__option">
                    <p className="profile__extra-options__option__name">Izglītība</p>
                    <span onClick={changeSwitchState} className='profile__extra-options__option__switch'>
                        <div className="profile__extra-options__option__switch__circle"></div>
                    </span>
                </div>

            </div>
            </div>
            <div id="profile-row1">
                <div className="profile__deactivization">
                    <h1 className="profile__deactivization__title">Konta deaktivizācija</h1>
                    <div className="profile__deactivization__answers">
                        <div id='answer-col1' className="profile__deactivization__answers__answer">
                            <h4>Kas notiks kad tu deaktivizēsi savu kontu ?</h4>
                            <p>Visa konta informācija tiks dzēsta</p>
                            <p>Tu vairs nevarēsi autorizeties ar to</p>
                            <p>Visi Premium plāni tiks dzēsti, ja tādi bija.</p>
                        </div>
                        <div className="profile__deactivization__answers__answer">
                            <h4>Kā deaktivizēt savu kontu ?</h4>
                            <div>
                                <span>1.</span>
                                <p>Izvēlaties cēloni</p>
                            </div>
                            <div>
                                <span>2.</span>
                                <p>Uzspiest uz pogu "Deaktivizēt kontu"</p>
                            </div>
                            <div>
                                <span>3.</span>
                                 <p>Gaidīt apstiprinājumu uz jūsu e-pastu.</p>
                            </div>
                            <div>
                                <span>4.</span>
                                <p>Gatavs!</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile__deactivization__reason">
                        <p>Es gribu nodzēst manu kontu, tāpēc, ka ...</p>
                        <div className="profile__deactivization__reason__input">
                            <p>Izvēlies cēloni</p>
                            <img src={dropdown} alt="dropdown" />
                        </div>
                    </div>
                    <div className="profile__deactivization__submit">
                        <button>Deaktivizēt kontu</button>
                    </div>
                </div>
            </div>
                            
        </div>
    )
}
export default Profile