import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user/userSlice";
import loadingReducer from "../slices/loading/loadingSlice";
import proffessionReducer from "../slices/proffessions/proffessionSlice";
import searchReducer from "../slices/searchresults/searchResultSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        loading: loadingReducer,
        proffessions: proffessionReducer,
        search: searchReducer,
    },
});