import React, { useState } from 'react';

import jobOne from '../../../../assets/svg/jobGiver/jobGiver-1.svg';
import './JobGiver.scss';
import { registerCompany } from '../../../../logic/company/auth/auth';
import { useDispatch } from 'react-redux';


function JobGiver(){
    const [companyName, setCompanyName] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const dispatch = useDispatch();

    return (
        <div id='jobGiver' className='job'>
            <main className='job__main'>
                <div data-aos='fade-right' className="job__main__left">
                    <h1 className="job__main__left__title">
                        Uzņēmuma Reģistrācija
                    </h1>

                    <p className="job__main__left__desc">
                        Ievadi datus:
                    </p>

                    <form className='job__main__left__form'>
                        <div className="job__main__left__form__input-group">
                            <label htmlFor="company-name">Uzņēmuma nosaukums</label>
                            <input onChange={(e) => setCompanyName(e.target.value)} type="text" id='company-name' className="job__main__left__form__input-group__input" placeholder='Nosaukums' />
                        </div>     

                        <div className="job__main__left__form__input-group">
                            <label htmlFor="company-email">Uzņēmuma e-pasts:</label>
                            <input onChange={(e) => setCompanyEmail(e.target.value)} type="text" id='company-email' className="job__main__left__form__input-group__input" placeholder='Ievadiet uzņēmuma e-pastu' />
                        </div>

                        <div className="job__main__left__form__input-group">
                            <label htmlFor="company-password">Uzņēmuma profila parole:</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" id='company-password' className="job__main__left__form__input-group__input" placeholder='Ievadiet paroli' />
                        </div>

                        <button type='submit' className='job__main__left__form__submit' onClick={(e) => {e.preventDefault();registerCompany(
                            companyEmail,
                            password,
                            companyName,
                            dispatch
                        )}}>Pabeigt</button>

                    </form>

                </div>

                <div data-aos='fade-left' className="job__main__right">
                    <img src={jobOne} alt='' />
                </div>

            </main>
                <p className="job__information-text">(Visus datus tu varēsi nomainīt pēc tam iestatījumos)</p>
        </div>
    )
}

export default JobGiver;