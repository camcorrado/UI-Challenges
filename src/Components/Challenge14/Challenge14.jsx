import React, { Component } from "react";
import "./Challenge14.css";

export default class Challenge14 extends Component {
  render() {
    return (
      <section className="challenge appIcon">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 14</h2>
          <h3 className="challengeDescription">App Icon</h3>
        </div>
        <div className="appIconContainer">
          <div className="logoFace">
            <p>
              <span className="leftArm">⊂</span>(•◡•)
              <span className="rightArm">⊃</span>
            </p>
          </div>
          <div className="body">
            <span>(</span>
            <span>)</span>
          </div>
          <div className="feet">
            <span className="leftFoot">⊂</span>
            <span className="rightFoot">⊃</span>
          </div>
        </div>
      </section>
    );
  }
}
