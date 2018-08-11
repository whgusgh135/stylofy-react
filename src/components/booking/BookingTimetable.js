import React from "react";
import BookingTimetableWeek from "./BookingTimetableWeek";
import * as actions from "../../actions";
import { connect } from "react-redux";

class BookingTimetable extends React.Component{
    constructor(props) {
        super(props);
    }

    setDay(day) {
        this.props.dispatch(actions.setDate(day))
    }

    renderDay() {
        const week = this.props.week;
        return week.map((day, index) => {
            return(
                <div onClick={() => this.setDay(day)}>
                    <BookingTimetableWeek
                        index={index}
                        day={day}
                    />
                </div>
            )
        })
    }

    render() {
        
        var options = { weekday: 'short', month: 'long', day: 'numeric' };
        
        return(
            <div>
                {this.renderDay()}
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