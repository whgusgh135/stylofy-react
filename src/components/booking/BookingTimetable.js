import React from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";

class BookingTimetable extends React.Component{
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

            // check if each time is booked or not by going through bookings
            let booked = this.props.booking.some(booking => {
                return booking.time == i;
            })

            // style booked time
            if(booked) {
                times.push(
                    <button disabled className="btn--disabled" onClick={() => this.setTime(i)}>{num} {amOrPm}</button>
                )

            // style open time
            } else {
                times.push(
                    <button className="btn btn--timetable" onClick={() => this.setTime(i)}>{num} {amOrPm}</button>
                ) 
            }      
        }
        return times;
    }

    render() {
        const timetableClass = "booking__timetable booking__timetable--" + this.props.hairdresserIndex;

        
        return(
            <div className={timetableClass}>
                <h4 className="heading-booking">Timetable</h4>
                <h4 className="u-margin-bottom-medium">
                    {this.props.day.toLocaleDateString("en-US", { weekday: 'short', month: 'long', day: 'numeric' })}
                </h4>

                <div className="booking__times">
                    {this.renderTime()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        date: state.dateReducer,
    }
}

export default connect(mapStateToProps)(BookingTimetable);