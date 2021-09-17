import React, { useState } from "react";
import './SwipeJobs.scss'

import Inactive from '../../../assets/svg/plans/inactive.svg';
import Bookmark1 from '../../../assets/svg/bookmark1.svg';
import Bookmark2 from '../../../assets/svg/bookmark2.svg';
import Active from '../../../assets/svg/plans/active.svg';

function SwipeJobs() {
    const [saved, setSaved] = useState(false);

    let jobInfo = {
        logo: "https://tse4.mm.bing.net/th?id=OIP.v-Kd-ya8T4msyd4Gk2VpzgHaHa&pid=Api"
    };

    return <div className="swipe-card panel">
        <div className="swipe-card__image">
            <img src={jobInfo.logo} alt="job" />
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
    </div>;
}

export default SwipeJobs;
