import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class Nav extends React.Component {

    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.dispatch(actions.logout());
    }

    render() {
        const user = this.props.currentUser.user;

        return (
            <div className="navigation">
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><Link to="/" className="navigation__link">Home</Link></li>
                        <li className="navigation__item"><Link to="/" className="navigation__link">About</Link></li>
                        <li className="navigation__item"><Link to="/" className="navigation__link">Info</Link></li>
                        <li className="navigation__item"><Link to="/hairdresser" className="navigation__link">Book</Link></li>
                        
                        {this.props.currentUser.isAuthenticated ? (
                            <div className="navigation__item--auth">
                                <li className="navigation__profile">Welcome {user.firstName} {user.lastName}</li>
                                <li className="navigation__item"><Link to="/" className="navigation__link">My Booking</Link></li>
                                <li className="navigation__item"><p onClick={this.logout} className="navigation__link">Logout</p></li>
                            </div>
                        ) : (
                            <div className="navigation__item--auth">
                                <li className="navigation__item--login"><Link to="/login" className="navigation__link">Login</Link></li>
                                <li className="navigation__item--register"><Link to="/register" className="navigation__link">Register</Link></li>
                            </div>
                        )} 
                    </ul>
                </nav>
            </div>
        )
    }  
}

function mapStateToProps(state) {
    return{
        currentUser: state.authReducer
    }
}

export default connect(mapStateToProps)(Nav);