import { createSlice } from "@reduxjs/toolkit";

export const socketSlice = createSlice({
    name: "socket",
    initialState: {
        socket: null,
        onlineUsers: null,
    },
    reducers: {
        connect: (state, action) => {
            state.socket = action.payload;
        },
        getOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        },
    },
});

export const { 
    connect,
    getOnlineUsers
} = socketSlice.actions;

export const socketData = (state) => state.socket;

export default socketSlice.reducer;