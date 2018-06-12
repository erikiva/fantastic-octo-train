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
      <div class="row">
        <div class="col-md-3">
          {weekDay(this.state.currentTime)} <br />
          {date(this.state.currentTime)}
        </div>
        <div class="col-md-6">
          <h1> DEPARTURES INFORMATION</h1>
        </div>
        <div class="col-md-3">
          Current time <br /> {time(this.state.currentTime)}
        </div>
      </div>
    );
  }
}
