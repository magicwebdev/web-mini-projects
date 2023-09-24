let sectionHours = document.getElementById('hours');
let sectionMinutes = document.getElementById('minutes');
let sectionSeconds = document.getElementById('seconds');
let sectionAmPm = document.getElementById('ampm');
let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');

setInterval(() => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    // convert 24hours clock to 12hours clock
    if (hours > 12) {
        hours = hours - 12;
    }

    sectionHours.innerHTML = hours < 10 ? `0${hours}` : hours;
    sectionMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    sectionSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    sectionAmPm.innerHTML = hours >= 12 ? 'PM' : 'AM';
});
