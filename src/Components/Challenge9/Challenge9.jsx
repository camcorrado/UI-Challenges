import React, { Component } from "react";
import "./Challenge9.css";

export default class Challenge9 extends Component {
  render() {
    return (
      <section className="challenge landingPage">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 9</h2>
          <h3 className="challengeDescription">Landing Page</h3>
        </div>
        <div className="albumInfo">
          <div className="albumArtworkContainer">
            <img
              src="https://images.genius.com/519b6e1cac5c6574c3c336d94cb57322.1000x1000x1.jpg"
              rel="preconnect"
              className="albumArtwork"
              alt="Moonlight by Phantoms album artwork"
            />
          </div>
          <div className="aboutPhantoms">
            <p>
              Phantoms are a Los Angeles-based electronic dance music duo. The
              group consists of former teenage actors Kyle Kaplan and Vinnie
              Pergola.
            </p>
            <p>
              Their eponymous debut album was released in March 2017. Their song
              "Just a Feeling", which was downloaded over 5,000 times, charted
              on the Dance/Mix Show Airplay chart at number 40. The album's
              first and second singles "Pulling Me In" and "Been Here Before"
              were released.
            </p>
            <p>
              Before Phantoms was formed, Kaplan and Pergola listened to classic
              rock bands such as Led Zeppelin and Pink Floyd. They also had
              garage band. In 2007, the duo learnt and began producing
              electronic music. In 2016, they collaborated with Skylar Astin to
              release the single "Call My Name".
            </p>
            <p>
              In 2017, they collaborated with Giorgio Moroder to release the
              song "Champagne, Secrets, &amp; Chanel".
            </p>
            <p>
              In October 2018, Phantoms collaborated with Vanessa Hudgens to
              release the single "Lay with Me", which came out on October 3,
              2018.
            </p>
            <p>
              On February 22, 2019, Phantoms released the single "Are You Up"
              featuring Shaylen.
            </p>
          </div>
          <iframe
            src="https://open.spotify.com/embed/album/4D9zTI1QW0QXGGDhWhxlLG"
            rel="preconnect"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="Moonlight by Phantoms Album"
            className="moonlightSpotify"
          ></iframe>
        </div>
      </section>
    );
  }
}
