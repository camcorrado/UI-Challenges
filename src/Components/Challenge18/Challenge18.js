import React, { Component } from "react";
import "./Challenge18.css";

export default class Challenge18 extends Component {
  state = {
    success: false,
  };

  handleSubmit = (ev) => {
    ev.preventDefault();

    const { firstName, lastName, email, message } = ev.target;

    this.setState({
      success: true,
    });
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
  };

  handleReset = (ev) => {
    ev.preventDefault();
    this.setState({
      success: false,
    });
  };

  render() {
    const { success } = this.state;
    return (
      <section className="contactUs">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 18</h2>
          <h3 className="challengeDescription">Contact Us</h3>
        </div>
        {success ? (
          <form className="contactUsForm" onSubmit={this.handleReset}>
            <h1>Contact Us</h1>
            <p className="success">
              Thank you for contacting us. Typical responses take 1-2 business
              challenges.
            </p>
            <div className="buttons">
              <button type="submit" className="primary">
                Send Another Message
              </button>
            </div>
          </form>
        ) : (
          <form className="contactUsForm" onSubmit={this.handleSubmit}>
            <h1>Contact Us</h1>
            <div className="nameInputs">
              <input
                type="text"
                name="firstName"
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
                id="email"
                maxLength="120"
                placeholder="Email"
                aria-required="true"
                required
              />
            </div>
            <div className="messageInput">
              <textarea
                name="message"
                id="message"
                rows="15"
                aria-required="true"
                maxLength="500"
                required
              ></textarea>
            </div>
            <div className="buttons">
              <button type="submit" className="primary">
                Submit
              </button>
            </div>
          </form>
        )}
      </section>
    );
  }
}
