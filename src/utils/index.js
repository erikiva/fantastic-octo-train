export function rowClass(status) {
  switch (status.toLowerCase().replace(/\s/g, "")) {
    case "allboard":
      return "table-warning";
    case "cancelled":
    case "late":
      return "table-danger";
    default:
      return "";
  }
}
