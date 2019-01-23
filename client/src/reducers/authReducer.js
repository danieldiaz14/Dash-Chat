import {SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userName: null,
    userId: null,
    userPic: null
};


export default (state = INITIAL_STATE, {type, payload}) => {
    console.log(payload);
    switch (type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: payload.getId(), userName: payload.getName(), userPic: payload.getImageUrl()};
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null, userName: null, userPic: null};
        default:
            return state;
    }
}