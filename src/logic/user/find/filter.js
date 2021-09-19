import axios from "axios";
import { USER_LIST_OPTIONS } from "../../api/apiRoutes";


export const getUserByName = (name, searchResults) => {
    const searchName = name.replace(" ", "%20");

    axios.get(`${USER_LIST_OPTIONS}?name=${searchName}`).then((res) => {
        res.data.forEach((u) => {
            searchResults.push(u);
        });
    }).catch((err) => {
        console.log(err);
    });
}