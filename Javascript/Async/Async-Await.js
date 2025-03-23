// Async Syntax
// The `async` keyword makes a function return a Promise.
async function myFunction() {
  return "Hello"; // Automatically returns a Promise with the value "Hello"
}

// Using `.then()` to consume the Promise
myFunction().then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error); // Handles any error
  }
);

// Simpler Usage
myFunction().then(function (value) {
  console.log(value);
});

// Await Syntax
// The `await` keyword can only be used inside an `async` function.
// It pauses the execution until the Promise is resolved.

async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("I love You!!"); // Resolves the Promise
  });

  console.log(await myPromise);
}

myDisplay();

// Example without Reject
async function myDisplayWithoutReject() {
  let myPromise = new Promise(function (resolve) {
    resolve("I love You!!");
  });

  console.log(await myPromise);
}

myDisplayWithoutReject();

// Waiting for a Timeout
// Using `await` with a timeout inside an async function.
async function myDisplayWithTimeout() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("I love You!!");
    }, 3000); // Resolves after 3 seconds
  });

  console.log(await myPromise);
}

myDisplayWithTimeout();

// Waiting for a File
// Example of using `await` to fetch a file.
async function getFile() {
  let myPromise = new Promise(function (resolve) {
    let req = new XMLHttpRequest();
    req.open("GET", "example.txt");
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response); // Resolves with file content
      } else {
        resolve("File not Found"); // Resolves with error message
      }
    };
    req.send();
  });

  console.log(await myPromise);
}

getFile();
