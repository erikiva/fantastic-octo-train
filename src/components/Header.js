import React, { Component } from "react";
import { weekDay, date, time } from "../utils/time";

export default class Header extends Component {
  state = { currentTime: new Date() };
  tick = () => {
    this.setState({
      currentTime: new Date()
    });
  };
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          {weekDay(this.state.currentTime)} <br />
          {date(this.state.currentTime)}
        </div>
        <div className="col-md-6">
          <h1> DEPARTURES INFORMATION</h1>
        </div>
        <div className="col-md-3">
          Current time <br /> {time(this.state.currentTime)}
        </div>
      </div>
    );
  }
}
