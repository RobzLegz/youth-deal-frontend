import React, { useEffect, useState } from 'react'
import Inactive from '../../../../assets/svg/plans/inactive.svg';
import Bookmark1 from '../../../../assets/svg/bookmark1.svg';
import Bookmark2 from '../../../../assets/svg/bookmark2.svg';
import Active from '../../../../assets/svg/plans/active.svg';
import { getCompanyInfoById } from '../../../../logic/company/info/companyInfo';

function SvipeJob({job}) {
    const [saved, setSaved] = useState(false);
    const [swiped, setSwiped] = useState("");
    const [companyInfo, setCompanyInfo] = useState(null);
    const [shown, setShown] = useState(true);

    useEffect(() => {
        if(swiped !== ""){
            setTimeout(() => {
                setShown(false);
            }, 700);
        }
    }, [swiped]);

    useEffect(() => {
        if(!companyInfo){
            getCompanyInfoById(job.company, setCompanyInfo)
        }
    }, [companyInfo, job.company]);

    if(companyInfo && shown){
        return (
            <div className={`swipe-card panel swipedCard${swiped !== "" && `__${swiped}`}`}>
                <div className="swipe-card__header">
                    <img src={companyInfo.logo} alt="job" />
                    <h3>{companyInfo.company_name && companyInfo.company_name}</h3>
                </div>
                <div className="swipe-card__body">
                    <h3>Darba apraksts:</h3>
                    <p>{job.position_info}</p>
                    <h3>Uzņēmums piedāvā</h3>
                    <p>{job.position_requirements}</p>
                </div>
                <div className="swipe-card__bottom">
                    <button id="reject">
                        <img src={Inactive} alt="reject" onClick={() => setSwiped("left")} />
                    </button>
                    <button id="save" onClick={() => setSaved(!saved)}>
                        <img src={saved ? Bookmark2 : Bookmark1} alt={saved ? 'unsave' : 'save'} />
                    </button>
                    <button id="accept">
                        <img src={Active} alt="accept" onClick={() => setSwiped("right")} />
                    </button>
                </div>
            </div>
        )
    }else{
        return null;
    }
    
}

export default SvipeJob
