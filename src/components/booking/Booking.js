import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { BookingWeek } from "./BookingWeek";
import BookingTimetable from "./BookingTimetable";
import BookingForm from "./BookingForm";

class Booking extends React.Component {
    constructor() {
        super();

        this.nextWeek = this.nextWeek.bind(this);
        this.prevWeek = this.prevWeek.bind(this);
        
    }

    

    componentWillMount() {
        const hairdresserId = this.props.match.params.id;

        this.props.dispatch(actions.selectHairdresser(hairdresserId));
        this.props.dispatch(actions.fetchBookings(hairdresserId));
    }

    nextWeek() {
        const thisWeek = this.props.date.week;
        const nextWeek = thisWeek.map(date => {
            return new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000)
        });
        this.props.dispatch(actions.setWeek(nextWeek));
    }

    prevWeek() {
        const thisWeek = this.props.date.week;
        const prevWeek = thisWeek.map(date => {
            return new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000)
        });
        this.props.dispatch(actions.setWeek(prevWeek));
    }

    render() {
        const hairdresser = this.props.hairdresser;

        if(hairdresser.selected) {
            return(
                <div>
                    <br/><br/><br/>
                    <h1>{hairdresser.selected.name}</h1>
                    <BookingWeek 
                        week={this.props.date.week}
                    />
                    <button onClick={this.prevWeek}>Prev Week</button>
                    <button onClick={this.nextWeek}>Next Week</button>
                
                    <BookingTimetable 
                        week={this.props.date.week}
                    />

                    <BookingForm />
                </div>
            )
        } else {
            return (
                <h1>Loading...</h1>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        hairdresser: state.hairdresserReducer,
        date: state.dateReducer
    }
}

export default connect(mapStateToProps)(Booking)