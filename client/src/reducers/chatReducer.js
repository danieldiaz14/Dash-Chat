import { CREATE_CHAT, FETCH_CHATS } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case CREATE_CHAT:
            return [...state, action.payload];
        case FETCH_CHATS:
            return [...state, ...action.payload]
        default:
            return state;
    }
}