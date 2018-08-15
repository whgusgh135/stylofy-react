import { LIST_BOOKINGS, LIST_USER_BOOKINGS, DELETE_USER_BOOKING } from "../actions/actionTypes";

const INITIAL_STATE = {
    bookings: [],
    userBookings: []
}

export const bookingReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LIST_BOOKINGS:
            return {
                ...state, bookings: action.bookings
            };
        case LIST_USER_BOOKINGS:
            return {
                ...state, userBookings: action.userBookings
            }
        case DELETE_USER_BOOKING:
            return {
                ...state, userBookings: state.userBookings.filter(booking => booking._id !== action.id)
            }
        default:
            return state;
    }
}