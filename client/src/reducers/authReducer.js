import {SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
<<<<<<< HEAD
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
=======
    userId: null,
    userName: null
};


export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload.userId, userName: action.payload.userName};
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null, userName: null};
>>>>>>> faf7884bf5cc30055553bf9f09799210335eadf2
        default:
            return state;
    }
}