// Updates the time
function updateClock() {
  const clockElement = document.getElementById('calendar-text');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Updates the day of the week
function updateDayOfWeek() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const yearMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const now = new Date();
  const monthName = yearMonths[now.getMonth()];
  const dayName = days[now.getDay()];
  const dateElement = document.getElementById('dayOfWeek');
  const date = String(now.getDate()).padStart(2, '0');
  const year = String(now.getFullYear());
  dateElement.textContent = `${dayName}, ${date} ${monthName} ${year}`;
}

// Updates the background based on the time of day
function updateMorningBackground() {
  const now = new Date();
  const hours = now.getHours();
  let gradient = '';

  if (hours >= 5 && hours < 8) {
    gradient = 'linear-gradient(45deg, #333333, #5A5A5A)'; // Early morning
  } else if (hours >= 8 && hours < 11) {
    gradient = 'linear-gradient(45deg, #5A5A5A, #707070)'; // Late morning
  } else {
    gradient = 'linear-gradient(45deg, #2B2B2B, #454545)'; // Default
  }

  document.querySelector('.dynamic-background').style.background = gradient;
}

// Initialization function to set up intervals and initial state
function initialize() {
  updateClock();
  setInterval(updateClock, 1000); // Update clock every second

  updateDayOfWeek();
  setInterval(updateDayOfWeek, 1000 * 60 * 60); // Update day of week every hour

  updateMorningBackground();
  setInterval(updateMorningBackground, 60000); // Update background every minute
}

// Call initialize to start the script
initialize();
