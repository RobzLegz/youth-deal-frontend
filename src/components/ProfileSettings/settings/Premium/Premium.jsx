import React from 'react';

import { DropdownInput } from '../Inputs';

import crown from '../../../../assets/svg/crown.svg';

import '../Settings.scss';
import './Premium.scss';

function Premium(){
    return (
        <div className='settings-wrapper'>
            <div className="settings">
                <div className="premium__header">
                    <h2 className="settings__title"> <img src={crown} alt="crown" /> Premium </h2>
                    <span>
                        Gribi paskatīties visus plānus?
                        <a href="/premium">Iet uz "Premium lapu"</a>
                    </span>
                </div>

                <div className="premium__status">
                    <h4>Premium Statuss</h4>
                    <div className="premium__status__wrapper">
                        <img src={crown} alt="crown" />
                        Iegādāts
                    </div>
                </div>
            </div>

            <div className="settings">
                <h2 className="settings__title red">Premium Statusa Deaktivizācija</h2>

                <section className="settings__section">
                    <h3 className="settings__section__title">Kas notiks ja deaktivizēšu savu premium statusu?</h3>
                    <p className="settings__section__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis, numquam voluptatibus placeat, nisi nihil iste id esse necessitatibus explicabo est quas at qui? Ea repellat consequuntur consequatur voluptate autem!</p>
                    <p className="settings__section__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe ipsa quaerat. Unde, laboriosam rem? Delectus ut corrupti quidem corporis vero, mollitia, tempora beatae est totam quia, assumenda ullam quibusdam!</p>
                    <p className="settings__section__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque saepe ipsa quaerat. Unde, laboriosam rem? Delectus ut corrupti quidem corporis vero, mollitia, tempora beatae est totam quia, assumenda ullam quibusdam!</p>
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