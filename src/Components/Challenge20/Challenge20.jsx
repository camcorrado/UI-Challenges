import React, { Component } from "react";
import "./Challenge20.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import HEADSHOT from "../Challenge1/HEADSHOT.png";

export default class Challenge20 extends Component {
  state = {
    liked: false,
  };

  handleClickLike = () => {
    if (this.state.liked === false) {
      this.setState({ liked: true });
    } else {
      this.setState({ liked: false });
    }
  };

  render() {
    const { liked } = this.state;
    return (
      <section className="challenge blogPost">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 20</h2>
          <h3 className="challengeDescription">Blog Post</h3>
        </div>
        <div className="blogPostContainer">
          <div className="bloggerInfo">
            <div className="bloggerProfilePic">
              <img src={HEADSHOT} alt="Cam's Profile Pic" />
            </div>
            <h1>Complete!</h1>
          </div>
          <div className="blogPostBody">
            <p>
              Wow - 20 UI challenges. It's been quite the journey. In all
              honesty, I was derailed for a loooooong time, but that's life!
              Proud to have completed this exercise. I have learned so much -
              from basic techniques to thinking out of the box and creating
              unique designs. I can't wait to see what I come up with next!
            </p>
          </div>
          <div className="blogPostFooter">
            <div className="blogPostDate">
              <p>20 October, 2024</p>
            </div>
            <div className="blogPostLikeButton">
              <button
                aria-label="like button"
                onClick={() => this.handleClickLike()}
              >
                {liked === true ? (
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="faIcon heart"
                    style={{ color: "red" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="faIcon heart"
                    style={{ color: "black" }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
