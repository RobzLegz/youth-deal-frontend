import React, { useState } from 'react';
import '../Settings.scss';
import { TextInput } from '../../../Inputs/Inputs';

function Security(){
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    return (
        <div className='settings'>
            <h2 className="settings__title">Drošība</h2>

            <section className="settings__section">
                <h3 className="settings__section__title">Parole</h3>
                <TextInput
                    title="Jauna Parole"
                    inputName="password"
                    inputType="password"
                    value={password}
                    setValue={setPassword}
                    placeholder="Ievadi jauno paroli"
                />
                <TextInput
                    title="Apstiprināt jauno paroli"
                    inputName="repeat-password"
                    inputType="password"
                    value={repeatPassword}
                    setValue={setRepeatPassword}
                    placeholder="Ievadi paroli atkārtoti"
                />
                <p className="settings__section__desc align-left">
                    8 vai vairāk simbolus. Apvienojiet lielos un mazos burtus un ciparus.
                </p>
                <div className="align-right">
                    <button className='button-blue'>Saglabāt</button>
                </div>
            </section>

            <section className="settings__section">
                <h3 className="settings__section__title column">
                    Tālruņa Verifikācija
                    <span className="important">Ieteicams</span>
                </h3>
                <p className="settings__section__desc">
                    Jūsu tālrunis nav verificēts Youth Deal. Noklikšķiniet uz "Verificēt tagad",
                    lai pabeigtu tālruņa verifikāciju
                </p>
                <div className="align-right">
                    <button className='button-blue'>Verificēt tagad</button>
                </div>
            </section>
        </div>
    )
}

export default Security;