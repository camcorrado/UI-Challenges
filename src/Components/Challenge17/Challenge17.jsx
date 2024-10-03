import React, { Component } from "react";
import "./Challenge17.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faBell,
  faBellSlash,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export default class Challenge17 extends Component {
  state = {
    date: null,
    frontDoor: false,
    backDoor: false,
    allLights: false,
    livingRoomLights: false,
    hallwayLights: false,
    bedroomLights: false,
    color: null,
    temp: 68,
  };

  componentDidMount() {
    const timeElapsed = Date.now();
    const toChallenge = new Date(timeElapsed);
    this.setState({ date: toChallenge.toDateString() });
  }

  setTemp = (direction) => {
    let oldTemp = this.state.temp;
    if (direction === "up" && oldTemp < 90) {
      this.setState({ temp: oldTemp + 1 });
    } else if (direction === "down" && oldTemp > 60) {
      this.setState({ temp: oldTemp - 1 });
    }
  };

  setAlarm = (door) => {
    if (this.state[door] === false) {
      this.setState({ [door]: true });
    } else {
      this.setState({ [door]: false });
    }
  };

  setLights = async (light) => {
    if (light === "allLights" && this.state[light] === false) {
      await this.setState({
        allLights: true,
        livingRoomLights: true,
        hallwayLights: true,
        bedroomLights: true,
      });
    } else if (light === "allLights" && this.state[light] === true) {
      await this.setState({
        allLights: false,
        livingRoomLights: false,
        hallwayLights: false,
        bedroomLights: false,
      });
    } else if (this.state[light] === false) {
      await this.setState({ [light]: true });
    } else if (this.state[light] === true) {
      await this.setState({ [light]: false, allLights: false });
    }
    if (
      this.state.hallwayLights === true &&
      this.state.livingRoomLights === true &&
      this.state.bedroomLights === true
    ) {
      await this.setState({ allLights: true });
    }
  };

  render() {
    const {
      date,
      temp,
      frontDoor,
      backDoor,
      allLights,
      hallwayLights,
      livingRoomLights,
      bedroomLights,
      color,
    } = this.state;
    return (
      <section className="challenge homeMonitoringDashboard">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 17</h2>
          <h3 className="challengeDescription">Home Monitoring Dashboard</h3>
        </div>
        <div className="homeDashboardContainer">
          <div className="weather">
            <div className="todaysInfo">
              <div className="date">{date}</div>
            </div>
            <div className="outsideTemp">
              <h1>Outdoors</h1>
              <p className="degrees">72°</p>
            </div>
            <div
              className="thermostat"
              style={{
                borderTop: `1px solid ${color}`,
              }}
            >
              <h1>Indoors</h1>
              <div className="insideTemp">
                <div
                  className="tempDown"
                  onClick={() => this.setTemp("down")}
                  style={{
                    color: temp === 60 ? "black" : "blue",
                  }}
                >
                  <FontAwesomeIcon icon={faCaretDown} className="faIcon" />
                </div>
                <p className="degrees">{temp}°</p>
                <div
                  className="tempUp"
                  onClick={() => this.setTemp("up")}
                  style={{
                    color: temp === 90 ? "black" : "red",
                  }}
                >
                  <FontAwesomeIcon icon={faCaretUp} className="faIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="interactiveButtons">
            <div
              className="alarms"
              style={{
                borderBottom: `1px solid ${color}`,
              }}
            >
              <div
                className="alarmOption"
                onClick={() => this.setAlarm("frontDoor")}
                style={{
                  border: `1px solid ${color}`,
                  borderRadius: "100%",
                }}
              >
                <p>Front Door</p>
                <FontAwesomeIcon
                  icon={frontDoor ? faBell : faBellSlash}
                  className="faIcon"
                  style={{ color: frontDoor ? "lime" : "red" }}
                />
              </div>
              <div
                className="alarmOption"
                onClick={() => this.setAlarm("backDoor")}
                style={{
                  border: `1px solid ${color}`,
                  borderRadius: "100%",
                }}
              >
                <p>Back Door</p>
                <FontAwesomeIcon
                  icon={backDoor ? faBell : faBellSlash}
                  className="faIcon"
                  style={{ color: backDoor ? "lime" : "red" }}
                />
              </div>
            </div>
            <div className="lights">
              <div
                className="lightOption all"
                onClick={() => this.setLights("allLights")}
                style={{
                  border: `1px solid ${color}`,
                }}
              >
                <p>All Lights</p>
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="faIcon"
                  style={{ color: allLights ? "yellow" : color }}
                />
              </div>

              <div
                className="lightOption hallway"
                onClick={() => this.setLights("hallwayLights")}
                style={{
                  border: `1px solid ${color}`,
                }}
              >
                <p>Hallway</p>
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="faIcon"
                  style={{ color: hallwayLights ? "yellow" : color }}
                />
              </div>
              <div
                className="lightOption livingRoom"
                onClick={() => this.setLights("livingRoomLights")}
                style={{
                  border: `1px solid ${color}`,
                }}
              >
                <p>Living Room</p>
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="faIcon"
                  style={{ color: livingRoomLights ? "yellow" : color }}
                />
              </div>
              <div
                className="lightOption bedroom"
                onClick={() => this.setLights("bedroomLights")}
                style={{
                  border: `1px solid ${color}`,
                }}
              >
                <p>Bedroom</p>
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="faIcon"
                  style={{ color: bedroomLights ? "yellow" : color }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
