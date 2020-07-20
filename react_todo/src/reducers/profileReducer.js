import { EMAIL_REQUEST } from '../actions/profileActions';
import { USERNAME_REQUEST } from '../actions/profileActions';

export const initialState = {
    userName: '',
    email: '',
    authorization: null,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_REQUEST:
            return { ...state, email: action.payload };
        case USERNAME_REQUEST:
            return { ...state, userName: action.payload };
        default:
            return state;
    }
}