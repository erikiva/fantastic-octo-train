import React, { Component } from "react";
import csvtojson from "./utils/csvtojson";
import DeparturesTable from "./components/DeparturesTable";
import Header from "./components/Header";

export default class App extends Component {
  state = {
    departureTable: { north: [], south: [] },
    time: new Date()
  };

  updateDepartures = data => {
    this.setState({
      departureTable: data
    });
  };

  fetchData = () => {
    fetch(
      "https://crossorigin.me/https://developer.mbta.com/lib/gtrtfs/Departures.csv",
      {
        headers: {
          //Origin: "*"
        }
        //credentials: "omit", // include, same-origin, *omit
        //mode: "no-cors" // no-cors, cors, *same-origin
      }
    )
      .then(response => response.text())
      .then(data => {
        //console.log("returned", data); // [{"Hello": "world"}, …]
        let departures = csvtojson(data);
        this.updateDepartures(departures);
      })
      .catch();
  };

  componentDidMount() {
    this.fetchData();
    this.timerID = setInterval(() => {
      this.fetchData();
    }, 100000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.dataID);
  }
  render() {
    return (
      <div class="container">
        <Header />
        <DeparturesTable
          station="North Station"
          departuresTable={this.state.departureTable.north}
        />
        <DeparturesTable
          station="South Station"
          departuresTable={this.state.departureTable.south}
        />
      </div>
    );
  }
}
