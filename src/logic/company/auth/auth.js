import axios from 'axios';
import { handleLoading, resetLoadingState } from '../../../slices/loading/loadingSlice';
import { login, setAccessToken } from '../../../slices/user/userSlice';
import { REGISTER } from '../../api/apiRoutes';

export const registerCompany = (
    companyEmail,
    password,
    companyName,
    dispatch
) => {
    dispatch(handleLoading(true));

    const registerData = {
        email: companyEmail,
        password: password,
        password2: password,
        is_employer: true,
        first_name: companyName,
        last_name: "company"
    };

    axios.post(REGISTER, registerData).then((res) => {
        const token = res.data.token;
        window.localStorage.setItem("accessToken", token);
        dispatch(setAccessToken(token));
        dispatch(login());
        dispatch(resetLoadingState());
    }).catch((err) => {
        console.log(err.message);
        dispatch(resetLoadingState());
    });
};