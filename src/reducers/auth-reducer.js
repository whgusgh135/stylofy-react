import { SET_CURRENT_USER } from "../actions/actionTypes";

const INITIAL_STATE = {
    isAuthenticated: false, // becomes true when logged in
    user: {} // all user information when logged in
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                // turns empty object into false, non empty object into true
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            };
        default:
            return state;
    }
}