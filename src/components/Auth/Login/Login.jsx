import React, {useEffect, useState} from 'react';
import '../Auth.scss'
import facebook from '../../../assets/svg/socials/facebook.svg';
import google from '../../../assets/svg/socials/google.svg';
import showPwdImg from '../../../assets/svg/eye.svg';
import hidePwdImg from '../../../assets/svg/eye_hide.svg';
import { login } from '../../../logic/auth/login';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../../slices/user/userSlice';
import {useHistory} from "react-router-dom";

function Login() {
    
    //Paroles redzamības triggeris
    //const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
   

    //Form validation  
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState('');
    const [passwordDirty, setPasswordDirty] = useState('');
    const [emailError, setEmailError] = useState('E-pasts nevar būt tukšs!');
    const [passwordError,setPasswordError] = useState('Parole nevar būt tukša!')

    const dispatch = useDispatch();
    const userInfo = useSelector(userData);
    const history = useHistory();

    useEffect(() => {
        if(userInfo.loggedIn){
            history.push("/");
        }
    }, [history, userInfo.loggedIn]);

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Nav pareizs E-pasts!')
        }
        else{
            setEmailError('')
        }
        
    }
    const passwordHandler = (e) =>{
        setPassword(e.target.value)
        
        if(e.target.value.length < 5 ) {
            setPasswordError('Parolei ir jābūt ne mazāk nekā 5 simboli!')
            if(!e.target.value){
                setPasswordError('Parole nevar būt tukša!')
            }
        }
        else{
            setPasswordError('')
        }
    }
    const blurHandler = (e) => {
        switch (e.target.name) {
            default:
                setEmailDirty(false);
                setPasswordDirty(false);
            break

            case 'email':
                setEmailDirty(true)
            break

            case 'password':
                setPasswordDirty(true)
            break
        }
    }

    return (
        <div className='auth' id='login'>

            <form onSubmit={(e) => login(e, email, password, dispatch)} className="auth__form-wrapper">
                <p className="auth__form-wrapper__title">Pieslēgties</p>

                <div className="form" action="POST">
                    <input onChange= {e => emailHandler(e)} onBlur={(e) => blurHandler(e)} value={email} name="email" type="text" id="email" className="form__input" placeholder=" " required/>
                    <label htmlFor="email" className="form__label">E-pasts</label>
                </div>
                {(emailDirty && emailError) && <div className="auth__form-wrapper__error"style={{color:"#FA4251"}}>{emailError}</div>}

                <div className="form" action="POST">
                    <input onChange={e => passwordHandler(e)} onBlur={(e) => blurHandler(e)} value={password} name="password" type={isRevealPwd ? "text" : "password"} id="password" className="form__input" autoComplete="off" placeholder=" " required />
                    <label htmlFor="password" className="form__label"> Parole </label>
                    <img title={isRevealPwd ? "Slēpt paroli" : "Parādīt paroli"} alt="eye" src={isRevealPwd ? hidePwdImg : showPwdImg} onClick={() => setIsRevealPwd(prevState => !prevState)} className="form__eye"></img>
                </div>
                {(passwordDirty && passwordError) && <div className="auth__form-wrapper__error"style={{color:"#FA4251"}}>{passwordError}</div>}

                <label className="auth__form-wrapper__forgot-password">
                    <a href="#aizmirsi-paroli">Aizmirsi paroli?</a>
                </label>
                <button className="auth__form-wrapper__button-login" type="submit">Ieiet</button>

                <div className="auth__form-wrapper__divider">
                    <span className="auth__form-wrapper__divider__line"></span>
                </div>
                
                <div className="auth__form-wrapper__socials">
                    <div className="auth__form-wrapper__socials__social">
                        <img src={facebook} href="https://www.facebook.com" alt="facebook" ></img>
                    </div>

                    <div className="auth__form-wrapper__socials__social">
                        <img src={google} href="https://www.google.com" alt="google" ></img>
                    </div>
                </div>

                <div className="auth__form-wrapper__not-registered">
                    <p>Nav konta?</p> <Link to="/register">Reģistrēties</Link>
                </div>

            </form>

        </div>
    )
}

export default Login;