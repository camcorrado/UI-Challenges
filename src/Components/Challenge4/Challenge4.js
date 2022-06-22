import React, { Component } from "react";
import "./Challenge4.css";

export default class Challenge4 extends Component {
  render() {
    return (
      <section className="errorPage">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 4</h2>
          <h3 className="challengeDescription">404 Page</h3>
        </div>

        <div className="errorPageClouds">
          <div className="errorPageContents">
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>Try going back to your previous page.</p>
          </div>
        </div>
      </section>
    );
  }
}
