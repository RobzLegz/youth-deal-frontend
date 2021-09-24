import axios from "axios";
import { logoutUser } from "../../slices/user/userSlice";
import { USER_INFO } from "../api/apiRoutes";

export const deleteUser = (userID, token, dispatch, deleterID) => {
    const URL = `${USER_INFO}/${userID}/`

    const headers = {
        headers: {
            Authorization: `Token ${token}`
        }
    }

    axios.delete(URL, headers).then((res) => {
        if(userID === deleterID){
            console.log(res.data);
            dispatch(logoutUser());
            window.localStorage.removeItem("accessToken");
            window.location.href = "/";
        }
    }).catch((err) => {
        console.log(err);
    });
};