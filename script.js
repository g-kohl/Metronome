let shouldOpenConfigurations = false;
let isPolyrhythmMode = false;
let isSliderMode = false;
let isSwitchMode = false;
let isInfiniteTimeMode = false;
let shouldPause = false;

let firstRhythmInterval
let secondRhythmInterval
let beep = new Audio("beep.wav");

function getBpmInput() {
    if (isPolyrhythmMode)
        return document.getElementById("polyrhythm-bpm-input").value;
    if (isSliderMode)
        return document.getElementById("bpm-slider").value;
    
    return document.getElementById("bpm-input").value;
}

function getTimeInput() {
    if (document.getElementById("time-switch").checked == true)
        return (document.getElementById("time-input").value) * 60;
    
    return document.getElementById("time-input").value;
}

function computeTotalTime(time) {
    return parseInt(time.getHours() * 3600) + parseInt(time.getMinutes() * 60) + parseInt(time.getSeconds());
}

function start() {
    pause(false);
    clearInterval(firstRhythmInterval);
    clearInterval(secondRhythmInterval);
    let bpm = 60000 / getBpmInput();
    let startTime = computeTotalTime(new Date());

    if (isPolyrhythmMode) {
        let firstRhythm = bpm / (document.getElementById("first-rhythm-input").value);
        let secondRhythm = bpm / (document.getElementById("second-rhythm-input").value);
        firstRhythmInterval = setInterval(() => tocar(startTime), firstRhythm);
        secondRhythmInterval = setInterval(() => tocar(startTime), secondRhythm);
    }
    else
        firstRhythmInterval = setInterval(() => tocar(startTime), bpm);
}

function tocar(startTime) {
    if (!isInfiniteTimeMode) {
        let currentTime = computeTotalTime(new Date());

        if ((currentTime <= (parseInt(startTime) + parseInt(getTimeInput()))) && !shouldPause)
            beep.play();
        else
            pause(true);
    }
    else if (!shouldPause)
        beep.play();
}

function pause(isPausing) {
    if (isPausing){
        document.getElementById("start-button").style.display = "block";
        document.getElementById("pause-button").style.display = "none";
        shouldPause = true;
    }
    else {
        document.getElementById("start-button").style.display = "none";
        document.getElementById("pause-button").style.display = "block";
        shouldPause = false;
    }
}

function slide() {
    document.getElementById("bpm-slider-text").innerHTML = document.getElementById("bpm-slider").value;
}

function openConfigurations() {
    if (!shouldOpenConfigurations) {
        document.getElementById("configurations-container").style.width = "250px";
        document.getElementById("main-container").style.marginLeft = "250px";
        setTimeout(function () {
            document.getElementById("items").style.opacity = "1"
            document.getElementById("items").style.marginLeft = "0"
        }, 250)
        shouldOpenConfigurations = true;
    }
}

function closeConfigurations() {
    if (shouldOpenConfigurations) {
        document.getElementById("configurations-container").style.width = "0px";
        document.getElementById("main-container").style.marginLeft = "0";
        document.getElementById("items").style.opacity = "0"
        document.getElementById("items").style.marginLeft = "-100px"
        shouldOpenConfigurations = false;
    }
}

function english() {
    document.title = "Online Metronome"
    document.getElementById("restore-defaults-button").innerHTML = "Restore Configurations"
    document.getElementById("seconds-or-minutes-button").innerHTML = "Seconds or Minutes"
    document.getElementById("infinite-time-button").innerHTML = "Infinite Time"
    document.getElementById("polyrhythm-button").innerHTML = "Polyrhythm"
    document.getElementById("title").innerHTML = "METRONOME"
    document.getElementById("time-input").placeholder = "Time"
    document.getElementById("seconds-or-minutes-span").title = "Seconds/Minutes"
    document.getElementById("start-button").title = "Play"
    document.getElementById("pause-button").title = "Stop"
    document.getElementById("bpm-input").title = "Beats per Minute"
    document.getElementById("polyrhythm-bpm-input").title = "Beats per Minute"
    document.getElementById("first-rhythm-input").title = "Subdivision 1"
    document.getElementById("second-rhythm-input").title = "Subdivision 2"

    if (document.getElementById("time-switch").checked == true)
        document.getElementById("time-input").title = "Minutes";
    else
        document.getElementById("time-input").title = "Seconds";
}

function displayPolyrhythmMode(display) {
    document.getElementById("polyrhythm-bpm-input").style.display = display;
    document.getElementById("first-rhythm-input").style.display = display;
    document.getElementById("second-rhythm-input").style.display = display;
    document.getElementById("colon").style.display = display;
}

function displaySliderMode(display) {
    document.getElementById("bpm-slider-text-container").style.display = display;
    document.getElementById("bpm-slider-container").style.display = display;     
}

function restoreDefaults() {
    document.getElementById("bpm-input").style.display = "block";
    displaySliderMode("none");
    document.getElementById("time-input").style.display = "block";
    document.getElementById("time-switch-container").style.display = "none";
    displayPolyrhythmMode("none");
    isPolyrhythmMode = false;
    isSliderMode = false;
    isSwitchMode = false;
    isInfiniteTimeMode = false;
}

function slider() {
    document.getElementById("bpm-input").style.display = "none";
    displaySliderMode("block");

    if (isInfiniteTimeMode)
        document.getElementById("time-input").style.display = "none";
    else
        document.getElementById("time-input").style.display = "block";

    if (isSwitchMode)
        document.getElementById("time-switch-container").style.display = "block";
    else
        document.getElementById("time-switch-container").style.display = "none";

    displayPolyrhythmMode("none");
    isPolyrhythmMode = false;
    isSliderMode = true;
}

function secondsOrMinutes() {
    if (isSliderMode) {
        document.getElementById("bpm-input").style.display = "none";
        displaySliderMode("block");
    }
    else {
        document.getElementById("bpm-input").style.display = "block";
        displaySliderMode("none");
    }

    document.getElementById("time-input").style.display = "block";
    document.getElementById("time-switch-container").style.display = "block";
    displayPolyrhythmMode("none");
    isPolyrhythmMode = false;
    isSwitchMode = true;
    isInfiniteTimeMode = false;
}

function changeTimeInputTitle() {
    if (document.getElementById("time-input").title == "Seconds")
        document.getElementById("time-input").title = "Minutes";
    else if (document.getElementById("time-input").title == "Minutes")
        document.getElementById("time-input").title = "Seconds";
    else if (document.getElementById("time-input").title == "Segundos")
        document.getElementById("time-input").title = "Minutos";
    else if (document.getElementById("time-input").title == "Minutos")
        document.getElementById("time-input").title = "Segundos";
}

function infiniteTime() {
    if (isSliderMode) {
        document.getElementById("bpm-input").style.display = "none";
        displaySliderMode("block");
    }
    else {
        document.getElementById("bpm-input").style.display = "block";
        displaySliderMode("none");
    }
    
    document.getElementById("time-input").style.display = "none";
    document.getElementById("time-switch-container").style.display = "none";
    displayPolyrhythmMode("none");
    isPolyrhythmMode = false;
    isSwitchMode = false;
    isInfiniteTimeMode = true;
}

function polyrhythm() {
    document.getElementById("bpm-input").style.display = "none";
    displaySliderMode("none");
    document.getElementById("time-input").style.display = "none";
    document.getElementById("time-switch-container").style.display = "none";
    displayPolyrhythmMode("block");
    isPolyrhythmMode = true;
    isSliderMode = false;
    isSwitchMode = true;
    isInfiniteTimeMode = true;
}