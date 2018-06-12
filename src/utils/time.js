export function timeFromTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  // Hours part from the timestamp
  return date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
}

export function time(date) {
  // Hours part from the timestamp
  return date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
}

export function formatDelay(delay) {
  const hours = Math.floor(delay / 3600);
  const minutes = Math.floor((delay % 3600) / 60);
  return `${hours > 0 ? hours + "hr" : ""} ${
    minutes > 0 ? minutes + "min" : ""
  }`;
}

export function weekDay(date) {
  return date.toLocaleString("en-US", {
    weekday: "long"
  });
}

export function date(date) {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
