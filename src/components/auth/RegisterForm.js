import React from "react";
import { Error } from "../message/Error";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            password: "",
            passwordConfirmation: ""
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmit = event => {
        // prevents page refreshing
        event.preventDefault();
        this.props.register(this.state);
    }


    render() {
        const { firstName, lastName, phoneNumber, password, passwordConfirmation } = this.state;

        return(
            <div className="auth">
                <div className="auth-form">
                    <h3 className="heading-secondary auth-form__heading">Register</h3>
                    <Error error={this.props.error} />
                    <form className="auth-form__items--register" onSubmit={this.handleSubmit}>
                        <div className="auth-form__register-grid">
                            <label className="auth-form__label">First Name: </label>
                            <input
                                className="auth-form__input"
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="auth-form__register-grid">
                            <label className="auth-form__label">Last Name: </label>
                            <input
                                className="auth-form__input"
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="auth-form__register-grid auth-form__register-grid--full">
                            <label className="auth-form__label">Phone Number: </label>
                            <br />
                            <input
                                className="auth-form__input"
                                type="text"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="auth-form__register-grid">
                            <label className="auth-form__label">Password: </label>
                            <input
                                className="auth-form__input"
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="auth-form__register-grid">
                            <label className="auth-form__label">Password Confirmation: </label>
                            <input
                                className="auth-form__input"
                                type="password"
                                name="passwordConfirmation"
                                value={passwordConfirmation}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <button className="auth-form__register-grid--full btn btn--black u-margin-top-medium " type="submit">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterForm;