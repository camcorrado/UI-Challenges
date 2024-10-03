import React, { Component } from "react";
import "./Challenge5.css";

export default class Challenge5 extends Component {
  state = {
    roboConvo: [
      "Hi!",
      "Isn't this messenger cool?",
      "It was designed by a really passionate web developer!",
      "g2g ttyl!",
    ],
    convo: [],
    responding: false,
    disabled: false,
  };

  componentDidMount = () => {
    this.setState({
      convo: [{ sender: "robot", message: this.state.roboConvo[0] }],
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { message } = e.target;
    const { convo } = this.state;
    this.setState({
      convo: [{ sender: "user", message: message.value }, ...convo],
      disabled: true,
    });

    let filteredConvos = [];

    for (let i = 0; i < convo.length; i++) {
      if (convo[i].sender === "robot") {
        filteredConvos.push(convo[i]);
      }
    }
    if (filteredConvos.length <= 3) {
      this.setState({ responding: true });
      setTimeout(() => {
        this.roboResponse(filteredConvos);
      }, 1000);
    } else {
      this.setState({ disabled: false });
    }
    message.value = "";
  };

  roboResponse = (filteredConvos) => {
    let { roboConvo, convo } = this.state;
    let newRoboMessage;
    newRoboMessage = roboConvo[filteredConvos.length];
    this.setState({
      convo: [{ sender: "robot", message: newRoboMessage }, ...convo],
      responding: false,
      disabled: false,
    });
  };

  render() {
    const { convo, disabled, responding } = this.state;
    return (
      <section className="challenge directMessaging">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 5</h2>
          <h3 className="challengeDescription">Direct Messaging</h3>
        </div>
        <div className="messenger">
          <div className="messages">
            {responding ? (
              <div className="textResponding">
                <div className="yellow"></div>
                <div className="red"></div>
                <div className="blue"></div>
                <div className="violet"></div>
              </div>
            ) : (
              <></>
            )}
            {convo.map((con, index) => (
              <p key={index} className={con.sender}>
                {con.message}
              </p>
            ))}
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="messageInput">
              <textarea
                name="message"
                id="message"
                aria-labelledby="message"
                rows="15"
                aria-required="true"
                maxLength="120"
                required
              ></textarea>
            </div>
            <div className="buttons">
              <button type="submit" disabled={disabled}>
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
