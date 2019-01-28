import { CREATE_CHAT } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case CREATE_CHAT:
            return [...state, action.payload];
        default:
            return state;
    }
}