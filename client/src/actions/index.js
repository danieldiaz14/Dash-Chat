import chats from '../apis/chats';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_CHAT,
    FETCH_CHATS,
    FETCH_CHAT,
    DELETE_CHAT,
    EDIT_CHAT
} from './types';

export const signIn = userInfo => {
    return {
        type: SIGN_IN,
        payload: userInfo
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createChat = message => async (dispatch) => {
    const response = await chats.post('/chats', {...message});
    dispatch({type: CREATE_CHAT, payload: response.data});
};

export const fetchChats = () => async (dispatch) => {
    const response = await chats.get('/chats');
    dispatch({type: FETCH_CHATS, payload: response.data});
};
export const deleteChat = () => async dispatch => {

};