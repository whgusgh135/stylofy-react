import { ADD_SUCCESS, REMOVE_SUCCESS } from "../actions/actionTypes";

export const successReducer = (state = {success: null}, action) => {
    switch(action.type) {
        case ADD_SUCCESS:
            return {
                success: action.success
            };
        case REMOVE_SUCCESS:
            return {
                success: null
            };
        default:
            return state;
    }
}