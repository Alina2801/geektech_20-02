function timer() {
    seconds.textContent = (seconds.textContent - 1).toString().padStart(2, "0");
    if (seconds.textContent === 60);
}

let intervalId
    seconds = document.getElementById("seconds"),
    start = document.getElementById("start_click"),
    pause = document.getElementById("pause_click"),
    reset = document.getElementById("reset_click");

start.addEventListener("click", start_click);
pause.addEventListener("click", pause_click)
reset.addEventListener("click", reset_click);
pause.disabled = true;
reset.disabled = true;

function start_click() {
    intervalId = setInterval(timer, 1000);
    start.disabled = true;
    pause.disabled = false;
    reset.disabled = false;
}
function pause_click() {
    clearInterval(intervalId);
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = false;
    document.getElementById("start_click").classList.remove("disabled");
}
function reset_click() {
    clearInterval(intervalId);
    seconds.textContent = "0";
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = true;
}





















