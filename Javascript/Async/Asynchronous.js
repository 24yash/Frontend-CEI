function displayMessage() {
  console.log("I love You!!"); // This message will be displayed after 3 seconds
}

// Call `setTimeout` to execute `displayMessage` after 3000ms (3 seconds)
setTimeout(displayMessage, 3000);

// Passing a Function Directly
setTimeout(function () {
  console.log("I love You!!!"); // This message will also be displayed after 3 seconds
}, 3000);

// Waiting for Intervals
// Using `setInterval` to repeatedly execute a function at specified intervals.

function showCurrentTime() {
  const now = new Date();
  console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()); // Display the current time every second
}

// Call `setInterval` to execute `showCurrentTime` every 1000ms (1 second)
setInterval(showCurrentTime, 1000);

// Callback Functions in Asynchronous Code
// Callbacks are often used in asynchronous operations to control execution order.

function asyncOperation(callback) {
  console.log("Starting async operation...");
  setTimeout(() => {
    console.log("Async operation complete!");
    callback(); // Execute the callback after the operation finishes
  }, 2000);
}

function afterAsync() {
  console.log("This runs after the async operation.");
}

// Start the async operation and pass `afterAsync` as the callback
asyncOperation(afterAsync);
