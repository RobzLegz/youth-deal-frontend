import React from "react";
import './ScrollJobs.scss';

import OptionsIcon from '../../../assets/svg/options-icon.svg';
import Bookmark1 from '../../../assets/svg/bookmark1.svg';

function ScrollJobs({ jobs }) {
    return (
        <>
            {jobs.map((job, i) =>
                <div className="job-panel panel" key={i}>
                    <div className="job-panel__top">
                        <img src={job.avatar} alt="avatar" />
                        <div className="info">
                            <h4>{job.name}</h4>
                            <small>{job.date}</small>
                        </div>
                        <button>+ Sekot</button>
                        <img src={OptionsIcon} alt="options" />
                    </div>
                    <h2>{job.title}</h2>
                    <div className="job-panel__requirements">
                        {job.requirements.map((req, i) =>
                            <div className="job-panel__requirements__requirement" key={i}>{req}</div>
                        )}
                    </div>
                    <img src={job.image} alt="job" />
                    <p>{job.description}</p>
                    <div className="job-panel__bottom">
                        <img src={Bookmark1} alt="bookmark" />
                        <div className="job-panel__bottom__price-wrapper">
                            <span>SĀKOT NO</span>
                            <h2>€ {job.price} /mēnesī</h2>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

}

export default ScrollJobs;
