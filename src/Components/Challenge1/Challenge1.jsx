import React, { Component } from "react";
import "./Challenge1.css";
import HEADSHOT from "./HEADSHOT.png";
import SocialsGallery from "./SocialsGallery.jsx";

export default class Challenge1 extends Component {
  render() {
    return (
      <section className="userProfile">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 1</h2>
          <h3 className="challengeDescription">User Profile</h3>
        </div>
        <div className="profile">
          <div className="profilePic">
            <img src={HEADSHOT} alt="profile pictures" />
          </div>
          <div className="profileInfo">
            <h1>Cameron Corrado</h1>
            <p>Full-Stack Web Developer &amp; Video Editor</p>
            <a
              className="portfolioLink"
              href="https://www.camcorrado.com/"
              aria-label="Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.CamCorrado.com
            </a>
            <SocialsGallery />
          </div>
        </div>
      </section>
    );
  }
}
