import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { BookingDate } from "./BookingDate";
import BookingTimetable from "./BookingTimetable";
import BookingForm from "./BookingForm";

class Booking extends React.Component {
    constructor() {
        super();

        this.nextDay = this.nextDay.bind(this);
        this.prevDay = this.prevDay.bind(this);    
    }

    

    componentWillMount() {
        const hairdresserId = this.props.match.params.id;

        this.props.dispatch(actions.setDate(new Date()));
        this.props.dispatch(actions.selectHairdresser(hairdresserId));
        this.props.dispatch(actions.fetchBookings(hairdresserId, this.props.date.day));
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    nextDay() {
        const hairdresserId = this.props.match.params.id;
        const today = this.props.date.day;
        const nextDay = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        this.props.dispatch(actions.setDate(nextDay));
        this.props.dispatch(actions.fetchBookings(hairdresserId, nextDay));
        this.props.dispatch(actions.removeError());
    }

    prevDay() {
        const hairdresserId = this.props.match.params.id;
        const today = this.props.date.day;
        const prevDay = new Date(today.getTime() -  24 * 60 * 60 * 1000);
        this.props.dispatch(actions.setDate(prevDay));
        this.props.dispatch(actions.fetchBookings(hairdresserId, prevDay));
        this.props.dispatch(actions.removeError());
    }

    render() {
        const hairdresser = this.props.hairdresser;

        if(hairdresser.selected) {
            return(
                <div className="booking">
                    
                    <div className="booking__heading">
                        <img className="booking__heading--image" alt="hairdresser" src={require(`../../styles/img/hairdresser-${hairdresser.selected.index}.jpg`)} />
                        <h2 className="heading-secondary u-margin-bottom-small">{hairdresser.selected.name}</h2>
                        <div className="booking__heading--date">
                            <button className="btn btn--small" onClick={this.prevDay}>&larr;</button>
                            <BookingDate 
                                day={this.props.date.day}
                            />
                            <button className="btn btn--small" onClick={this.nextDay}>&rarr;</button>
                        </div>
                    </div>
                
                    <BookingTimetable 
                        day={this.props.date.day}
                        booking={this.props.booking.bookings}
                        hairdresserIndex={hairdresser.selected.index}
                    />

                    <BookingForm 
                        hairdresserId={this.props.match.params.id}
                    />
                </div>
            )
        } else {
            return (
                <div className="booking__loading">
                    <h1 className="u-margin-top-big u-center-text">Loading...</h1>
                    <div class="loading__container">
                        <span class=""></span>
                        <div class="loading__line">
                            <div class="loading__inner"></div>
                        </div>
                    </div>
                </div> 
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        hairdresser: state.hairdresserReducer,
        date: state.dateReducer,
        booking: state.bookingReducer
    }
}

export default connect(mapStateToProps)(Booking)