let shouldOpenConfigurations = false;
let isPolyrhythmMode = false;
let isSliderMode = false;
let isSwitchMode = false;
let isInfinityTimeMode = false;
let shouldPause = false;

let bpm
let firstRhythm
let secondRhythm
let timeInput
let firstRhythmInterval
let secondRhythmInterval
let beep = new Audio("beep.wav");

let startTime
let totalStartTime

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
    document.getElementById("start-button").style.display = "none";
    document.getElementById("pause-button").style.display = "block";
    shouldPause = false;
    clearInterval(firstRhythmInterval);
    clearInterval(secondRhythmInterval);
    bpm = 60000 / getBpmInput();
    startTime = new Date();
    totalStartTime = computeTotalTime(startTime);

    if (isPolyrhythmMode) {
        firstRhythm = bpm / (document.getElementById("first-rhythm-input").value);
        secondRhythm = bpm / (document.getElementById("second-rhythm-input").value);
        firstRhythmInterval = setInterval(tocar, firstRhythm);
        secondRhythmInterval = setInterval(tocar, secondRhythm);
    }
    else {
        firstRhythmInterval = setInterval(tocar, bpm);
    }
}

function tocar() {
    if (!isInfinityTimeMode) {
        let currentTime = new Date();
        let totalCurrentTime = computeTotalTime(currentTime);
        timeInput = getTimeInput();

        if ((totalCurrentTime <= (parseInt(totalStartTime) + parseInt(timeInput))) && !shouldPause) {
            beep.play();
        }
        else {
            document.getElementById("start-button").style.display = "block";
            document.getElementById("pause-button").style.display = "none";
            shouldPause = true;
        }
    }
    else if (!shouldPause) {
        beep.play();
    }
}

function pause() {
    document.getElementById("start-button").style.display = "block";
    document.getElementById("pause-button").style.display = "none";
    shouldPause = true;
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
    document.getElementById("infinity-time-button").innerHTML = "Infinite Time"
    document.getElementById("polyrhythm-button").innerHTML = "Polyrhythm"
    document.getElementById("title").innerHTML = "METRONOME"
    document.getElementById("time-input").title = "Seconds"
    document.getElementById("time-input").placeholder = "Time"
    document.getElementById("seconds-or-minutes-span").title = "Seconds/Minutes"
    document.getElementById("start-button").title = "Play"
    document.getElementById("pause-button").title = "Stop"
    document.getElementById("bpm-input").title = "Beats per Minute"
    document.getElementById("polyrhythm-bpm-input").title = "Beats per Minute"
    document.getElementById("first-rhythm-input").title = "Subdivision 1"
    document.getElementById("second-rhythm-input").title = "Subdivision 2"
    // must add 'titles'
}

function restoreDefaults() {
    document.getElementById("bpm-input").style.display = "block";
    document.getElementById("bpm-slider-text-container").style.display = "none";
    document.getElementById("bpm-slider-container").style.display = "none";
    document.getElementById("time-input").style.display = "block";
    document.getElementById("time-switch-container").style.display = "none";
    document.getElementById("polyrhythm-bpm-input").style.display = "none";
    document.getElementById("first-rhythm-input").style.display = "none";
    document.getElementById("second-rhythm-input").style.display = "none";
    document.getElementById("colon").style.display = "none";
    isPolyrhythmMode = false;
    isSliderMode = false;
    isSwitchMode = false;
    isInfinityTimeMode = false;
}

function slider() {
    document.getElementById("bpm-input").style.display = "none";
    document.getElementById("bpm-slider-text-container").style.display = "block";
    document.getElementById("bpm-slider-container").style.display = "block";

    if (isInfinityTimeMode)
        document.getElementById("time-input").style.display = "none";
    else
        document.getElementById("time-input").style.display = "block";

    if (isSwitchMode)
        document.getElementById("time-switch-container").style.display = "block";
    else
        document.getElementById("time-switch-container").style.display = "none";

    document.getElementById("polyrhythm-bpm-input").style.display = "none";
    document.getElementById("first-rhythm-input").style.display = "none";
    document.getElementById("second-rhythm-input").style.display = "none";
    document.getElementById("colon").style.display = "none";
    isPolyrhythmMode = false;
    isSliderMode = true;
}

function secondsOrMinutes() {
    if (isSliderMode) {
        document.getElementById("bpm-input").style.display = "none";
        document.getElementById("bpm-slider-text-container").style.display = "block";
        document.getElementById("bpm-slider-container").style.display = "block";
    }
    else {
        document.getElementById("bpm-input").style.display = "block";
        document.getElementById("bpm-slider-text-container").style.display = "none";
        document.getElementById("bpm-slider-container").style.display = "none";
    }

    document.getElementById("time-input").style.display = "block";
    document.getElementById("time-switch-container").style.display = "block";
    document.getElementById("polyrhythm-bpm-input").style.display = "none";
    document.getElementById("first-rhythm-input").style.display = "none";
    document.getElementById("second-rhythm-input").style.display = "none";
    document.getElementById("colon").style.display = "none";
    isPolyrhythmMode = false;
    isSwitchMode = true;
    isInfinityTimeMode = false;
}

function infinityTime() {
    if (isSliderMode) {
        document.getElementById("bpm-input").style.display = "none";
        document.getElementById("bpm-slider-text-container").style.display = "block";        
        document.getElementById("bpm-slider-container").style.display = "block";
    }
    else {
        document.getElementById("bpm-input").style.display = "block";
        document.getElementById("bpm-slider-text-container").style.display = "none";
        document.getElementById("bpm-slider-container").style.display = "none";
    }
    
    document.getElementById("time-input").style.display = "none";
    document.getElementById("time-switch-container").style.display = "none";
    document.getElementById("polyrhythm-bpm-input").style.display = "none";
    document.getElementById("first-rhythm-input").style.display = "none";
    document.getElementById("second-rhythm-input").style.display = "none";
    document.getElementById("colon").style.display = "none";
    isPolyrhythmMode = false;
    isSwitchMode = false;
    isInfinityTimeMode = true;
}

function polyrhythm() {
    document.getElementById("bpm-input").style.display = "none";
    document.getElementById("bpm-slider-text-container").style.display = "none";
    document.getElementById("bpm-slider-container").style.display = "none";
    document.getElementById("time-input").style.display = "none";
    document.getElementById("time-switch-container").style.display = "none";
    document.getElementById("polyrhythm-bpm-input").style.display = "block";
    document.getElementById("first-rhythm-input").style.display = "block";
    document.getElementById("second-rhythm-input").style.display = "block";
    document.getElementById("colon").style.display = "block";
    isPolyrhythmMode = true;
    isSliderMode = false;
    isSwitchMode = true;
    isInfinityTimeMode = true;
}