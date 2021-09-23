import React from 'react';

import { DropdownInput } from '../Inputs';

import crown from '../../../../assets/svg/crown.svg';

import '../Settings.scss';
import './Premium.scss';

function Premium(){
    return (
        <div className='settings-wrapper'>
            <div className="settings">
                <div className="settings__premium__header">
                    <h2 className="settings__title"> <img src={crown} alt="crown" /> Premium </h2>
                    <span>
                        Gribi paskatīties visus plānus?
                        <a href="/premium">Iet uz "Premium lapu"</a>
                    </span>
                </div>

                <div className="settings__premium__status">
                    <h4>Premium Statuss</h4>
                    <div className="settings__premium__status__wrapper">
                        <img src={crown} alt="crown" />
                        Iegādāts
                    </div>
                </div>
            </div>

            <div className="settings">
                <h2 className="settings__title red">Premium Statusa Deaktivizācija</h2>

                <section className="settings__section">
                    <h3 className="settings__section__title">Kas notiks ja deaktivizēšu savu premium statusu?</h3>
                    <p className="settings__section__desc">Ja neesat izmantojis Premium līdz mēneša beigām, par kuru samaksājāt, tas tiks deaktivizēts no nākamā mēneša sākuma</p>
                    <p className="settings__section__desc">Vissas Premium funkcijas nebūs Tev pieejamas, un Tu nevarēsi pilnībā izbaudīt mūsu Web-aplikāciju</p>
                    <p className="settings__section__desc">Mums būs ļoti skumji. Tu taču nevēlējies, lai mums būtu skumji?</p>
                </section>

                <section className="settings__section">
                    <div className="settings__section__grayed">
                        <DropdownInput
                            title="Es gribu deaktivizēt manu premium statusu tāpēc ka..."
                            currentOption="Izvēlies Cēloni"
                            options={['a', 'b']} />
                    </div>
                    <div className="align-right">
                        <button className="button-red">Deaktivizēt Premium</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Premium;