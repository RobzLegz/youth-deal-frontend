import { CHAT_ID_OPTIONS, MESSAGE_OPTIONS, NEW_CHAT, USER_CHATS } from "./chatRoutes"
import axios from "axios"
import { handleLoading, resetLoadingState } from "../../slices/loading/loadingSlice";
import { setActiveChat, setChats } from "../../slices/chat/chatSlice";

export const getUserChats = (accessToken, dispatch) => {
    dispatch(handleLoading(true));

    if(accessToken){
        axios.get(`${USER_CHATS}/${accessToken}`).then((res) => {
            dispatch(setChats(res.data));
            dispatch(resetLoadingState());
            console.log(res.data)
        }).catch((err) => {
            console.log(err);
            dispatch(resetLoadingState());
        });
    }else{
        dispatch(resetLoadingState());
    }
};

export const NewChat = (senderID, receiverID, history, dispatch) => {
    dispatch(handleLoading(true));

    if(senderID && receiverID){
        const data = {
            senderAccesstoken: senderID,
            receiverAccessToken: receiverID,
        };
    
        axios.post(`${NEW_CHAT}`, data).then((res) => {
            history.push("/chat");
            getUserChats(senderID, dispatch);
        }).catch((err) => {
            console.log(err);
            history.push("/chat");
            dispatch(resetLoadingState());
        });
    }else{
        dispatch(resetLoadingState());
    }
};

export const deleteChat = (id) => {
    if(id){
        axios.delete(`${CHAT_ID_OPTIONS}/${id}`).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }
};

export const newMessage = (senderID, receiverID, chatID, text) => {
    if(senderID && receiverID && chatID && text){
        const data = {
            senderAccesstoken: senderID, 
            receiverAccessToken: receiverID,
            chatID,
            text
        };

        axios.post(MESSAGE_OPTIONS, data).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }
};

export const getChatMessages = (chatID) => {
    if(chatID){
        axios.get(`${MESSAGE_OPTIONS}/${chatID}`).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }
};

export const updateChatMessage = (id, text) => {
    if(id && text){
        const data = {
            text: text
        };

        axios.put(`${MESSAGE_OPTIONS}/${id}`, data).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }
};

export const deleteChatMessage = (id) => {
    if(id){
        axios.delete(`${MESSAGE_OPTIONS}/${id}`).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }
};

export const activateChat = (id, profileImage, profileName, dispatch, history) => {
    if(id && profileImage && profileName){
        const data = {
            chatID: id,
            profileImage: profileImage,
            profileName: profileName,
        }

        history.push(`/chats/${id}`);
        dispatch(setActiveChat(data));
    }
};