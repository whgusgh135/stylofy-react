import React from "react";
import { connect } from "react-redux";

export function withAuth(ComponentToBeRendered) {
    class Authenticate extends React.Component {
        componentWillMount() {
            if(this.props.auth.isAuthenticated === false) {
                this.props.history.push("/login");
            }
        }
        componentWillUpdate(nextProps) {
            if(nextProps.auth.isAuthenticated === false) {
                this.props.history.push("/login");
            }
        }
        render() {
            return <ComponentToBeRendered {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            auth: state.authReducer
        }
    }
    return connect(mapStateToProps)(Authenticate);
}