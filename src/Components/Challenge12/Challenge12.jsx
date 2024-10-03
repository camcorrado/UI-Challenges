import React, { Component } from "react";
import "./Challenge12.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";

export default class Challenge12 extends Component {
  state = {
    error: null,
    success: false,
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null, success: false });
    const statesArray = [
      "AL",
      "AK",
      "AS",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "DC",
      "FM",
      "FL",
      "GA",
      "GU",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MH",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "MP",
      "OH",
      "OK",
      "OR",
      "PW",
      "PA",
      "PR",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VI",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY",
    ];

    const {
      shippingFirstName,
      shippingLastName,
      streetAddress,
      city,
      state,
      zipcode,
      email,
      phone,
      billingFirstName,
      billingLastName,
      cardNumber,
      CVC,
      expirationMonth,
      expirationYear,
    } = ev.target;

    let date = new Date();
    let currentYear = date.getFullYear().toString().slice(2, 4);
    let currentMonth = date.getMonth() + 1;
    let capitalizedState = state.value.toUpperCase();

    let letters = /^[A-Za-z]+$/;

    if (zipcode.value.length < 5) {
      this.setState({ error: `Please enter a valid zipcode.` });
    }

    if (!shippingFirstName.value.match(letters)) {
      this.setState({
        error: `Please enter a valid first name in the shipping section.`,
      });
    } else if (!shippingLastName.value.match(letters)) {
      this.setState({
        error: `Please enter a valid last name in the shipping section.`,
      });
    } else if (!city.value.match(letters)) {
      this.setState({
        error: `Please enter a valid city.`,
      });
    } else if (phone.value.length < 10) {
      this.setState({
        error: `Please enter a valid phone number.`,
      });
    } else if (!statesArray.includes(capitalizedState)) {
      this.setState({ error: `Please enter a valid state.` });
    } else if (!billingFirstName.value.match(letters)) {
      this.setState({
        error: `Please enter a valid first name in the billing section.`,
      });
    } else if (!billingLastName.value.match(letters)) {
      this.setState({
        error: `Please enter a valid last name in the billing section.`,
      });
    } else if (cardNumber.value.length < 16) {
      this.setState({
        error: `Please enter a valid credit card number.`,
      });
    } else if (CVC.value.length < 3) {
      this.setState({
        error: `Please enter a valid CVC.`,
      });
    } else if (expirationMonth.value.length < 2) {
      this.setState({
        error: `Please enter a valid two digit month.`,
      });
    } else if (expirationMonth.value < 1 || expirationMonth.value > 12) {
      this.setState({ error: `Please enter a valid month.` });
    } else if (
      expirationYear.value < currentYear ||
      expirationYear.value.length < 2
    ) {
      this.setState({ error: `Please enter a valid year.` });
    } else if (
      Number(expirationMonth.value) < currentMonth &&
      expirationYear.value <= Number(currentYear)
    ) {
      this.setState({ error: `Please enter a valid expiration date.` });
    } else {
      this.setState({ success: true });
      shippingFirstName.value = "";
      shippingLastName.value = "";
      streetAddress.value = "";
      city.value = "";
      state.value = "";
      zipcode.value = "";
      email.value = "";
      phone.value = "";
      billingFirstName.value = "";
      billingLastName.value = "";
      cardNumber.value = "";
      CVC.value = "";
      expirationMonth.value = "";
      expirationYear.value = "";
    }
  };

  handleReset = (ev) => {
    ev.preventDefault();
    this.setState({
      success: false,
      error: null,
    });
  };

  handleChangeInputZipcode = (ev) => {
    const { value, maxLength } = ev.target;
    const zipcode = value.slice(0, maxLength);

    this.setState({
      zipcode,
    });
  };

  handleChangeInputPhone = (ev) => {
    const { value, maxLength } = ev.target;
    const phone = value.slice(0, maxLength);

    this.setState({
      phone,
    });
  };

  handleChangeInputCardNumber = (ev) => {
    const { value, maxLength } = ev.target;
    const cardNumber = value.slice(0, maxLength);

    this.setState({
      cardNumber,
    });
  };

  handleChangeInputCVC = (ev) => {
    const { value, maxLength } = ev.target;
    const CVC = value.slice(0, maxLength);

    this.setState({
      CVC,
    });
  };

  handleChangeInputExpirationMonth = (ev) => {
    const { value, maxLength } = ev.target;
    const expirationMonth = value.slice(0, maxLength);

    this.setState({
      expirationMonth,
    });
  };

  handleChangeInputExpirationYear = (ev) => {
    const { value, maxLength } = ev.target;
    const expirationYear = value.slice(0, maxLength);

    this.setState({
      expirationYear,
    });
  };

  render() {
    const { error, success } = this.state;
    return (
      <section className="challenge checkout">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 12</h2>
          <h3 className="challengeDescription">Checkout Form</h3>
        </div>
        {success ? (
          <div className="checkoutTable">
            <h1 className="checkoutTitle">Checkout</h1>
            <div role="alert" className="alert">
              {error && <p className="error">{error}</p>}
            </div>
            <form
              className="checkoutForm"
              id="formSuccess"
              onSubmit={this.handleReset}
            >
              <p className="success">Thanks for ordering!</p>
              <div className="buttons">
                <button type="submit" className="primary">
                  Order Again
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="checkoutTable">
            <h1 className="checkoutTitle">Checkout</h1>
            <div role="alert" className="alert">
              {error && <p className="error">{error}</p>}
            </div>
            <div className="checkoutInfo">
              <div className="cart">
                <div className="cartHeader">
                  <h2>Cart</h2>
                </div>
                <div className="cartItem">
                  <p className="itemNumber">Item 1</p>
                  <p className="itemPrice">$5</p>
                </div>
                <div className="cartItem">
                  <p className="itemNumber">Item 2</p>
                  <p className="itemPrice">$10</p>
                </div>
                <div className="cartItem">
                  <p className="itemNumber">Item 3</p>
                  <p className="itemPrice">$7</p>
                </div>
                <div className="cartItem">
                  <p className="itemNumber">Item 4</p>
                  <p className="itemPrice">$2</p>
                </div>
                <div className="cartTotal">
                  <p className="totalHeader">Total</p>
                  <p className="totalPrice">$24</p>
                </div>
              </div>
              <form className="checkoutForm" onSubmit={this.handleSubmit}>
                <div className="shippingInputs">
                  <h2>Shipping</h2>
                  <div className="shippingNameInputs">
                    <input
                      type="text"
                      name="shippingFirstName"
                      id="shippingFirstName"
                      maxLength="20"
                      minLength="2"
                      placeholder="First Name"
                      aria-required="true"
                      required
                    />
                    <input
                      type="text"
                      name="shippingLastName"
                      id="shippingLastName"
                      maxLength="20"
                      minLength="2"
                      placeholder="Last Name"
                      aria-required="true"
                      required
                    />
                  </div>
                  <div className="streetAddressInput">
                    <input
                      type="text"
                      name="streetAddress"
                      id="streetAddress"
                      placeholder="Street Address"
                      aria-required="true"
                      required
                    />
                  </div>
                  <div className="cityStateZipcodeInputs">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      aria-required="true"
                      required
                    />
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="State"
                      aria-required="true"
                      required
                    />
                    <input
                      type="number"
                      name="zipcode"
                      id="zipcode"
                      placeholder="Zipcode"
                      maxLength="5"
                      aria-required="true"
                      required
                    />
                  </div>
                  <div className="emailPhoneInputs">
                    <input
                      type="email"
                      name="email"
                      id="shippingEmail"
                      placeholder="Email"
                      aria-required="true"
                      required
                    />
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      maxLength="10"
                      aria-required="true"
                      required
                    />
                  </div>
                </div>
                <div className="billingInputs">
                  <h2>Billing</h2>
                  <div className="billingNameInputs">
                    <input
                      type="text"
                      name="billingFirstName"
                      id="billingFirstName"
                      maxLength="20"
                      minLength="2"
                      placeholder="First Name"
                      aria-required="true"
                      required
                    />
                    <input
                      type="text"
                      name="billingLastName"
                      id="billingLastName"
                      maxLength="20"
                      minLength="2"
                      placeholder="Last Name"
                      aria-required="true"
                      required
                    />
                  </div>
                  <div className="cardNumberInput">
                    <input
                      type="number"
                      name="cardNumber"
                      id="cardNumber"
                      placeholder="Credit Card Number"
                      maxLength="16"
                      aria-required="true"
                      required
                    />
                  </div>
                  <div className="CVCExpirationsInputs">
                    <input
                      type="number"
                      name="CVC"
                      id="CVC"
                      placeholder="CVC"
                      maxLength="3"
                      aria-required="true"
                      required
                    />
                    <input
                      type="number"
                      name="expirationMonth"
                      id="expirationMonth"
                      placeholder="MM"
                      maxLength="2"
                      aria-required="true"
                      required
                    />
                    <input
                      type="number"
                      name="expirationYear"
                      id="expirationYear"
                      placeholder="YY"
                      maxLength="2"
                      aria-required="true"
                      required
                    />
                  </div>
                  <div className="cardTypes">
                    <FontAwesomeIcon icon={faCcVisa} className="faIcon visa" />
                    <FontAwesomeIcon
                      icon={faCcMastercard}
                      className="faIcon mastercard"
                    />
                    <FontAwesomeIcon icon={faCcAmex} className="faIcon amex" />
                    <FontAwesomeIcon
                      icon={faCcDiscover}
                      className="faIcon discover"
                    />
                  </div>
                </div>
                <div className="buttons">
                  <button type="submit" className="primary">
                    Checkout
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    );
  }
}
