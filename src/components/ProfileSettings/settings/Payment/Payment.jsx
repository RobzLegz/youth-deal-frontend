import React, { useState } from 'react';
import assign from '../../../../assets/svg/assign.svg';
import './Payment.scss';
function Payment(){

    const [balance] = useState('10,000.00')

    return (
        <div className='payment'>

            <p className="payment__title">Atlikums</p>

            <p className="payment__balance">Jūsu atlikums ir €{balance}</p>

            <div className="payment__supplement">
                <button className="payment__supplement__btn">Papildināt</button>
            </div>

            <div className="payment__methods">

                <div className="payment__methods__row1">
                    <p>Norēķinu metodes</p>
                    <div className="payment__methods__row1__add">
                        <img src={assign} alt="assign" />
                        <p>Pievienot metodi</p>
                    </div>
                </div>

                <div className="payment__methods__row2">
                    <p>Jūs vēl neesat iestatījis nevienu norēķinu metodi.</p>
                    <p>Iestatiet norēķinu metodes, lai jūs uzreiz varētu pieņemt darbā, kad būsiet gatavs.</p>
                </div>

            </div>


        </div>
    )
}

export default Payment;