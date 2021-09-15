import axios from "axios";
import { setUserJobCategory, setUserJob } from "../../../slices/searchresults/searchResultSlice";
import { ONE_OCCUPATION } from "../../api/apiRoutes";

export const getUserProffession = (id, dispatch, allOccupations) => {
    if(id){
        axios.get(`${ONE_OCCUPATION}/${id}/`).then((res) => {
            dispatch(setUserJob(res.data.title));
            
            for (let i = 0; i < allOccupations.length; i++){
                for (let j = 0; j < allOccupations[i].occupations.length; j++){
                    if(allOccupations[i].occupations[j].category === id){
                        dispatch(setUserJobCategory(allOccupations[i].title));
                        break;
                    }
                }
            }
        }).catch((err) => {
            console.log(err.message);
        });
    }
}