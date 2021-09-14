import React, { useEffect, useState } from 'react';

import dropdown from '../../../../assets/svg/dropdown.svg';
import edit from '../../../../assets/svg/edit.svg';
import avatar from '../../../../assets/svg/avatar.svg';
import jobOne from '../../../../assets/svg/jobGiver/jobGiver-1.svg';
import countries from 'countries-list'
import './JobGiver.scss';
import { registerCompany } from '../../../../logic/company/auth/auth';
import { useHistory } from 'react-router-dom';


function JobGiver(){
    const [companyName, setCompanyName] = useState('');
    const [companyLocation, setCompanyLocation] = useState('')
    const [companyCity, setCompanyCity] = useState('')
    const [companySpecialization, setCompanySpecialization] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companySize, setCompanySize] = useState('');
    const [companyPhone, setCompanyPhone] = useState('');
    const [companyPhoneCode, setCompanyPhoneCode] = useState('');
    const [companyLogo, setCompanyLogo] = useState('');
    const [countriesList, setCountriesList] = useState([]);
    
    const companySizes = ['1-20', '20-50', '50-100', '100-500', '500+'];

    const [showCountriesList, setShowCountriesList] = useState(false);
    const [showCompanySizes, setShowCompanySizes] = useState(false);
    const [success, setSuccess] = useState(false);

    const history = useHistory();


    useEffect(() => {
        setCountries();
    }, [])

    useEffect(() => {
        if(success){
            history.push("/login");
        }
    }, [success, history])

    function setCountries() {
        const listOfCountries = Object.keys(countries.countries).map(cont => countries.countries[cont])
        listOfCountries.sort();
        setCountriesList(listOfCountries)
    }

    function handleCountryClick(country) {
        setShowCountriesList(false);
        setCompanyPhoneCode('+' + country.phone)
        setCompanyLocation(country.name)
    }

    const handleCountriesDropdown = () => {
        setShowCountriesList(!showCountriesList);
    }
    const handleCompanySizesDropdown = () => {
        setShowCompanySizes(!showCompanySizes);
    }

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
                                    <label htmlFor="company-location">Uzņēmuma izvietojums</label>
                                    <div>
                                        <input onChange={(e) => setCompanyLocation(e.target.value)} value={companyLocation} type="text" id='company-location' className="job__main__left__form__input-group__input" disabled placeholder='Pilsēta, Valsts' />
                                        <img onClick={handleCountriesDropdown} src={dropdown} alt="dropdown" className={`dropdown-icon ${showCountriesList && 'active'}`} />

                                        <span className={`job__main__left__form__input-group__countries-list dropdown ${showCountriesList && 'active'}`} id='companyLocation'>
                                            {countriesList.map((country, i) => (
                                                <p onClick={() => handleCountryClick(country)} key={i} className='job__main__left__form__input-group__countries-list__country-name'>{country.name}</p>
                                            ))}
                                        </span>

                                    </div>
                                </div>    

                                <div className="job__main__left__form__input-group">
                                    <label htmlFor="company-city">Uzņēmuma pilsēta</label>
                                    <div>
                                        <input onChange={(e) => setCompanyCity(e.target.value)} value={companyCity} type="text" id='company-city' className="job__main__left__form__input-group__input" placeholder='Pilsēta, Valsts' />
                                    </div>
                                </div>    

                                <div className="job__main__left__form__input-group">
                                    <label htmlFor="company-spec">Uzņēmuma darbība</label>
                                    <input onChange={(e) => setCompanySpecialization(e.target.value)} type="text" id='company-spec' className="job__main__left__form__input-group__input" placeholder='Ar ko nodarbojies ?' />
                                </div>
                            

                                <div className="job__main__left__form__input-group">
                                    <label htmlFor="company-desc">Uzņēmuma apraksts:</label>
                                    <textarea onChange={(e) => setCompanyDescription(e.target.value)} type="text" id='company-desc' className="job__main__left__form__input-group__input" placeholder='Īss Uzņēmuma apraksts'></textarea>
                                </div>


                                <div className="job__main__left__form__input-group">
                                    <label htmlFor="company-size">Uzņēmuma lielums</label>
                                    <div>
                                        <input onChange={(e) => setCompanySize(e.target.value)} type="text" id='company-size' className="job__main__left__form__input-group__input" disabled value={companySize} placeholder='Uzņēmuma lielums' />
                                        <img onClick={handleCompanySizesDropdown} src={dropdown} alt="dropdown" className={`dropdown-icon ${showCompanySizes && 'active'}`} />

                                        <span className={`job__main__left__form__input-group__countries-list dropdown ${showCompanySizes && 'active'}`} id='companySize'>
                                            {companySizes.map((csize, i) => (
                                                <p onClick={() => {setCompanySize(csize); setShowCompanySizes(false)}} key={i} className='job__main__left__form__input-group__countries-list__country-name'>{csize}</p>
                                            ))}
                                        </span>

                                    </div>
                                </div>

                                <div className="job__main__left__form__input-group">
                                    <label htmlFor="phone">Uzņēmuma talrunis:</label>
                                    <div id='phone__input-group'>
                                        <input disabled type="text" id='company-phoneCode' name="phone" value={companyPhoneCode} className="job__main__left__form__input-group__input" placeholder='+000' />
                                        <input onChange={(e) => setCompanyPhone(e.target.value)} type="number" value={companyPhone} className="job__main__left__form__input-group__input" placeholder='Uzņēmuma talrunis' />
                                    </div>
                                </div>

                                <div className="job__main__left__form__input-group">
                                    <label htmlFor="company-email">Uzņēmuma e-pasts:</label>
                                    <input onChange={(e) => setCompanyEmail(e.target.value)} type="text" id='company-email' className="job__main__left__form__input-group__input" placeholder='Ievadiet uzņēmuma e-pastu' />
                                </div>

                                <div className="job__main__left__form__input-group">
                                    <label htmlFor="company-password">Uzņēmuma profila parole:</label>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" id='company-password' className="job__main__left__form__input-group__input" placeholder='Ievadiet paroli' />
                                </div>

                            <div className="job__main__left__form__photo">
                                <p>Uzņēmuma logotips(fotogrāfija):</p>
                                <div>
                                    <div>
                                        <img src={avatar} alt="person-avatar" className="job__main__left__form__photo__avatar" />
                                        <img src={edit} alt="edit-pen" id='edit-pen' />
                                    </div>
                                    <input type="file" name="file" id="file" onChange={(e) => {if(e.target.files && e.target.files[0])setCompanyLogo(e.target.files[0])}} />
                                    <label htmlFor="file">Izvēlēties</label>
                                </div>
                            </div>



                            <button type='submit' className='job__main__left__form__submit' onClick={(e) => {e.preventDefault();registerCompany(
                                companyEmail,
                                password,
                                companyName,
                                companyLocation,
                                companyCity,
                                companySpecialization,
                                companyDescription,
                                companySize,
                                companyPhone,
                                companyPhoneCode,
                                companyLogo,
                                setSuccess,
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