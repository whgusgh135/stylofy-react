import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Error } from "../message/Error";
import { Success } from "../message/Success";

class BookingForm extends React.Component {
    
    componentWillMount() {
        this.props.dispatch(actions.removeError());
        this.props.dispatch(actions.removeSuccess());
    }

    async book() {  
        await this.props.dispatch(actions.makeBooking(
            this.props.hairdresserId,
            {
                date: this.props.date.day,
                time: this.props.date.time
            }
        ));
        this.props.dispatch(actions.fetchBookings(this.props.hairdresserId, this.props.date.day));
        this.props.dispatch(actions.addSuccess("Booked Successfully!"));
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
                    <Error error={this.props.error.error} />
                    <Success success={this.props.success.success} />
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
                    <Error error={this.props.error.error} />
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
        auth: state.authReducer,
        error: state.errorReducer,
        success: state.successReducer
    }
}

export default connect(mapStateToProps)(BookingForm);