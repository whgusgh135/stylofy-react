import React from "react";
import { connect } from "react-redux";
import { HairdresserCard } from "./HairdresserCard";

import * as actions from "../../actions";

class HairdresserList extends React.Component {

    componentWillMount() {
        this.props.dispatch(actions.fetchHairdressers());
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    renderHairdressers() {
        return this.props.hairdressers.map(hairdresser => {
            return (
                <HairdresserCard
                    key={hairdresser._id}
                    hairdresser={hairdresser}
                    index={hairdresser.index}
                />
            )
        })
    }

    render() {
        if(this.props.hairdressers.length > 0) {
            return (
                <section className="section-book">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Book with One of our Stylists
                        </h2>
                    </div>
                    <div className="row">
                        {this.renderHairdressers()}
                    </div>
                </section>
            )
        } else {
            return (
                <section className="section-book">
                    <h1 className="u-margin-top-big u-center-text">Loading...</h1>
                    <div class="loading__container">
                        <span class=""></span>
                        <div class="loading__line">
                            <div class="loading__inner"></div>
                        </div>
                    </div>
                </section>  
            )
        }
        
    }

}

function mapStateToProps(state) {
    return {
        hairdressers: state.hairdresserReducer.hairdressers
    }
}

export default connect(mapStateToProps)(HairdresserList);