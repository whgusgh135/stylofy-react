import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import redux related
import { Provider } from "react-redux";
import { configureStore } from "./reducers";
import * as actions from "./actions";

// import components
import Nav from "./components/Nav";
import { Main } from "./components/Main";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HairdresserList from "./components/booking/HairdresserList";
import Booking from "./components/booking/Booking";

const store = configureStore();

class App extends Component {

  // checks auth state when page opens or refreshes
  // this way, redux will have the correct auth state all the time
  componentWillMount() {
    store.dispatch(actions.checkAuthState());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/hairdresser" component={HairdresserList} />
            <Route exact path="/hairdresser/:id/book" component={Booking} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
