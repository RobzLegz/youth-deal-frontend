import axios from "axios";
import { handleLoading, resetLoadingState, updateLoadingMessage, updateLoadingStage, updateTotalStages } from "../../../slices/loading/loadingSlice";
import { setSearchInfo } from "../../../slices/searchresults/searchResultSlice";
import { login, setUserInfo } from "../../../slices/user/userSlice";
import { USER_INFO } from "../../api/apiRoutes";


export const getUserInfo = (accessToken, dispatch, totalStages) => {
    dispatch(handleLoading(true));
    dispatch(updateLoadingStage(2));
    dispatch(updateTotalStages(totalStages));
    dispatch(updateLoadingMessage("Getting user info"));

    const headers = {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    };

    axios.get(USER_INFO, headers).then((res) => {
        dispatch(setUserInfo(res.data));
        dispatch(login());
        dispatch(resetLoadingState());
    }).catch((err) => {
        window.localStorage.removeItem("accessToken");
        dispatch(resetLoadingState());
    });
};

export const getUserInfoByID = (userID, dispatch) => {
    dispatch(handleLoading(true));
    dispatch(updateLoadingStage(1));
    dispatch(updateTotalStages(1));
    dispatch(updateLoadingMessage("Getting info"));

    axios.get(`${USER_INFO}/${userID}/`).then((res) => {
        dispatch(setSearchInfo(res.data));
        dispatch(resetLoadingState());
    }).catch((err) => {
        dispatch(resetLoadingState());
    });
};