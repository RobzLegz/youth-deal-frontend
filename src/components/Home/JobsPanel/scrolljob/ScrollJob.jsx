import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import OptionsIcon from '../../../../assets/svg/options-icon-no-background.svg';
import Marker from '../../../../assets/svg/marker.svg';
import { getCompanyInfoById } from '../../../../logic/company/info/companyInfo';
import { userData } from '../../../../slices/user/userSlice';
import { useHistory } from 'react-router-dom';

function ScrollJob({jobOffer}) {
    const [following, setFollowing] = useState(false);
    const [companyInfo, setCompanyInfo] = useState(null);

    const userInfo = useSelector(userData);

    const history = useHistory();

    if(!companyInfo){
        getCompanyInfoById(jobOffer.company, setCompanyInfo)
    }

    useEffect(() => {
        if(!companyInfo){
            getCompanyInfoById(jobOffer.company, setCompanyInfo)
        }
    }, [companyInfo, jobOffer.company]);

    useEffect(() => {

    }, [jobOffer.post_time])

    const relativeTime = (postTime) => {
        const rtf = new Intl.RelativeTimeFormat('lv', {
            localeMatcher: 'best fit',
            numeric: 'auto',
            style: 'long'
        });
        const diff = new Date(postTime) - new Date();
        const units = {
            year  : 24 * 60 * 60 * 1000 * 365,
            month : 24 * 60 * 60 * 1000 * 365/12,
            day   : 24 * 60 * 60 * 1000,
            hour  : 60 * 60 * 1000,
            minute: 60 * 1000,
            second: 1000
        }
        for (const unit in  units) {
            if (Math.abs(diff) > units[unit] || unit === 'seconds') {
                return rtf.format(Math.round(diff/units[unit]), unit)
            }
        }
    }

    const Location = ({ icon, iconAlt, title, value }) => {
        return (
            <div className="job-panel__location">
                <div>
                    <img src={icon} alt={iconAlt} />
                    <p>{title}</p>
                </div>
                <p>{value}</p>
            </div>
        );
    }

    if(companyInfo){
        return (
            <div className="job-panel panel">
                <div className="job-panel__top">
                    <img src={companyInfo.logo} alt="logo" className="logo" onClick={() => history.push(`/profile/${companyInfo.user}`)} />
                    <div className="info">
                        <h4 onClick={() => history.push(`/profile/${companyInfo.user}`)} >{companyInfo.company_name}</h4>
                        <small>{relativeTime(jobOffer.post_time)}</small>
                    </div>
                    <button onClick={() => setFollowing(!following)} className={following ? "job-panel__top__following" : "job-panel__top__notFollowing"}>{following ? "- Atsekot" : "+ Sekot"}</button>
                    {userInfo.info.id === companyInfo.id && (
                        <img src={OptionsIcon} alt="options" className="options" />
                    )}
                </div>
                <Location icon={Marker} iconAlt="marker" title="atrašanās vieta"
                    value={(!jobOffer.position_city && !jobOffer.position_country) ? 'Nezināma' : 
                    <>
                        {(jobOffer.position_country && jobOffer.position_city) ? `${jobOffer.position_country}, ${jobOffer.position_city}` :
                        <>
                            {jobOffer.position_country ? jobOffer.position_country : ''}
                            {jobOffer.position_city ? jobOffer.position_city : ''}
                        </>}
                    </>}
                />
                <div className="job-panel__requirements">
                    <p className="job-panel__requirements__title">Prasmes un Pienmākumi</p>
                    <p>{jobOffer.position_requirements}</p>
                </div>
                <div className="job-panel__info">
                    <p className="job-panel__info__title">Darba Apraksts</p>
                    <p>{jobOffer.position_info}</p>
                </div>
                <div className="job-panel__bottom">
                    {/* <img src={saved ? Bookmark2 : Bookmark1} alt="bookmark" onClick={() => setSaved(!saved)} /> */}
                    <button className="job-panel__bottom__sign-up">Pieteikties</button>
                    <div className="job-panel__bottom__price-wrapper">
                        <small>SĀKOT NO</small>
                        <h2>€ {jobOffer.price_range}/mēnesī</h2>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}

export default ScrollJob
