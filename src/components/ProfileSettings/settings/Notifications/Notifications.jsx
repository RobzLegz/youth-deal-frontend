import React from 'react';

import dropdown from '../../../../assets/svg/dropdown.svg';

import './Notifications.scss';

function Notifications() {
    return (
        <div className="notifications">
            <p className="notifications__title">Ziņas</p>

            <section className="notifications__web">
                <div className="notifications__web__title">Web</div>
                <div className="notifications__web__input-group">
                    <label htmlFor="notifications">Rādīt paziņojumus par:</label>
                    <div className="notifications__web__input-group__custom-input">
                        <p></p>
                        <img src={dropdown} alt="dropdown" />
                    </div>
                </div>
            </section>

            <section className="notifications__email">
                <div className="notifications__email__title">Email <span>(tiks sūtīts uz emails@gmail.com</span> </div>
                <div className="notifications__email__input-group">
                    <label htmlFor="emailnotify">Nosūtiet e-pasta ziņojumu ar nelasītām darbībām par:</label>
                    <div className="notifications__email__input-group__custom-input">
                        <p></p>
                        <img src={dropdown} alt="dropdown" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Notifications;