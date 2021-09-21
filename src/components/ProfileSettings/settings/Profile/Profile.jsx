import React, { useState } from 'react';
import '../Settings.scss'

import { useSelector } from 'react-redux';
import { userData } from '../../../../slices/user/userSlice';

import { TextInput, DropdownInput, CheckboxInput } from '../../../Inputs/Inputs';

import crown from '../../../../assets/svg/crown.svg'

function Profile() {
    const userInfo = useSelector(userData);

    const [name, setName] = useState(userInfo.info.first_name);
    const [surname, setSurName] = useState(userInfo.info.last_name);
    const [email, setEmail] = useState(userInfo.info.email);
    const [city, setCity] = useState(userInfo.info.profile.city);
    const [isActiveJobSeeker, setIsActiveJobSeeker] = useState(userInfo.info.profile.is_active_jobseeker);
    const [closeReason, setCloseReason] = useState('Izvēlies Cēloni');

    return (
        <div className='settings-wrapper'>
            <div className='settings'>
                <h2 className="settings__title">PROFILS</h2>

                <section className="settings__section">
                    <TextInput title="Vārds" inputName="first_name" value={name} setValue={setName} required={false} />
                    <TextInput title="Uzvārds" inputName="last_name" value={surname} setValue={setSurName} required={false} />
                    <TextInput title="E-pasts" inputName="email" value={email} setValue={setEmail} required={false} />
                    <TextInput title="Pilsēta" inputName="city" value={city} setValue={setCity} required={false} />
                    <DropdownInput
                        title="Online Statuss"
                        inputStyle={userInfo.loggedIn ? { color: '#1DBF73' } : { color: 'rgb(216, 57, 17)' }}
                        value={userInfo.loggedIn ? 'online' : 'offline'}
                        options={['online', 'offline', 'do not bother', 'invisible']} />
                    <DropdownInput
                        title="Darba Statuss"
                        value={isActiveJobSeeker ? '#ADM' : 'Nodarbināts'}
                        setValue={setIsActiveJobSeeker}
                        options={['Aktīvs Darba meklētāys', 'Nodarbināts']} />
                    <DropdownInput
                        title="Premium Statuss"
                        inputStyle={userInfo.info.has_premium ? { color: '#FFD700' } : { color: 'gray' }}
                        value={userInfo.has_premium ? <><img src={crown} alt='crown' /> Zelta Plāns</> : 'Standarta Plāns'}
                        options={[<><img src={crown} alt='crown' /> Zelta Plāns</>, 'Standarta Plāns']} />
                </section>

                <section className="settings__section">
                    <h3 className="settings__section__title">Ko Tu gribi, lai citi lietotāji redzētu tavā profilā?</h3>
                    <div className="settings__section__grayed">
                        <CheckboxInput title="Dzimšanas datums" inputName="isBirthDateVisible" value={true} />
                        <CheckboxInput title="E-pasts" inputName="isEmailVisible" value={true} />
                        <CheckboxInput title="Izglītība" inputName="isKnowlageVisible" value={true} />
                    </div>
                </section>

                <div className="align-right">
                    <button className="button-blue">Saglabāt</button>
                </div>
            </div>

            <div className="settings">
                <h2 className="settings__title red">Konta deaktivizācija</h2>

                <section className="settings__section">
                    <h3 className="settings__section__title">Kas notiks kad tu deaktivizēsi savu kontu ?</h3>
                    <p className="settings__section__desc">Visa konta informācija tiks dzēsta</p>
                    <p className="settings__section__desc">Tu vairs nevarēsi autorizeties ar to</p>
                    <p className="settings__section__desc">Visi Premium plāni tiks dzēsti, ja tādi bija.</p>
                </section>

                <section className="settings__section">
                    <div className="settings__section__grayed">
                        <DropdownInput
                            title="Izvēlies cēloni"
                            value={closeReason}
                            setValue={setCloseReason}
                            options={['a', 'b']} />
                    </div>
                    <div className="align-right">
                        <button className="button-red">Deaktivizēt kontu</button>
                    </div>
                </section>
            </div>

        </div>
    )
}
export default Profile