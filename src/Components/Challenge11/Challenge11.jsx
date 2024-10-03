import React, { Component } from "react";
import "./Challenge11.css";

export default class Challenge11 extends Component {
  state = {
    error: null,
  };

  handleClickHappyButton = (e) => {
    e.preventDefault();
    this.setState({ error: false });
  };

  handleClickSadButton = (e) => {
    e.preventDefault();
    this.setState({ error: true });
  };

  render() {
    const { error } = this.state;

    return (
      <section className="challenge flashMessage">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 11</h2>
          <h3 className="challengeDescription">Flash Message</h3>
        </div>
        <div className="flashMessageForm">
          <div className="messageAndButtons">
            <div className="emoticonMessage">
              <p>
                {error === null ? "Hiya!" : error === true ? "Boo!" : "Nice!"}
              </p>
            </div>
            <div className="buttons">
              <button
                type="submit"
                className="happyButton"
                onClick={this.handleClickHappyButton}
              >
                Click here!
              </button>
              <button
                type="submit"
                className="sadButton"
                onClick={this.handleClickSadButton}
              >
                Don't click here!
              </button>
            </div>
          </div>
          <div className="emoticon">
            <div className="emoticonHead">
              {error === null ? (
                <p>(＾▿＾)</p>
              ) : error === true ? (
                <p>(⊙﹏☉)</p>
              ) : (
                <p>(─‿─)</p>
              )}
            </div>
            <div className="emoticonBody">
              {error === null ? (
                <p>\_(&nbsp;&nbsp;&nbsp;)_/</p>
              ) : error === true ? (
                <p>q-(&nbsp;&nbsp;&nbsp;)-p</p>
              ) : (
                <p>d-(&nbsp;&nbsp;&nbsp;)-b</p>
              )}
              <p>_/&nbsp;&nbsp;\_</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
