import React from 'react';

import crown from  '../../../../assets/svg/crown.svg'
import dropdown from  '../../../../assets/svg/dropdown.svg'

import './Premium.scss'

function Premium(){
    return (
        <div className='premium'>
            <header className="premium__header">
                <p className="premium__header__title"> <img src={crown} alt="crown" /> Premium </p>
                <div>
                    <p>Gribi paskatīties visus plānus?</p>
                    <a href="#premium">Iet uz "Premium lapu"</a>
                </div>
            </header>

            <div className="premium__plan-status">

                <div className="premium__plan-status__input-group">
                    <p>Premium Statuss</p>
                    <p className='premium__plan-status__input-group__custom-input'> <img src={crown} alt="crown" /> Zelta Plāns</p>
                    <p>Nomainīt</p>
                </div>

            </div>

            <div className="premium__plans-change">

                <p className="premium__plans-change__title">Nomainīšana</p>

                <div className="premium__plans-change__input-group">
                    <label htmlFor="password">Nomainīt Plānu uz:</label>
                    <p>Standarta Plānu <img src={dropdown} alt="dropdown" /> </p>
                </div>

            </div>

            <div className="premium__btn-wrapper">
                <button className='premium__btn-wrapper__change'>Nomainīt</button>
            </div>
        </div>
    )
}

export default Premium;