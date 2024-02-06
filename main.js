let timer = document.querySelector(".timer");
let toggleBtn = document.querySelector(".toggle");
let resetBtn = document.querySelector(".reset");
let lapBtn = document.querySelector(".lap");
let lapBox = document.querySelector(".lapBox");

let watch = new stopwatch(timer);

function start() {
    toggleBtn.textContent = "Stop";
    toggleBtn.classList.toggle("on");
    watch.start();
}

function stop() {
    toggleBtn.textContent = "Start";
    toggleBtn.classList.toggle("on");
    watch.stop();
}

function stopWhenOn() {
    toggleBtn.textContent = "Start";
    if (toggleBtn.classList.contains("on")) {
        toggleBtn.classList.remove("on");
        watch.stop();
    }
    watch.reset();
}

toggleBtn.addEventListener("click", function () {
    watch.isOn ? stop() : start();
});

lapBtn.addEventListener("click", function () {
    watch.isOn ? watch.lapOn() : watch.lapOff();
});

resetBtn.addEventListener("click", function () {
    stopWhenOn();
});

resetBtn.addEventListener("dblclick", function () {
    watch.lapOff();
});
