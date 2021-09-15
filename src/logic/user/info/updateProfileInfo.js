import axios from "axios";
import { handleLoading, resetLoadingState } from "../../../slices/loading/loadingSlice";
import { USER_PROFILE } from "../../api/apiRoutes";

export const updateMainInfo = (
    profileID,
    avatar,
    bio,
    birthDate,
    country,
    city,
    proffessionID,
    activeJobSeeker,
    dispatch,
    accessToken,
    userInfo
) => {
    dispatch(handleLoading(true));

    const formData = new FormData();
    formData.append("photo", avatar);
    formData.append("bio", bio);
    formData.append("birth_date", birthDate);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("interests", userInfo.info.pofile.interests);
    formData.append("experience", userInfo.info.pofile.experience);
    formData.append("languages", userInfo.info.pofile.languages);
    formData.append("knowledge", userInfo.info.pofile.knowledg);
    formData.append("extra", userInfo.info.pofile.extra);
    formData.append("profession_aka_activity", proffessionID);
    formData.append("is_active_jobseeker", activeJobSeeker);

    const headers = {
        headers: {
            Authorization: `Token ${accessToken}`,
            "Content-Type": "multipart/form-data"
        }
    }

    axios.put(
        `${USER_PROFILE}/${profileID}/`, 
        formData,
        headers
    ).then((res) => {
        dispatch(resetLoadingState());
    }).catch((err) => {
        dispatch(resetLoadingState());
    });
}

export const updateProfileInfo = (
    profileID,
    avatar,
    bio,
    birthDate,
    country,
    city,
    postInterests,
    experience,
    languages,
    education,
    extraSkills,
    proffessionID,
    activeJobSeeker,
    dispatch,
    accessToken
) => {
    dispatch(handleLoading(true));

    const formData = new FormData();
    formData.append("photo", avatar);
    formData.append("bio", bio);
    formData.append("birth_date", birthDate);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("interests", postInterests);
    formData.append("experience", experience);
    formData.append("languages", languages);
    formData.append("knowledge", education);
    formData.append("extra", extraSkills);
    formData.append("profession_aka_activity", proffessionID);
    formData.append("is_active_jobseeker", activeJobSeeker);

    const headers = {
        headers: {
            Authorization: `Token ${accessToken}`,
            "Content-Type": "multipart/form-data"
        }
    }

    axios.put(
        `${USER_PROFILE}/${profileID}/`, 
        formData,
        headers
    ).then((res) => {
        dispatch(resetLoadingState());
    }).catch((err) => {
        dispatch(resetLoadingState());
    });
}