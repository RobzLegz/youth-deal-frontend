import React, { useEffect, useState } from 'react'
import '../../Home/JobsPanel/ScrollJobs.scss';
import EditJobsModal from '../../Home/EditJobsModal/EditJobsModal';
import Pen from '../../../assets/svg/pen.svg';
import Marker from '../../../assets/svg/marker.svg';
import { useSelector } from 'react-redux'
import { userData } from '../../../slices/user/userSlice'
import { useDispatch } from 'react-redux';
import { getCompanyInfoById } from '../../../logic/company/info/companyInfo';
import { jobSeekerAcceptJobOffer } from '../../../logic/jobOffers/swipe';

function CompanyJob({info}) {
    const userInfo = useSelector(userData);
    const [userSwiped, setUserSwiped] = useState(null);

    const [companyInfo, setCompanyInfo] = useState(null);
    const [editing, setEditing] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!companyInfo) {
            getCompanyInfoById(info.company, setCompanyInfo);
        }
    }, [companyInfo, info.company]);

    useEffect(() => {
        if(userSwiped === null && userInfo.swipedPossitions && userInfo.swipedPossitions.some(p => p.position !== info.id)){
            setUserSwiped(true);
        }
    }, [userInfo.swipedPossitions, info, userSwiped]);

    const relativeTime = (postTime) => {
        const rtf = new Intl.RelativeTimeFormat('lv', {
            localeMatcher: 'best fit',
            numeric: 'auto',
            style: 'long'
        });
        const diff = new Date(postTime) - new Date();
        const units = {
            year: 24 * 60 * 60 * 1000 * 365,
            month: 24 * 60 * 60 * 1000 * 365 / 12,
            day: 24 * 60 * 60 * 1000,
            hour: 60 * 60 * 1000,
            minute: 60 * 1000,
            second: 1000
        };
        for (const unit in units) {
            if (Math.abs(diff) > units[unit] || unit === 'seconds') {
                return rtf.format(Math.round(diff / units[unit]), unit);
            }
        }
    };

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
    };

    if (userSwiped !== null && companyInfo) {
        return (
            <div className="job-panel panel">

                {userInfo.info.id === companyInfo.user && editing && <EditJobsModal job={info} setEditing={setEditing} />}

                <div className="job-panel__top">
                    <img src={companyInfo.logo} alt="logo" className="logo" />
                    <div className="info">
                        <h4>{companyInfo.company_name}</h4>
                        <small>{relativeTime(info.post_time)}</small>
                    </div>
                    {userInfo.info.id === companyInfo.user && (
                        <img src={Pen} alt="options" className="options" onClick={() => setEditing(!editing)} />
                    )}
                </div>
                <Location icon={Marker} iconAlt="marker" title="atrašanās vieta"
                    value={(!info.position_city && !info.position_country) ? 'Nezināma' :
                        <>
                            {(info.position_country && info.position_city) ? `${info.position_country}, ${info.position_city}` :
                                <>
                                    {info.position_country ? info.position_country : ''}
                                    {info.position_city ? info.position_city : ''}
                                </>}
                        </>}
                />
                <div className="job-panel__requirements">
                    <p className="job-panel__requirements__title">Prasmes un Pienmākumi</p>
                    <p>{info.position_requirements}</p>
                </div>
                <div className="job-panel__info">
                    <p className="job-panel__info__title">Darba Apraksts</p>
                    <p>{info.position_info}</p>
                </div>
                <div className="job-panel__bottom">
                    {!userInfo.info.is_employer &&
                        <button className="job-panel__bottom__sign-up" onClick={() => jobSeekerAcceptJobOffer(info.id, userInfo.accessToken, dispatch)}>Pieteikties</button>
                    }
                    <div className="job-panel__bottom__price-wrapper">
                        <small>SĀKOT NO</small>
                        <h2>€ {info.price_range}/mēnesī</h2>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}

export default CompanyJob