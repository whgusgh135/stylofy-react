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
import UserBooking from "./components/booking/UserBooking";
import { Contact } from './components/home/Contact';
import { Footer } from './components/home/Footer';
import { About } from "./components/home/About";
import { Features } from "./components/home/Features";

// import high order components
import { withAuth } from "./components/hocs/withAuth";

const store = configureStore();

class App extends Component {

  // checks auth state when page opens or refreshes
  // this way, redux will have the correct auth state all the time
  componentWillMount() {
    store.dispatch(actions.checkAuthState());
    store.dispatch(actions.fetchHairdressers());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/info" component={Features} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/hairdresser" component={HairdresserList} />
            <Route exact path="/hairdresser/:id/book" component={Booking} />
            <Route exact path="/user/bookings" component={withAuth(UserBooking)} />
            <Contact />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
