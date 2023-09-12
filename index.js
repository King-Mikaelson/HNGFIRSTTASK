const day = document.getElementById("day")
const time = document.getElementById("time")

// Get the current date
const currentDate = new Date();

const currentUTCTimeInMilliseconds = Date.now();

// Array of day names
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get the day of the week (0 for Sunday, 1 for Monday, etc.)
const dayOfWeek = currentDate.getDay();

// Get the name of the current day of the week
const currentDayOfWeek = dayNames[dayOfWeek];

time.textContent= currentUTCTimeInMilliseconds
day.textContent =  currentDayOfWeek


