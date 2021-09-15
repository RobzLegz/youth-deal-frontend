import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name: "locations",
    initialState: {
        countries: null,
        countryCitys: null,
    },
    reducers: {
        getCountrys: (state, action) => {
            state.countries = action.payload;
        },
        getCountryCitys: (state, action) => {
            state.countryCitys = action.payload;
        },
    },
});

export const { 
    getCountrys,
    getCountryCitys
} = locationSlice.actions;

export const locationData = (state) => state.locations;

export default locationSlice.reducer;