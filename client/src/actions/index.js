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

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = userId => {
    return {
        type: SIGN_OUT
    };
};

export const createChat = message => async(dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await chats.post('/chats', {...message, userId});
    dispatch({type: CREATE_CHAT, payload: response.data});
};