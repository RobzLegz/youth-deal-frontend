import axios from "axios";
import { USER_INFO } from "../api/apiRoutes";

export const deleteUser = (userID, token, dispatch) => {
    const URL = `${USER_INFO}/${userID}/`

    const headers = {
        headers: {
            Authorization: `Token ${token}`
        }
    }

    axios.delete(URL, headers).then((res) => {

    }).catch((err) => {
        console.log(err);
    });
};