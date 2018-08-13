import { SET_DATE, SET_TIME } from "../actions/actionTypes";

const today = new Date();

const INITIAL_STATE = {
    day: today
}

export const dateReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_DATE:
            return {
                ...state, day: action.day
            }
        case SET_TIME: 
            return {
                ...state, time: action.time
            }
        default:
            return state;
    }
}