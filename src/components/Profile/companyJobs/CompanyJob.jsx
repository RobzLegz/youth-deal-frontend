import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { userData } from '../../../slices/user/userSlice'

function CompanyJob({info}) {
    const userInfo = useSelector(userData);
    const [userSwiped, setUserSwiped] = useState(null);

    useEffect(() => {
        if(userSwiped === null && userInfo.swipedPossitions && userInfo.swipedPossitions.some(p => p.position !== info.id)){
            setUserSwiped(true);
        }
    }, [userInfo.swipedPossitions, info, userSwiped]);

    console.log(info)

    if(userSwiped !== null){
        return (
            <div>
                
            </div>
        )
    }
    return null;
}

export default CompanyJob
