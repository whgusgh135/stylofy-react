import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux"

function ProtectectRoute(props) {

    const {component: Component, ...rest } = props

    return (
        <Route render={() => (props.auth.user) ? <Component {...rest}/> : <Redirect to={{pathname: `/login`}} />} />
    )
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer
    }
}

export default connect (mapStateToProps)(ProtectectRoute);