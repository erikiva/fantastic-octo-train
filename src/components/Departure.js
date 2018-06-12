import React from "react";
import { rowClass } from "../utils";

export default ({ row }) => (
  <tr class={rowClass(row.Status)}>
    <td>{row.ScheduledTime}</td>
    <td>{row.Destination}</td>
    <td>{row.Trip}</td>
    <td>{row.Track}</td>
    <td>{row.Lateness === 0 ? row.Status : `${row.Lateness} ${row.Status}`}</td>
  </tr>
);
