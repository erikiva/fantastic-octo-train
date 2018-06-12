import React from "react";
import TableHeaders from "./TableHeaders";
import Departure from "./Departure";
export default ({ station, departuresTable }) => (
  <table className="table">
    <caption>Next Departures from {station}</caption>
    <TableHeaders />
    <tbody>
      {departuresTable.map(row => (
        <Departure key={`${row.Trip}${row.ScheduledTime}`} row={row} />
      ))}
    </tbody>
  </table>
);
