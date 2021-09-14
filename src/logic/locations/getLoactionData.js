import axios from "axios";
import { getCountrys, getCountryCitys } from "../../slices/locations/locationSlice";
import { GET_COUNTRYS_ROUTE, GET_STATES_ROUTE } from "../api/locationRoutes";

const COUNTRY_API_AUTH_TOKEN = process.env.REACT_APP_COUNTRY_API_AUTH_TOKEN;

export const getCountries = (dispatch) => {
    const headers = {
        headers: {
            "Authorization": `Bearer ${COUNTRY_API_AUTH_TOKEN}`,
            "Accept": "application/json"
        }
    };

    axios.get(GET_COUNTRYS_ROUTE, headers).then((res) => {
        dispatch(getCountrys(res.data));
    }).catch((err) => {
        console.log(err);
    });
};

export const getCountryCities = (country, dispatch) => {
    const headers = {
        headers: {
            "Authorization": `Bearer ${COUNTRY_API_AUTH_TOKEN}`,
            "Accept": "application/json"
        }
    };

    axios.get(`${GET_STATES_ROUTE}/${country}`, headers).then((res) => {
        if(res.data.length > 0){
            dispatch(getCountryCitys(res.data));
        }else{
            dispatch(getCountryCitys(null));
        }
    }).catch((err) => {
        console.log(err);
    });
};