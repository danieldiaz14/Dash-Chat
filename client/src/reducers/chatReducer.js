import { CREATE_CHAT, FETCH_CHATS, SIGN_OUT } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case CREATE_CHAT:
            return [...state, action.payload];
        case FETCH_CHATS:
            return [...state, ...action.payload]
        case SIGN_OUT:
            return []
        default:
            return state;
    }
}