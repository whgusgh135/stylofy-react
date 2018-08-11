import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class BookingForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const options = { weekday: 'short', month: 'long', day: 'numeric' };
        return (
            <div>
                <div>
                    {this.props.hairdresser.selected.name}
                </div>
                <div>
                    {this.props.date.day.toLocaleDateString("en-US", options)}
                </div>
                <div>
                    {this.props.date.time}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        hairdresser: state.hairdresserReducer,
        date: state.dateReducer
    }
}

export default connect(mapStateToProps)(BookingForm);