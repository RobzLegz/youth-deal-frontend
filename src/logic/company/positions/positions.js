import axios from "axios";
import { setJobOffers } from "../../../slices/info/infoSlice";
import { handleLoading } from "../../../slices/loading/loadingSlice";
import { COMPANY_POSITIONS, COMPANY_POSITION_OPTIONS } from "../../api/apiRoutes";

export const newPossition = (occupation, info, city, country, requirements, priceRange, contractType, accessToken, dispatch, history) => {
    dispatch(handleLoading(true));
    const data = {
        position_occupation: occupation,
        position_info: info,
        position_city: city,
        position_country: country,
        position_requirements: requirements,
        price_range: priceRange,
        contract_type: contractType,
    };

    const headers = {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    }

    axios.post(
        COMPANY_POSITION_OPTIONS, 
        data, 
        headers
    ).then((res) => {
        dispatch(handleLoading(false));
        history.push("/");
    }).catch((err) => {
        console.log(err)
        dispatch(handleLoading(false));
        history.push("/");
    });
};

export const updatePossition = (id, occupation, info, tools, city, country, languages, requirements, priceRange, contractType, accessToken) => {
    const data = {
        position_occupation: occupation,
        position_info: info,
        position_tools: tools,
        position_city: city,
        position_country: country,
        position_languages: languages,
        position_requirements: requirements,
        price_range: priceRange,
        contract_type: contractType,
    };

    const headers = {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    }

    axios.put(
        `${COMPANY_POSITIONS}/${id}`, 
        data, 
        headers
    ).then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    });
};

export const deletePossition = (id, accessToken) => {
    const headers = {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    }

    axios.delete(
        `${COMPANY_POSITIONS}/${id}`, 
        headers
    ).then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    });
};

export const getPossitions = (dispatch) => {
    axios.get(COMPANY_POSITION_OPTIONS).then((res) => {
        dispatch(setJobOffers(res.data));
    }).catch((err) => {
        console.log(err)
    });
};


export const getPossitionByID = (id, setInfo) => {
    axios.get(`${COMPANY_POSITION_OPTIONS}?id=${id}`).then((res) => {
        setInfo(res.data[0]);
    }).catch((err) => {
        console.log(err)
    });
};