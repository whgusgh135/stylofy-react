import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class BookingForm extends React.Component {
    

    async book() {  
        await this.props.dispatch(actions.makeBooking(
            this.props.hairdresserId,
            {
                date: this.props.date.day,
                time: this.props.date.time
            }
        ));
        this.props.dispatch(actions.fetchBookings(this.props.hairdresserId, this.props.date.day));
    }
    renderTime() {
        if(this.props.date.time < 13) {
            return this.props.date.time + "am";
        } else {
            return (this.props.date.time - 12) + "pm";
        }
    }

    render() {
        const options = { weekday: 'short', month: 'long', day: 'numeric' };
        let time = this.renderTime();

        if(this.props.date.time) {
            return (
                <div className="booking__form">
                    <h4 className="heading-booking u-margin-bottom-medium">Booking Form</h4>
                    <div className="u-margin-bottom-small">
                        <span className="u-thin-text">Hairdresser:</span> <span className="u-bold-text">{this.props.hairdresser.selected.name}</span>
                    </div>
                    <div className="u-margin-bottom-small">
                        <span className="u-thin-text">Date:</span> <span className="u-bold-text">{this.props.date.day.toLocaleDateString("en-US", options)}</span>
                    </div>
                    <div className="u-margin-bottom-small">
                        <span className="u-thin-text">Time:</span> <span className="u-bold-text">{time}</span>
                    </div>
                    <button className="btn btn--white u-margin-top-medium" onClick={() => this.book()}>Book</button>
                </div>
            )
        } else {
            return(
                <div className="booking__form">
                    <h4 className="heading-booking u-margin-bottom-medium">Booking Form</h4>
                    <div>
                        Please select the booking time you want!
                    </div>
                    <button className="btn btn--white u-margin-top-medium" onClick={() => this.book()}>Book</button>
                </div>
            )
        } 
    }
}

function mapStateToProps(state) {
    return {
        hairdresser: state.hairdresserReducer,
        date: state.dateReducer,
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(BookingForm);