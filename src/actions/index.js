import axios from "axios";
import * as jwt from "jsonwebtoken";
import * as moment from "moment";

import {SET_CURRENT_USER,
        ADD_ERROR,
        REMOVE_ERROR,
        FETCH_HAIRDRESSERS,
        SELECT_HAIRDRESSER } from "./actionTypes";


//----- ERROR ACTIONS -----//

export const addError = error => ({
    type: ADD_ERROR,
    error
});

export const removeError = () => ({
    type: REMOVE_ERROR
});


//----- AUTH ACTIONS -----//

const setAuthorizationToken = token => {
    if(token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

// LOGIN ACTION
// Sends token to header
// Set state to isAuthenticated:true and user: {firstName, lastName}
export function authUser(userData) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.post("http://localhost:3001/api/user/auth", {...userData})
                .then(res => res.data)
                .then(({ token, ...user}) => {
                    // send token to req.header
                    setAuthorizationToken(token);
                    // store token in web storage (sessionStorage so jwt deleted when browser closed)
                    // this might cause security issue (eg. XSS)
                    // but not leaving any sensitive information so leave it for now
                    sessionStorage.setItem("jwtToken", token);
                    dispatch(setCurrentUser(user));
                    dispatch(removeError());
                    resolve();
                })
                .catch(error => {
                    dispatch(addError(error.response.data.error.message));
                    reject();
                });
        });
    };
}

// LOGOUT ACTION
export function logout() {
    return dispatch => {
        setAuthorizationToken(false);
        sessionStorage.removeItem("jwtToken")
        dispatch(setCurrentUser({}));
    }
}

// REGISTER ACTION
export function register(userData) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.post("http://localhost:3001/api/user/register", {...userData})
                .then(res => res.data)
                .then(({ token, ...user}) => {
                    // automatically logs in when successfully registered
                    setAuthorizationToken(token);
                    sessionStorage.setItem("jwtToken", token);
                    dispatch(setCurrentUser(user));
                    dispatch(removeError());
                    resolve();
                })
                .catch(error => {
                    dispatch(addError(error.response.data.error.message));
                    reject();
                });
        });
    };
}

// CHECK AUTH STATE
export function checkAuthState() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            // check if there is token
            const token = sessionStorage.getItem("jwtToken");
            if(token) {
                // check if the token is valid
                const decodedToken = jwt.decode(token);
                const isValid = moment.unix(decodedToken.exp);
    
                if(isValid) {
                    dispatch(setCurrentUser({
                        firstName: decodedToken.firstName,
                        lastName: decodedToken.lastName
                    }));
                }
            }
        })
    }
}

//----- HAIRDRESSER ACTIONS -----//

const setHairdressers = hairdressers => {
    return {
        type: FETCH_HAIRDRESSERS,
        hairdressers
    }
}

const setSelectHairdresser = selectedHairdresser => {
    return {
        type: SELECT_HAIRDRESSER,
        selectedHairdresser
    }
}

export function fetchHairdressers() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return axios.get("http://localhost:3001/api/hairdresser")
                .then(res => res.data)
                .then(hairdressers => {
                    dispatch(setHairdressers(hairdressers));
                })
                .catch(error => {
                    dispatch(addError(error.response.data.error.message));
                })
        })
    }
}