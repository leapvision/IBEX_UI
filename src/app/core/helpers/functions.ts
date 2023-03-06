export function convertTime(isoTime) {
  let hours: any = parseInt(isoTime.substring(0, 2), 10);
  console.log(hours);
  let minutes = isoTime.substring(3, 5);
  let ampm = "am";

  if (hours == 12) {
    ampm = "pm";
  } else if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
    ampm = "pm";
  }

  if (hours.toString().length == 1) {
    hours = `0${hours}`;
  }

  return hours + ":" + minutes + "" + ampm;
}
