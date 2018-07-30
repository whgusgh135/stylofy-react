import React from "react";
import { Error } from "../message/Error";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: "",
            password: ""
        }
    }

    // allows input change and set user input as the state
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmit = event => {
        // prevents page refreshing
        event.preventDefault();
        this.props.loginUser(this.state);
    }

    render() {
        const { phoneNumber, password } = this.state;

        return (
            <div className="auth">
                <div className="auth-form">
                    <h3 className="heading-secondary auth-form__heading">Login</h3>
                    <Error error={this.props.error} />
                    <form onSubmit={this.handleSubmit} className="auth-form__items">
                        <label className="auth-form__label">Phone Number: </label>
                        <input
                            className="auth-form__input"
                            type="text"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={this.handleChange}
                            required
                        />
                        <label className="auth-form__label u-margin-top-small">Password: </label>
                        <input
                            className="auth-form__input"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            required
                        />
                        <button className="btn btn--black u-margin-top-medium " type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;