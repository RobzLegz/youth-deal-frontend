import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        loggedIn: false,
        info: null,
        accessToken: "",
        allUsers: null,
    },
    reducers: {
        login: (state) => {
            state.loggedIn = true;
        },
        setUserInfo: (state, action) => {
            state.info = action.payload;
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setUserProffession: (state, action) => {
            state.info.profile.user_proffession = action.payload;
        },
        setUserProffessionCategory: (state, action) => {
            state.info.profile.user_proffession_category = action.payload;
        },
        logoutUser: (state) => {
            state.loggedIn = false;
            state.info = null;
            state.accessToken = "";
        },
        setAllUsers: (state, action) => {
            state.allUsers = action.payload;
        },
    },
});

export const { 
    login,
    setUserInfo,
    setAccessToken,
    logoutUser,
    setUserProffession,
    setUserProffessionCategory,
    setAllUsers
} = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;