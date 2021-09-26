import axios from "axios";
import { COMPANY_SWIPING, COMPANY_SWIPING_LIST_VIEW } from "../api/apiRoutes";

export const jobSeekerAcceptJobOffer = (positionId, accepted, token) => {
    const data = new FormData()
    
    data.append("position_id", positionId);
    data.append("accepted", accepted);

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
    const data = new FormData()
    data.append("position_id", positionId);
    data.append("accepted", accepted);
    data.append("jobseeker_profile", userID);

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

    axios.get(
        `${COMPANY_SWIPING_LIST_VIEW}?jobseeker_accepted=True`,
        headers
    ).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    });
};

