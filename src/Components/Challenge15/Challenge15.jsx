import React, { Component } from "react";
import {
  faPlaneDeparture,
  faPlaneArrival,
  faDoorOpen,
  faMapMarkerAlt,
  faChair,
  faMoneyBillWave,
  faBaby,
  faDog,
  faSuitcaseRolling,
  faFaceSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Challenge15.css";
import HEADSHOT from "../Challenge1/HEADSHOT.png";

export default class Challenge15 extends Component {
  render() {
    return (
      <section className="challenge boardingPass">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 15</h2>
          <h3 className="challengeDescription">Boarding Pass</h3>
        </div>
        <div className="boardingPassContainer">
          <div className="boardingPassPassenger">
            <div className="boardingPassPassengerPic">
              <img src={HEADSHOT} alt="boarding pass picture" />
            </div>
            <div className="boardingPassPassengerInfo">
              <h1>Cameron Corrado</h1>
              <p>New York, NY</p>
            </div>
          </div>
          <div className="boardingPassTripInfo">
            <div className="boardingPassTripDeparture">
              <div className="travelTypeIcon">
                <FontAwesomeIcon icon={faPlaneDeparture} className="faIcon" />
              </div>
              <div className="travelDate">
                <p>10/28/2024</p>
              </div>
              <div className="travelTime">
                <p>10:30AM</p>
              </div>
              <div className="airport">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="faIcon" />
                <p>JFK</p>
              </div>
              <div className="gate">
                <FontAwesomeIcon icon={faDoorOpen} className="faIcon" />
                <p>C1</p>
              </div>
              <div className="seat">
                <FontAwesomeIcon icon={faChair} className="faIcon" />
                <p>16D</p>
              </div>
            </div>
            <div className="boardingPassTripArrival">
              <div className="travelTypeIcon">
                <FontAwesomeIcon icon={faPlaneArrival} className="faIcon" />
              </div>
              <div className="travelDate">10/28/2024</div>
              <div className="travelTime">3:45PM</div>
              <div className="airport">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="faIcon" />
                <p>MSP</p>
              </div>
              <div className="gate">
                <FontAwesomeIcon icon={faDoorOpen} className="faIcon" />
                <p>F12</p>
              </div>
              <div className="smile">
                <FontAwesomeIcon icon={faFaceSmileBeam} className="faIcon" />
              </div>
            </div>
            <div className="travelDetails">
              <div className="travelDetailsIcon class">
                <FontAwesomeIcon icon={faMoneyBillWave} className="faIcon" />
              </div>
              <div className="travelDetailsIcon luggage">
                <FontAwesomeIcon icon={faSuitcaseRolling} className="faIcon" />
              </div>
              <div className="travelDetailsIcon children">
                <FontAwesomeIcon icon={faBaby} className="faIcon" />
              </div>
              <div className="travelDetailsIcon pets">
                <FontAwesomeIcon icon={faDog} className="faIcon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
