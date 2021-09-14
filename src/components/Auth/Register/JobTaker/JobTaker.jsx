import React, { useEffect, useState } from 'react';
import './JobTaker.scss'

import dropdown from '../../../../assets/svg/dropdown.svg';
import jobOne from '../../../../assets/svg/jobGiver/jobGiver-1.svg';
import { registerUser } from '../../../../logic/user/auth';
import {useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { proffessionData } from '../../../../slices/proffessions/proffessionSlice';
import { userData } from '../../../../slices/user/userSlice';

function JobTaker(){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    const dispatch = useDispatch();
    const userInfo = useSelector(userData);

    useEffect(() => {
        if(userInfo.loggedIn){
            history.push("/");
        }
    }, []);


    return (
        <div id='jobTaker' className='job'>
            <main className='job__main'>
                <div data-aos='fade-right' className="job__main__left">
                    <h1 className="job__main__left__title">
                        Reģistrācija
                    </h1>

                    <form className='job__main__left__form'>
                        <div className="job__main__left__form__input-group">
                            <label htmlFor="name">Vārds</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='name' className="job__main__left__form__input-group__input" placeholder='Norādiet vārdu' />
                        </div>        

                        <div className="job__main__left__form__input-group">
                            <label htmlFor="surname">Uzvārds</label>
                            <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" id='surname' className="job__main__left__form__input-group__input" placeholder='Norādiet uzvārdu' />
                        </div>        

                        <div className="job__main__left__form__input-group">
                            <label htmlFor="email">E-pasts</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' className="job__main__left__form__input-group__input" placeholder='Norādiet e-pastu' />
                        </div>        

                        <div className="job__main__left__form__input-group">
                            <label htmlFor="password">Parole</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id='password' className="job__main__left__form__input-group__input" placeholder='Norādiet paroli' />
                        </div>        
                        
                        
                        <button type='submit' onClick={(e) => {
                            e.preventDefault();
                            if (name !== "" && surname !== "" && email !== "" && password !== ""){
                                registerUser(
                                    email,
                                    password,
                                    name,
                                    surname,
                                    dispatch
                                );
                            }
                        }} className='job__main__left__form__submit'>Reģistrēties</button>
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

export default JobTaker;