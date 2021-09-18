import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: null,
        chats: null,
        onlineUsers: null,
        activeChat: null,
        activeChatID: null,
    },
    reducers: {
        setChats: (state, action) => {
            state.chats = action.payload;
        },
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        },
        setActiveChat: (state, action) => {
            state.activeChat = action.payload;
        },
        setActiveChatMessages: (state, action) => {
            state.messages = action.payload;
        },
        setActiveChatID: (state, action) => {
            state.activeChatID = action.payload;
        },
        deleteActiveChat: (state) => {
            state.activeChat = null;
        },
    },
});

export const { 
    setChats,
    setMessages,
    setOnlineUsers,
    setActiveChat,
    setActiveChatMessages,
    setActiveChatID,
    deleteActiveChat
} = chatSlice.actions;

export const chatData = (state) => state.chat;

export default chatSlice.reducer;