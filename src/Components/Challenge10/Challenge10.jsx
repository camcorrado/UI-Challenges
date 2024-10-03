import React, { Component } from "react";
import "./Challenge10.css";

export default class Challenge10 extends Component {
  state = {
    spoiled: false,
  };

  setIsSpoiled = (value) => {
    this.setState({ spoiled: value });
  };

  render() {
    const { spoiled } = this.state;
    return (
      <section className="challenge comingSoon">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 10</h2>
          <h3 className="challengeDescription">Coming Soon</h3>
        </div>
        <div className="comingSoonContainer">
          <h1>COMING SOON</h1>
          <h2>New Dead By Daylight Killers &amp; Survivors!</h2>
          {spoiled ? (
            <>
              <div
                className="comingSoonReveal"
                onMouseEnter={() => this.setIsSpoiled(true)}
                onMouseLeave={() => this.setIsSpoiled(false)}
              >
                <div className="killers">
                  <div className="killer">
                    <img
                      src="https://i.imgur.com/Vy29Ppd.jpg"
                      alt="Jason Voorhees from Friday the 13th"
                    />
                    <p>Jason Voorhees</p>
                  </div>
                  <div className="killer">
                    <img src="https://i.imgur.com/9R3szgB.jpg" alt="Candyman" />
                    <p>Candyman</p>
                  </div>
                  <div className="killer">
                    <img
                      src="https://i.imgur.com/DlyQb2o.jpg"
                      alt="Werewolf from The Howling"
                    />
                    <p>Werewolf</p>
                  </div>
                </div>
                <div className="survivors">
                  <div className="survivor">
                    <img
                      src="https://i.imgur.com/WACgR7B.jpg"
                      alt="Sidney Prescott from Scream"
                    />
                    <p>Sidney Prescott</p>
                  </div>
                  <div className="survivor">
                    <img
                      src="https://i.imgur.com/GA8T87o.jpg"
                      alt="Shaun Riley from Shaun of the Dead"
                    />
                    <p>Shaun Riley</p>
                  </div>
                  <div className="survivor">
                    <img
                      src="https://i.imgur.com/VRpP9IN.jpg"
                      alt="Marty Mikalski from Cabin in the Woods"
                    />
                    <p>Marty Mikalski</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div
              className="comingSoonReveal"
              onMouseEnter={() => this.setIsSpoiled(true)}
              onMouseLeave={() => this.setIsSpoiled(false)}
            >
              <p className="comingSoonHover">
                (Pssst! Come over here to spoil the surprise!)
              </p>
            </div>
          )}
        </div>
      </section>
    );
  }
}
