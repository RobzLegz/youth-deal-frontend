import { createSlice } from "@reduxjs/toolkit";
import { languages } from "../../data/languages";

interface Languages {
    text: any | null
}

const initialState: Languages = {
    text: null,
};

export const languageSlice = createSlice({
    name: "languages",
    initialState,
    reducers: {
        getTextFromLanguage: (state: any, action: any) => {
            if(action.payload === "Latvian"){
                state.text = languages.latvian;
            }else if(action.payload === "English"){
                state.text = languages.english;
            }else if(action.payload === "Russian"){
                state.text = languages.russian;
            }
        }
    },
});

export const { 
    getTextFromLanguage,
} = languageSlice.actions;

export const languageData = (state: any) => state.languages;

export default languageSlice.reducer;