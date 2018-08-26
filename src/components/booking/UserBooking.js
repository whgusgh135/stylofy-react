import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";

class UserBooking extends React.Component {

    componentWillMount() {
        this.props.dispatch(actions.fetchUserBookings(this.props.auth.user.userId));
    }

    deleteBooking(bookingId, hairdresserId) {
        let userId = this.props.auth.user.userId;

        this.props.dispatch(actions.removeUserBooking(userId, bookingId, hairdresserId));
    }

    renderBookings() {
        return this.props.booking.userBookings.map(booking => {
            let time = booking.time > 13 ? booking.time - 12 + " pm" : booking.time + " am";
            let hairdresser = this.props.hairdresser.hairdressers.filter(h => {
                return (h._id === booking.hairdresser);
            });

            return(
                <div className="user-booking">
                    <img className="booking__heading--image" alt="hairdresser" src={require(`../../styles/img/hairdresser-${hairdresser[0].index}.jpg`)} />
                    <div className="user-booking__info">
                        <h4 className="user-booking__hairdresser">{hairdresser[0].name}</h4>
                        <p className="user-booking__time">{new Date(booking.date).toLocaleDateString("en-US", { weekday: 'short', month: 'long', day: 'numeric' })}</p>
                        <p>{time}</p>
                    </div>
                    <button className="btn btn--black user-booking__btn" onClick={() => this.deleteBooking(booking._id, booking.hairdresser)}>Delete booking</button>
                </div>
            )
        })
    }

    render(){
        if(this.props.booking.userBookings.length > 0) {
            return (
                <div className="user">
                    <h3 className="u-center-text heading-secondary">My Bookings</h3>
                    {this.renderBookings()}
                    <div className="u-center-text u-margin-bottom-big u-margin-top-big">
                        <Link className="btn btn--black user-booking__btn" to="/hairdresser">Make new booking</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="user">
                    <h3 className="u-center-text heading-secondary">My Bookings</h3>
                    <p className="u-center-text">You don't have any bookings.</p>
                    <div className="u-center-text u-margin-bottom-big u-margin-top-big">
                        <Link className="btn btn--black user-booking__btn" to="/hairdresser">Make new booking</Link>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer,
        booking: state.bookingReducer,
        hairdresser: state.hairdresserReducer
    }
}

export default connect(mapStateToProps)(UserBooking);