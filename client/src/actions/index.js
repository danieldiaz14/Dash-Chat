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

export const createChat = message => async(dispatch) => {
    const response = await chats.post('/chats', {...message});
    console.log(response);
    dispatch({type: CREATE_CHAT, payload: response.data});
};