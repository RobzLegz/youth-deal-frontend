import React from 'react';

import { CheckboxInput } from '../Inputs';

import '../Settings.scss';

function Notifications() {
    return (
        <div className="settings">
            <h2 className="settings__title">Paziņojumi</h2>

            <section className="settings__section">
                <h3 className="settings__section__title">Rādīt paziņojumus par:</h3>
                <div className="settings__section__grayed">
                    <CheckboxInput title="E-pasta paziņojumi" />
                    <CheckboxInput title="Web paziņojumi" />
                    <CheckboxInput title="Paziņojumi reālajā laikā" />
                </div>
            </section>

            <section className="settings__section">
                <h3 className="settings__section__title">Paziņojumi reālajā laikā skaņa</h3>
                <div className="settings__section__grayed">
                    <CheckboxInput title="Ar skaņu" />
                    <div className="settings__section__test-sound">
                        <span>Notestēt skaņu</span>
                        <span>
                            <i className="fa-volume-up"></i>
                            <a>Atskaņot</a>
                        </span>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Notifications;