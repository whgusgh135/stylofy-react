import { LIST_BOOKINGS } from "../actions/actionTypes";

const INITIAL_STATE = {
    bookings: []
}

export const bookingReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LIST_BOOKINGS:
            return {
                ...state, bookings: action.bookings
            };
        default:
            return state;
    }
}