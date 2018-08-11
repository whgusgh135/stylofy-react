import React from "react";
import * as actions from "../../actions";
import {connect} from "react-redux";

class BookingTimetableWeek extends React.Component {
    constructor(props) {
        super(props);

        this.setTime = this.setTime.bind(this);
    }

    setTime(time) {
        this.props.dispatch(actions.setTime(time));
    }

    renderTime() {
        const times = [];
        let num;
        let amOrPm = "am";

        for(let i = 10; i < 21; i++){
            if(i > 12) {
                num = i - 12;
                amOrPm = "pm";
            } else {
                num = i;
            }
            if(i === 12) {
                amOrPm = "pm";
            }
            times.push(
                <p onClick={() => this.setTime(i)}>{num} {amOrPm}</p>
            )      
        }
        return times;
    }

    render() {
        return(
            <div>
                {this.props.day.toLocaleDateString("en-US", { weekday: 'short', month: 'long', day: 'numeric' })}
                {this.renderTime()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        date: state.dateReducer,
        bookings: state.bookingReducer.bookings
    }
}

export default connect(mapStateToProps)(BookingTimetableWeek);