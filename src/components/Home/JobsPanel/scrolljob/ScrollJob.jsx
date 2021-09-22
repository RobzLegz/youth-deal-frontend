import React, { useEffect, useState } from 'react'
import Bookmark1 from '../../../../assets/svg/bookmark1.svg';
import Bookmark2 from '../../../../assets/svg/bookmark2.svg';
import OptionsIcon from '../../../../assets/svg/options-icon-no-background.svg';
import { getCompanyInfoById } from '../../../../logic/company/info/companyInfo';

function ScrollJob({jobOffer}) {
    const [following, setFollowing] = useState(false);
    const [saved, setSaved] = useState(false);
    const [companyInfo, setCompanyInfo] = useState(null);

    useEffect(() => {
        if(!companyInfo){
            getCompanyInfoById(jobOffer.company, setCompanyInfo)
        }
    }, [companyInfo, jobOffer.company]);

    if(companyInfo){
        return (
            <div className="job-panel panel">
                <div className="job-panel__top">
                    <img src={companyInfo.logo} alt="logo" className="logo" />
                    <div className="info">
                        <h4>{companyInfo.name}</h4>
                        <small>{jobOffer.post_time}</small>
                    </div>
                    <button onClick={() => setFollowing(!following)} className={following ? "job-panel__top__following" : "job-panel__top__notFollowing"}>{following ? "- Atsekot" : "+ Sekot"}</button>
                    <img src={OptionsIcon} alt="options" className="options" />
                </div>
                <div className="job-panel__location">
                    <p>{jobOffer.position_city}, {jobOffer.position_country}</p>
                </div>
                <div className="job-panel__requirements">
                    <p>{jobOffer.position_requirements}</p>
                </div>
                <p>{jobOffer.position_info}</p>
                <div className="job-panel__bottom">
                    <img src={saved ? Bookmark2 : Bookmark1} alt="bookmark" onClick={() => setSaved(!saved)} />
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
