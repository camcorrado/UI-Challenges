import React, { Component } from "react";
import "./Challenge19.css";

export default class Challenge19 extends Component {
  render() {
    return (
      <section className="challenge toDoList">
        <div className="assignment">
          <h2 className="challengeNumber">Challenge 19</h2>
          <h3 className="challengeDescription">To Do List</h3>
        </div>
        <div className="toDoListContainer">
          <h1>To Do</h1>
          <div className="toDoListItems">
            <div className="toDoListItem">
              <input type="checkbox" name="item1" id="item1" />

              <label htmlFor="item1">Feed the cat</label>
            </div>
            <div className="toDoListItem">
              <input type="checkbox" name="item2" id="item2" />

              <label htmlFor="item2">Walk that duck</label>
            </div>
            <div className="toDoListItem">
              <input type="checkbox" name="item4" id="item4" />

              <label htmlFor="item4">Review all 20 UI challenges</label>
            </div>
            <div className="toDoListItem">
              <input type="checkbox" name="item3" id="item3" />

              <label htmlFor="item3">
                Flip the switch in Challenge 3 again
              </label>
            </div>

            <div className="toDoListItem">
              <input type="checkbox" name="item5" id="item5" />
              <label htmlFor="item5">Schedule an interview with Cameron</label>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
