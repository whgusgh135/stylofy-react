import { ADD_ERROR, REMOVE_ERROR } from "../actions/actionTypes";

const INITIAL_STATE = {
    error: null // becomes true when logged in
}

export const errorReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_ERROR:
            return {
                error: action.error
            };
        case REMOVE_ERROR:
            return {
                error: null
            }
        default:
            return state;
    }
}