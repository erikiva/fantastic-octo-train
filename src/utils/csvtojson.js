import { timeFromTimestamp, formatDelay } from "./time";

function formatData(field, data) {
  const convert = {
    TimeStamp: epoch => timeFromTimestamp(epoch),
    Origin: station => station,
    Trip: trip => trip,
    Destination: destination => destination,
    ScheduledTime: epoch => timeFromTimestamp(epoch),
    Lateness: delay => (delay > 0 ? formatDelay(delay) : ""),
    Track: track => (track ? track : "TBD"),
    Status: status => status
  };
  return convert[field](data);
}

export default data => {
  let lines = data.split("\r\n");
  if (lines[lines.length - 1] === "") {
    lines.pop();
  }
  let [headers, ...departures] = lines;
  headers = headers.split(",");
  let result = { south: [], north: [] };
  for (let i = 0; i < departures.length; i++) {
    let departure = departures[i]
      .replace(/"+/g, "")
      .split(",")
      .reduce((row, field, index) => {
        row[headers[index]] = formatData(headers[index], field);
        return row;
      }, {});
    if (departure.Origin === "North Station") {
      result.north.push(departure);
    } else {
      result.south.push(departure);
    }
  }

  return result;
};
