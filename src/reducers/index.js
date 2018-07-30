import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";    // needs thunk for asynchronous dispatch

import { authReducer } from "./auth-reducer";
import { errorReducer } from "./error-reducer";

// combine all reducers
const rootReducer = combineReducers({
    authReducer,
    errorReducer
});


// create store
export function configureStore() {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            // needs this for redux browser extension for dev purpose
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    return store;
}