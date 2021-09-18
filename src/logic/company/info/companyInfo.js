import axios from "axios";
import { COMPANY_PROFILE } from "../../api/apiRoutes";

export const getCompanyInfoById = (id, setCompanyInfo) => {
    axios.get(`${COMPANY_PROFILE}/${id}/`).then((res) => {
        setCompanyInfo(res.data);
    }).catch((err) => {
        console.log(err);
    });
};