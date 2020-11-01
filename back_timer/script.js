const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newTimes = document.getElementById('newTime');
newTime = "1 Jan 2021";
newTimes.innerHTML = formatTime(newTime);

function backtimer() {
    const newTimeDate = new Date(newTime);
    const currentDate = new Date();

    const second = (newTimeDate-currentDate)/1000;

    const days = Math.floor(second / 3600 / 24);
    const hours = Math.floor(second / 3600) % 24;
    const minutes = Math.floor(second / 60) % 60;
    const seconds = Math.floor(second) % 60;

    // console.log(days,hours, minutes, seconds);
    
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
// initial call
backtimer();

setInterval(backtimer, 1000)