import { SET_DATE, SET_WEEK, SET_TIME } from "../actions/actionTypes";

const today = new Date();
const thisWeek = [];

for(let i = 0; i < 7; i++) {
    let day = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    thisWeek.push(day);
}

const INITIAL_STATE = {
    day: today,
    week: thisWeek
}

export const dateReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_DATE:
            return {
                ...state, day: action.day
            }
        case SET_WEEK:
            return {
                ...state, week: action.week
            }
        case SET_TIME: 
            return {
                ...state, time: action.time
            }
        default:
            return state;
    }
}