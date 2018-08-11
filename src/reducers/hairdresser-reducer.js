import { FETCH_HAIRDRESSERS,
        SELECT_HAIRDRESSER } from "../actions/actionTypes";

const INITIAL_STATE = {
    hairdressers: {}
}

export const hairdresserReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_HAIRDRESSERS:
            return {
                ...state, hairdressers: action.hairdressers
            }
        case SELECT_HAIRDRESSER:
            return {
                ...state, selected: action.selectedHairdresser
            }
        default:
            return state;
    }
}