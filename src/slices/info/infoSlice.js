import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
    name: "info",
    initialState: {
        jobOffers: null,
        profileAds: null,
    },
    reducers: {
        setJobOffers: (state, action) => {
            state.jobOffers = action.payload;
        },
        setProfileAds: (state, action) => {
            state.profileAds = action.payload;
        },
    },
});

export const { 
    setJobOffers,
    setProfileAds
} = infoSlice.actions;

export const infoData = (state) => state.info;

export default infoSlice.reducer;