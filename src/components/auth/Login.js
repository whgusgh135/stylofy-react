import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";

class Login extends React.Component {

    constructor() {
        super();

        this.loginUser = this.loginUser.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(actions.removeError());
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    loginUser(userData) {
        this.props.dispatch(actions.authUser(userData));
    }

    render() {
        if(this.props.auth.isAuthenticated) {
            return <Redirect to="/" />
        }
        return (
            <LoginForm 
                loginUser={this.loginUser}
                error={this.props.error.error}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer,
        error: state.errorReducer
    }
}

export default connect(mapStateToProps)(Login);