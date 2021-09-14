import React from 'react';
import './Security.scss';
function Security(){
    return (
        <div className='security'>
            <p className="security__title">Parole</p>

            <div className="security__password">

                <div className="security__password__input-group">
                    <label htmlFor="password">Jauna parole</label>
                    <input type="password" name='password' placeholder='Ievadi jauno paroli' />
                </div>

                <div className="security__password__input-group">
                    <label htmlFor="repeat-password">Apstiprināt jauno paroli</label>
                    <input type="password" name='repeat-password' placeholder='Ievadi paroli atkārtoti' />
                </div>

                <div className="security__password__notify">
                    <p>8 vai vairāk simbolus. Apvienojiet lielos un mazos burtus un ciparus.</p>
                </div>

                <div className="security__password__btn-wrapper">
                    <button className='security__password__btn-wrapper__save'>Saglabāt</button>
                </div>

            </div>

            <div className="security__phone-verification">
                <div>
                    <p id='title' className="security__phone-verification__title">Tālruņa Verifikācija <span>Ieteicams</span></p>
                    <p id='status' className="security__phone-verification__status">
                        Jūsu tālrunis nav verificēts Youth Deal. Noklikšķiniet uz "Verificēt tagad", 
                        lai pabeigtu tālruņa verifikāciju
                    </p>
                </div>
                <div className="security__phone-verification__btn-wrapper">
                    <button className='security__phone-verification__btn-wrapper__verificate'>Verificēt tagad</button>
                </div>
            </div>
        </div>
    )
}

export default Security;