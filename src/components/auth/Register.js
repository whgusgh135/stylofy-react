import React from "react";
import * as actions from "../../actions";
import RegisterForm from "./RegisterForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Register extends React.Component {

    constructor() {
        super();

        this.register = this.register.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(actions.removeError());
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    register(userData) {
        this.props.dispatch(actions.register(userData));
    }

    render() {
        if(this.props.auth.isAuthenticated) {
            return <Redirect to="/" />
        }
        return (
            <RegisterForm 
                register={this.register} 
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


export default connect(mapStateToProps)(Register);