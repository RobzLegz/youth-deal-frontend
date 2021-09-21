import React, { useState, useEffect } from "react";
import './Saved.scss'

import { useSelector } from "react-redux";
import { infoData } from "../../slices/info/infoSlice";

import ScrollJobs from "../Home/JobsPanel/ScrollJobs";
import SwipeJobs from "../Home/JobsPanel/SwipeJobs";

const Saved = () => {
    const pageInfo = useSelector(infoData);
    const [scrollJobs, setScrollJobs] = useState(null);
    const [swipeJobs, setSwipeJobs] = useState(null);
    const [woluntaryJobs, setWoluntaryJobs] = useState(null);

    const checkForUniqueJobs = (array, object) => {
        return array.some((job) => {
            if(
                job.contract_type === object.contract_type &&
                job.position_info === object.position_info &&
                job.position_tools === object.position_tools &&
                job.position_city === object.position_city &&
                job.position_country === object.position_country &&
                job.position_requirements === object.position_requirements &&
                job.price_range === object.price_range &&
                job.position_occupation === object.position_occupation &&
                job.company === object.company
            ){
                return true
            }
            return false
        })
    }

    useEffect(() => {
        if(pageInfo.jobOffers){
            if(!scrollJobs || !swipeJobs || !woluntaryJobs){
                setScrollJobs([]);
                setSwipeJobs([]);
                setWoluntaryJobs([]);
            }else{
                pageInfo.jobOffers.forEach((job) => {
                    let mappedJob = {
                        contract_type: job.contract_type,
                        position_info: job.position_info,
                        position_tools: job.position_tools,
                        position_city: job.position_city,
                        position_country: job.position_country,
                        position_requirements: job.position_requirements,
                        price_range : job.price_range,
                        position_occupation : job.position_occupation,
                        company : job.company,
                    }

                    if(mappedJob.contract_type === "long term" && !checkForUniqueJobs(scrollJobs, mappedJob)){
                        scrollJobs.push(mappedJob);
                    }else if(job.contract_type === "short term" && !checkForUniqueJobs(swipeJobs, mappedJob)){
                        swipeJobs.push(mappedJob);
                    }else if(job.contract_type === "woluntary job" && !checkForUniqueJobs(woluntaryJobs, mappedJob)){
                        woluntaryJobs.push(mappedJob);
                    }
                });
            }
        }
    }, [pageInfo.jobOffers, scrollJobs, swipeJobs, woluntaryJobs]);

    useEffect(() => {
        if(scrollJobs){
            setActiveJobPanel(<ScrollJobs jobs={scrollJobs} />);
        }
    }, [scrollJobs]);


    const [activeJobPanel, setActiveJobPanel] = useState(null);
    const [activeJobOption, setActiveJobOption] = useState('longterm');

    return (
        <div className="saved">
            <div className="saved__left">
                <ul className="saved__left__options">
                    <li className={`saved__left__options__option ${activeJobOption === 'longterm' ? 'active' : ''}`} onClick={() => {
                        setActiveJobOption('longterm');
                        setActiveJobPanel(<ScrollJobs jobs={scrollJobs} />)
                    }}>Ilgtermiņa darbi</li>
                    <li className={`saved__left__options__option ${activeJobOption === 'shortterm' ? 'active' : ''}`} onClick={() => {
                        setActiveJobOption('shortterm');
                        setActiveJobPanel(<SwipeJobs jobs={swipeJobs} />)
                    }}>Īstermiņa darbi</li>
                    <li className={`saved__left__options__option ${activeJobOption === 'voluntary' ? 'active' : ''}`} onClick={() => {
                        setActiveJobOption('voluntary');
                        setActiveJobPanel(<ScrollJobs jobs={woluntaryJobs} />)
                    }}>Brīvprātīgie darbi</li>
                </ul>
            </div>
            <div className="saved__right">
                <div className="saved__right__scroll">
                    {activeJobPanel}
                </div>
            </div>
        </div>
    );
}

export default Saved;
