import {SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    userName: null,
    userPic: null
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload.userId, userName: action.payload.userName, userPic: action.payload.userPic};
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null, userName: null, userPic: null};
        default:
            return state;
    }
}