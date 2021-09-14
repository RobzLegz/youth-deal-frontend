import axios from "axios";
import { ONE_OCCUPATION, OCCUPATION_CATEGORIES } from "../api/apiRoutes";
import { getProffessionCategories, getProffessions } from "../proffessions/getProffesions";


export const newProffession = (categoryID, title, accessToken, dispatch) => {
    const data = {
        title: title,
        category: categoryID,
    };

    const headers = {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    };

    axios.post(
        `${ONE_OCCUPATION}/`,
        data,
        headers
    ).then((res) => {
        getProffessions(dispatch);
    }).catch((err) => {
        console.log(err.message);
    });
}

export const updateProffession = (proffessionID, categoryID, title, accessToken, dispatch) => {
    const data = {
        title: title,
        category: categoryID,
    };

    const headers = {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    };

    axios.put(
        `${ONE_OCCUPATION}/${proffessionID}/`,
        data,
        headers
    ).then((res) => {
        getProffessions(dispatch);
    }).catch((err) => {
        console.log(err.message);
    });
}

export const deleteProffession = (proffessionID, accessToken, dispatch) => {
    const headers = {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    };

    axios.delete(
        `${ONE_OCCUPATION}/${proffessionID}/`, headers
    ).then((res) => {
        getProffessions(dispatch);
    }).catch((err) => {
        console.log(err.message);
    });
}


export const newCategory = (title, accessToken, dispatch) => {
    const data = {
        title: title
    };

    const headers = {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    };

    axios.post(
        `${OCCUPATION_CATEGORIES}/`,
        data,
        headers
    ).then((res) => {
        getProffessionCategories(dispatch);
    }).catch((err) => {
        console.log(err.message);
    });
}

export const updateCategory = (categoryID, title, accessToken, dispatch) => {
    const data = {
        title: title
    };

    const headers = {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    };

    axios.put(
        `${OCCUPATION_CATEGORIES}/${categoryID}/`,
        data,
        headers
    ).then((res) => {
        getProffessionCategories(dispatch);
    }).catch((err) => {
        console.log(err.message);
    });
}

export const deleteCategory = (categoryID, accessToken, dispatch) => {
    const headers = {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    };

    axios.delete(
        `${OCCUPATION_CATEGORIES}/${categoryID}/`,
        headers
    ).then((res) => {
        getProffessionCategories(dispatch);
    }).catch((err) => {
        console.log(err.message);
    });
}