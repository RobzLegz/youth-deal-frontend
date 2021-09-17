import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: null,
        chats: null,
        onlineUsers: null,
        activeChat: null,
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
            state.activeChat.messages = action.payload;
        },
    },
});

export const { 
    setChats,
    setMessages,
    setOnlineUsers,
    setActiveChat,
    setActiveChatMessages
} = chatSlice.actions;

export const chatData = (state) => state.chat;

export default chatSlice.reducer;