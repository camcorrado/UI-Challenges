import React, { Component } from "react";
import "./Challenge2.css";

export default class Challenge2 extends Component {
  state = {
    error: null,
    success: false,
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null, success: false });

    const REGEX_UPPER_LOWER_NUMBER_SPECIAL =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])[\S]+/;

    const { firstName, lastName, email, password, confirmPassword, terms } =
      ev.target;

    if (password.value !== confirmPassword.value) {
      this.setState({ error: `Passwords do not match.` });
    } else if (
      password.value === confirmPassword.value &&
      password.value.length < 8
    ) {
      this.setState({ error: `Password must be longer than 8 characters.` });
    } else if (
      password.value === confirmPassword.value &&
      password.value.length > 72
    ) {
      this.setState({ error: `Password must be less than 72 characters.` });
    } else if (
      password.value === confirmPassword.value &&
      password.value.includes(" ")
    ) {
      this.setState({ error: `Password must not include spaces.` });
    } else if (
      password.value === confirmPassword.value &&
      !REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password.value)
    ) {
      this.setState({
        error: `Password must contain 1 upper case, lower case, number and special character.`,
      });
    } else {
      this.setState({ success: true });
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      password.value = "";
      confirmPassword.value = "";
      terms.checked = false;
    }
  };

  handleReset = (ev) => {
    ev.preventDefault();
    this.setState({
      success: false,
      error: null,
    });
  };

  render() {
    const { error, success } = this.state;
    return (
      <section className="challenge signUp">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 2</h2>
          <h3 className="challengeDescription">Sign Up Form</h3>
        </div>
        {success ? (
          <form className="signUpForm" onSubmit={this.handleReset}>
            <h1>Sign Up</h1>
            <p className="success">Thank you for signing up!</p>
            <div className="buttons">
              <button type="submit" className="primary">
                Sign Up Again
              </button>
            </div>
          </form>
        ) : (
          <form className="signUpForm" onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <div role="alert" className="alert">
              {error && <p className="error">{error}</p>}
            </div>
            <div className="nameInputs">
              <input
                type="text"
                name="firstName"
                aria-labelledby="first name"
                id="firstName"
                maxLength="20"
                minLength="2"
                placeholder="First Name"
                aria-required="true"
                required
              />
              <input
                type="text"
                name="lastName"
                aria-labelledby="last name"
                id="lastName"
                maxLength="20"
                minLength="2"
                placeholder="Last Name"
                aria-required="true"
                required
              />
            </div>
            <div className="emailInput">
              <input
                type="email"
                name="email"
                aria-labelledby="email"
                id="email"
                maxLength="120"
                placeholder="Email"
                aria-required="true"
                required
              />
            </div>
            <div className="passwordInput">
              <input
                type="password"
                name="password"
                aria-labelledby="password"
                id="password"
                maxLength="20"
                placeholder="Password"
                aria-required="true"
                required
              />
            </div>
            <div className="confirmPasswordInput">
              <input
                type="password"
                name="confirmPassword"
                aria-labelledby="confirm password"
                id="confirmPassword"
                maxLength="20"
                placeholder="Confirm Password"
                aria-required="true"
                required
              />
            </div>
            <div className="termsOfService">
              <label htmlFor="terms of service" id="termsOfService">
                I have read &amp; agree to the terms of service:
              </label>
              <input
                type="checkbox"
                name="terms"
                aria-labelledby="terms of service"
                id="terms"
                aria-required="true"
                required
              />
            </div>
            <div className="buttons">
              <button type="submit" className="primary">
                Sign Up
              </button>
            </div>
          </form>
        )}
      </section>
    );
  }
}
