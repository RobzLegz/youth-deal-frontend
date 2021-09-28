import React, { useEffect, useState } from 'react'
import { getJobOfferUserinfo, getJobseekerInfo } from '../../../logic/user/info/getUserInfo';

function SwipedUser({info}) {
    const [userInfo, setUserInfo] = useState(null);
    const [userBaseInfo, setUserBaseInfo] = useState(null);

    useEffect(() => {
        if(!userInfo){
            getJobseekerInfo(info.jobseeker, setUserInfo);
        }else if(userInfo && !userBaseInfo){
            getJobOfferUserinfo(userInfo.user, setUserBaseInfo)
        }
    }, [userInfo, info.jobseeker, userBaseInfo]);

    console.log(userBaseInfo)

    if(userInfo && userBaseInfo){
        return (
            <div>
                <img src={userInfo.photo} alt="user" />
                <h3>{userBaseInfo.first_name} {userBaseInfo.last_name}</h3>
            </div>
        )
    }
    return null;
}

export default SwipedUser
