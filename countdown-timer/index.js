const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const terminateBtn = document.querySelector("#terminateBtn");
const setBtn = document.querySelector("#setBtn");

// Get and assign input parameters
setBtn.addEventListener("click", () => {
    let hrs = document.getElementById("hours").value;
    let mins = document.getElementById("munites").value;
    let secs = document.getElementById("seconds").value;
    hrs = Number(hrs);
    mins = Number(mins);
    secs = Number(secs);
    let intervalId;
    let allSet = false;
    let notRunning = true;
    if(notRunning){
        secs = pad(secs);
        mins = pad(mins);
        hrs = pad(hrs);
        timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
        allSet = true;
        document.getElementById("announcement").innerHTML = "";
    }

    startBtn.addEventListener("click", () => {
        if(notRunning && allSet){
            notRunning = false;
            const now = Date.now();
            const deadline = (formatInput(hrs, mins,secs)) + now;
            intervalId = setInterval(updateTime, 1000, deadline); //run timer update every 1 sec ie: 1000ms
        }
    });

    terminateBtn.addEventListener("click", terminate);
    
function updateTime(deadline) {
    let currentTime = Date.now();
    let t = deadline  - currentTime;
    if (t < 0) {
        terminate();
        document.getElementById("announcement").innerHTML = "Time Up!";
    }

    else {
        hrs = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60* 60));
        mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        secs = Math.floor((t % (1000 * 60)) / 1000);

        secs = pad(secs);
        mins = pad(mins);
        hrs = pad(hrs);

        timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
    }
}

function formatInput(hour, min, sec) {
    return (hour * (1000 * 60 * 60)) + (min * (1000 * 60)) + (sec * 1000)
}

function pad(unit){
    return (("0") + unit).length > 2 ? unit : "0" + unit;  // appends a zero to unit if unit.length is < 2. ie. for 10 tens it does nothing
}

function terminate() {
    notRunning = true;
    allSet = false;
    clearInterval(intervalId);
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
}  
});