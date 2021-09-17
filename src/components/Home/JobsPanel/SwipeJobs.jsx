import React, { useState } from "react";
import './SwipeJobs.scss'

import Inactive from '../../../assets/svg/plans/inactive.svg';
import Bookmark1 from '../../../assets/svg/bookmark1.svg';
import Bookmark2 from '../../../assets/svg/bookmark2.svg';
import Active from '../../../assets/svg/plans/active.svg';

function SwipeJobs({jobs}) {
    const [saved, setSaved] = useState(false);

    

    return (
        <div className="swipeJobsCountainer">
            {jobs.map((job, i) => {
                let companyInfo = {
                    logo: "https://tse4.mm.bing.net/th?id=OIP.v-Kd-ya8T4msyd4Gk2VpzgHaHa&pid=Api",
                    name: "Datorium"
                };

                return(
                    <div className="swipe-card panel" key={i}>
                        <div className="swipe-card__header">
                            <img src={companyInfo.logo} alt="job" />
                            <h3>{companyInfo.name}</h3>
                        </div>
                        <div className="swipe-card__body">
                            <p>{job.position_info}</p>
                            <p>{job.position_requirements}</p>
                        </div>
                        <div className="swipe-card__bottom">
                            <button id="reject">
                                <img src={Inactive} alt="reject" />
                            </button>
                            <button id="save" onClick={() => setSaved(!saved)}>
                                <img src={saved ? Bookmark2 : Bookmark1} alt={saved ? 'unsave' : 'save'} />
                            </button>
                            <button id="accept">
                                <img src={Active} alt="accept" />
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SwipeJobs;
