// Creating Date Objects
const currentDate = new Date();
console.log("Current Date and Time:", currentDate);

const specificDate1 = new Date("2025-03-19T21:38:00"); // ISO format
console.log("Specific Date (ISO):", specificDate1);

const specificDate2 = new Date(2025, 2, 19, 21, 38); // Year, Month (0-indexed), Day, Hours, Minutes
console.log("Specific Date (Year, Month, Day):", specificDate2);

// Displaying Dates
console.log("Date as String:", currentDate.toString());
console.log("Readable Date:", currentDate.toDateString());
console.log("UTC Format:", currentDate.toUTCString());

// JavaScript Date Formats
const isoDate = new Date("2025-03-19");
console.log("ISO Format:", isoDate);

const shortDate = new Date("03/19/2025");
console.log("Short Format:", shortDate);

const longDate = new Date("March 19 2025");
console.log("Long Format:", longDate);

// Get Methods
console.log("Year:", currentDate.getFullYear());
console.log("Month:", currentDate.getMonth());
console.log("Day of Month:", currentDate.getDate());
console.log("Day of Week:", currentDate.getDay());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());

// Set Methods
const modifiedDate = new Date();

modifiedDate.setFullYear(2030);
console.log("Modified Year:", modifiedDate);

modifiedDate.setMonth(11); // December
console.log("Modified Month:", modifiedDate);

modifiedDate.setDate(25);
console.log("Modified Day of Month:", modifiedDate);

modifiedDate.setHours(15, 45, 30); // Hours: 15, Minutes: 45, Seconds: 30
console.log("Modified Time:", modifiedDate);

modifiedDate.setDate(modifiedDate.getDate() + 10); // Add 10 days
console.log("Added Days:", modifiedDate);
