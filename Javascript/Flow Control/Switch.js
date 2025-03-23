// 1: Basic switch statement
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log("Today is:", day);

// 2: Using default keyword
let trafficLight = "blue";
let message;
switch (trafficLight) {
  case "red":
    message = "Stop immediately.";
    break;
  case "yellow":
    message = "Prepare to stop.";
    break;
  case "green":
    message = "Go.";
    break;
  default:
    message = "Invalid color.";
}
console.log(message);

// 3: Grouping cases with shared code
let today = new Date().getDay();
let text;
switch (today) {
  case 0: // Sunday
  case 6: // Saturday
    text = "It's Weekend!";
    break;
  case 1: // Monday
  case 2: // Tuesday
  case 3: // Wednesday
  case 4: // Thursday
  case 5: // Friday
    text = "It's a Weekday!";
    break;
}
console.log(text);

// 4: Strict comparison in switch cases
let x = "0";
switch (x) {
  case 0:
    console.log("Number zero");
    break;
  case "0":
    console.log("String zero");
    break;
}
console.log("Switch distinguishes between types.");

// 5: Skipping breaks for fall-through behavior
let score = "B";
switch (score) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
  case "C":
    console.log("Fair");
    break;
}
