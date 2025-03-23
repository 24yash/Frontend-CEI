// This example demonstrates how AJAX can be used to update a webpage without reloading it.
function loadDoc() {
  const xhttp = new XMLHttpRequest(); // Create an XMLHttpRequest object
  xhttp.onload = function () {
    document.getElementById("demo").innerHTML = this.responseText;
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

// HTML structure for the example
document.body.innerHTML = `
    <div id="demo">
      <h2>Let AJAX change this text</h2>
      <button type="button" onclick="loadDoc()">Change Content</button>
    </div>
  `;

// AJAX - Sending Requests (GET and POST)
// Example of a GET request
function sendGetRequest() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    console.log(this.responseText); // Log the server response
  };
  xhttp.open("GET", "demo_get.asp?t=" + Math.random(), true); // Add a unique ID to avoid caching
  xhttp.send();
}

// Example of a POST request
function sendPostRequest() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    console.log(this.responseText); // Log the server response
  };
  xhttp.open("POST", "demo_post.asp", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // Set header for POST data
  xhttp.send("fname=John&lname=Doe"); // Send data in the body of the request
}

// AJAX - Server Response Properties

// Example using responseText property
function useResponseText() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("demo").innerHTML = this.responseText; // Display response as text
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

// Example using responseXML property to parse XML data
function useResponseXML() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const xmlDoc = this.responseXML; // Parse XML response
    const artists = xmlDoc.getElementsByTagName("ARTIST");
    let txt = "";
    for (let i = 0; i < artists.length; i++) {
      txt += artists[i].childNodes[0].nodeValue + "<br>"; // Extract artist names from XML
    }
    document.getElementById("demo").innerHTML = txt;
  };
  xhttp.open("GET", "cd_catalog.xml", true);
  xhttp.send();
}

// AJAX - Server Response Methods

// Get all response headers
function getAllResponseHeadersExample() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    console.log(this.getAllResponseHeaders()); // Log all headers from the server response
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

// Get specific response header (e.g., Last-Modified)
function getResponseHeaderExample() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    console.log(this.getResponseHeader("Last-Modified")); // Log specific header value
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

// Example usage of functions:
loadDoc(); // Load initial content via AJAX.
sendGetRequest(); // Send a GET request.
sendPostRequest(); // Send a POST request.
useResponseText(); // Use responseText property.
useResponseXML(); // Use responseXML property.
getAllResponseHeadersExample(); // Retrieve all headers.
getResponseHeaderExample(); // Retrieve specific header.
