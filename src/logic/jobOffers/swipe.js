import axios from "axios";
import { COMPANY_SWIPING } from "../api/apiRoutes";

export const jobSeekerAcceptJobOffer = (positionId, accepted, token) => {
    const data = {
        position_id: positionId,
        accepted: accepted
    };

    console.log(data)


    const headers = {
        headers: {
            Authorization: `Token ${token}`
        }
    }

    axios.post(
        COMPANY_SWIPING,
        data,
        headers,
    ).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    });
};

export const companyChooseJobSeekerRequest = (positionId, accepted, userID, token) => {
    const data = {
        position_id: positionId,
        accepted: accepted,
        jobseeker_profile: userID,
    };

    const headers = {
        headers: {
            Authorization: `Token ${token}`
        }
    }

    axios.post(
        COMPANY_SWIPING,
        data,
        headers
    ).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    });
};

export const getUserAcceptedJobOffers = (token) => {
    const headers = {
        headers: {
            Authorization: `Token ${token}`
        }
    };

    axios.post(
        `${COMPANY_SWIPING}?jobseeker_accepted=True`,
        headers
    ).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    });
};

