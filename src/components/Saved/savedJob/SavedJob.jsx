import React, { useEffect, useState } from 'react'
import { getCompanyInfoById } from '../../../logic/company/info/companyInfo';
import { getPossitionByID } from '../../../logic/company/positions/positions';

function SavedJob({info}) {
    const [companyInfo, setCompanyInfo] = useState(null);
    const [jobOfferInfo, setJobOfferInfo] = useState(null);

    useEffect(() => {
        if(!companyInfo){
            getCompanyInfoById(info.company, setCompanyInfo)
        }
    }, [companyInfo, info]);

    useEffect(() => {
        if(!jobOfferInfo && info){
            getPossitionByID(info.position, setJobOfferInfo);
        }
    }, [jobOfferInfo, info]);

    return (
        <div>
            
        </div>
    )
}

export default SavedJob
