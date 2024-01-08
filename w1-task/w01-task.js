let userName = "Igberry";
userName = "Igberry"; // Valid, can be reassigned

// Create a new Date object
const currentDate = new Date();

// Get individual components of the date and time
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Display the current date and time
console.log(`Current Date and Time: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);