import axios from 'axios';
import { COMPANY_PROFILE, REGISTER } from '../../api/apiRoutes';

export const registerCompany = (
    companyEmail,
    password,
    companyName,
    companyLocation,
    companyCity,
    companySpecialization,
    companyDescription,
    companySize,
    companyPhone,
    companyPhoneCode,
    companyLogo,
    setSuccess
) => {
    const registerData = {
        email: companyEmail,
        password: password,
        password2: password,
        is_employer: true,
        first_name: "company",
        last_name: "company"
    };

    axios.post(REGISTER, registerData).then((res) => {
        const profileID = res.data.profile_id;
        const token = res.data.token;

        const formData = new FormData();
        formData.append("company_name", companyName);
        formData.append("position", "none");
        formData.append("phone_number", `${companyPhoneCode}${companyPhone}`);
        formData.append("logo", companyLogo);
        formData.append("country", companyLocation);
        formData.append("company_size", companySize);
        formData.append("city", companyCity);

        axios.put(`${COMPANY_PROFILE}/${profileID}/`, formData, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            console.log(res.data);
            setSuccess(res.data.success);
        }).catch((err) => {
            console.log(err.message);
            setSuccess(false);
        });

    }).catch((err) => {
        console.log(err.message);
        setSuccess(false);
    });
};