// Creating a Promise
let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  if (x === 0) {
    myResolve("Success: x is 0");
  } else {
    myReject("Error: x is not 0");
  }
});

// Consuming the Promise using `then`
myPromise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);

// Promise States
let anotherPromise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Operation Successful!"), 2000);
});

anotherPromise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);

// Using Promises with setTimeout
let timeoutPromise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("I love JavaScript!"), 3000);
});

timeoutPromise.then(function (value) {
  console.log(value);
});

// Using Promises with XMLHttpRequest
function fetchFile() {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", "example.txt");
    req.onload = function () {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        reject("Error: File not found");
      }
    };
    req.send();
  });
}

fetchFile()
  .then(function (content) {
    console.log("File Content:", content);
  })
  .catch(function (error) {
    console.log(error);
  });

// Chaining Promises
let chainPromise = new Promise(function (resolve, reject) {
  resolve(10);
});

chainPromise
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 3;
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

// Error Handling in Promises
let errorHandlingPromise = new Promise(function (resolve, reject) {
  let success = false;

  if (success) {
    resolve("Operation succeeded");
  } else {
    reject("Operation failed");
  }
});

errorHandlingPromise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });

// Final Example - Combining Promises
let promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "One")
);
let promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Two")
);
let promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 3000, "Three")
);

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
