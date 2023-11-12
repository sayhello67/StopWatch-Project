const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const resetBtn = document.querySelector(".resetBtn");
let timerText = document.querySelector(".timerText");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;
stopBtn.disabled = true;

timerText.innerHTML = "0" + minutes + ":" + "0" + seconds + ":" + milliseconds + "0";

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    intervalId = setInterval(() => {
        if (milliseconds >= 0 && milliseconds < 1000) {
            milliseconds += 4;
            timerText.innerHTML = "0" + minutes + ":" + "0" + seconds + ":" + milliseconds
        }
        if (milliseconds >= 1000) {
            seconds += 1;
            milliseconds = 0;
            milliseconds += 4;
            timerText.innerHTML = "0" + minutes + ":" + "0" + seconds + ":" + milliseconds
        }
        if (seconds >= 10) {
            timerText.innerHTML = "0" + minutes + ":" + seconds + ":" + milliseconds
        }
        if (seconds >= 60) {
            minutes += 1;
            seconds = 0;
            timerText.innerHTML = "0" + minutes + ":" + seconds + ":" + milliseconds
        };
    }, 1);
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timerText.innerHTML = "0" + minutes + ":" + "0" + seconds + ":" + milliseconds + "0";
});