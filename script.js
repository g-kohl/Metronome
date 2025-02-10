let open = false;
let controlBPM = 0;
let controlSlider = 0;
let controlSwitch = 0;
let controlInfinity = 0;
let controlPause = 0;

let bpm
let bpm2
let bpmPoly
let bpmPoly2
let timeSig1
let timeSig2
let stopwatch
let interval
let interval2
let beep = new Audio("beep.wav");

let time
let hour
let minute
let second
let totalTime

//functions
function start() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("pause-button").style.display = "block";
    controlPause = 0;
    clearInterval(interval);
    clearInterval(interval2);
    if (controlBPM == 0) {
        if (document.getElementById("time-switch").checked == false) {
            if (controlInfinity == 0) {
                if (controlSlider == 0) {
                    bpm = document.getElementById("bpm-input").value;
                    stopwatch = document.getElementById("time-input").value;
                    bpm2 = 60000 / bpm
                    interval = setInterval(tocar, bpm2);

                    time = new Date();
                    hour = parseInt(time.getHours() * 3600)
                    minute = parseInt(time.getMinutes() * 60)
                    second = parseInt(time.getSeconds())
                    totalTime = hour + minute + second
                }
                else {
                    bpm = document.getElementById("bpm-slider").value;
                    stopwatch = document.getElementById("time-input").value;
                    bpm2 = 60000 / bpm
                    interval = setInterval(tocar, bpm2);

                    time = new Date();
                    hour = parseInt(time.getHours() * 3600)
                    minute = parseInt(time.getMinutes() * 60)
                    second = parseInt(time.getSeconds())
                    totalTime = hour + minute + second
                }
            }
            else {
                if (controlSlider == 0) {
                    bpm = document.getElementById("bpm-input").value;
                    stopwatch = document.getElementById("time-input").value;
                    bpm2 = 60000 / bpm
                    interval = setInterval(tocar, bpm2);
                }
                else {
                    bpm = document.getElementById("bpm-slider").value;
                    stopwatch = document.getElementById("time-input").value;
                    bpm2 = 60000 / bpm
                    interval = setInterval(tocar, bpm2);
                }
            }
        }
        if (document.getElementById("time-switch").checked == true) {
            if (controlSlider == 0) {
                bpm = document.getElementById("bpm-input").value;
                stopwatch = (document.getElementById("time-input").value) * 60;
                bpm2 = 60000 / bpm
                interval = setInterval(tocar, bpm2);

                time = new Date();
                hour = parseInt(time.getHours() * 3600)
                minute = parseInt(time.getMinutes() * 60)
                second = parseInt(time.getSeconds())
                totalTime = hour + minute + second
            }
            else {
                bpm = document.getElementById("bpm-slider").value;
                stopwatch = (document.getElementById("time-input").value) * 60;
                bpm2 = 60000 / bpm
                interval = setInterval(tocar, bpm2);

                time = new Date();
                hour = parseInt(time.getHours() * 3600)
                minute = parseInt(time.getMinutes() * 60)
                second = parseInt(time.getSeconds())
                totalTime = hour + minute + second
            }
        }
    }
    else {
        bpm = document.getElementById("polyrhythm-bpm-input").value;
        stopwatch = document.getElementById("time-input").value;
        bpm2 = 60000 / bpm
        timeSig1 = document.getElementById("first-rhythm-input").value;
        timeSig2 = document.getElementById("second-rhythm-input").value;
        bpmPoly = bpm2 / timeSig1;
        bpmPoly2 = bpm2 / timeSig2;
        console.log(bpmPoly + " " + bpmPoly2)
        interval = setInterval(tocar, bpmPoly);
        interval2 = setInterval(tocar, bpmPoly2);

        time = new Date();
        hour = parseInt(time.getHours() * 3600)
        minute = parseInt(time.getMinutes() * 60)
        second = parseInt(time.getSeconds())
        totalTime = hour + minute + second
    }
}

function tocar() {
    if (controlInfinity == 0) {
        let time2 = new Date();
        let hour2 = parseInt(time2.getHours() * 3600)
        let minute2 = parseInt(time2.getMinutes() * 60)
        let second2 = parseInt(time2.getSeconds())
        let totalTime2 = hour2 + minute2 + second2

        if ((totalTime2 <= (parseInt(totalTime) + parseInt(stopwatch))) && controlPause == 0) {
            beep.play();
        }
        else {
            document.getElementById("start-button").style.display = "block";
            document.getElementById("pause-button").style.display = "none";
            controlPause = 1;
        }
    }
    else {
        if (controlPause == 0) {
            beep.play();
        }
    }
}

function pause() {
    document.getElementById("start-button").style.display = "block";
    document.getElementById("pause-button").style.display = "none";
    controlPause = 1;
}

function slide() {
    document.getElementById("bpm-slider-text").innerHTML = document.getElementById("bpm-slider").value;
}

function openConfigurations() {
    if (!open) {
        document.getElementById("configurations-container").style.width = "250px";
        document.getElementById("main-container").style.marginLeft = "250px";
        setTimeout(function () {
            document.getElementById("items").style.opacity = "1"
            document.getElementById("items").style.marginLeft = "0"
        }, 250)
        open = true;
    }
}

function closeConfigurations() {
    if (open) {
        document.getElementById("configurations-container").style.width = "0px";
        document.getElementById("main-container").style.marginLeft = "0";
        document.getElementById("items").style.opacity = "0"
        document.getElementById("items").style.marginLeft = "-100px"
        open = false;
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
    controlBPM = 0;
    controlSlider = 0;
    controlSwitch = 0;
    controlInfinity = 0;
}

function slider() {
    document.getElementById("bpm-input").style.display = "none";
    document.getElementById("bpm-slider-text-container").style.display = "block";
    document.getElementById("bpm-slider-container").style.display = "block";
    if (controlSwitch == 1) {
        document.getElementById("time-input").style.display = "block";
        document.getElementById("time-switch-container").style.display = "block";
    }
    else {
        if (controlInfinity == 1) {
            document.getElementById("time-input").style.display = "none";
            document.getElementById("time-switch-container").style.display = "none";
        }
        else {
            document.getElementById("time-input").style.display = "block";
            document.getElementById("time-switch-container").style.display = "none";
        }
    }
    document.getElementById("polyrhythm-bpm-input").style.display = "none";
    document.getElementById("first-rhythm-input").style.display = "none";
    document.getElementById("second-rhythm-input").style.display = "none";
    document.getElementById("colon").style.display = "none";
    controlBPM = 0;
    controlSlider = 1;
}

function secondsOrMinutes() {
    if (controlSlider == 1) {
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
    controlBPM = 0;
    controlSwitch = 1;
    controlInfinity = 0;
}

function infinityTime() {
    if (controlSlider == 1) {
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
    controlBPM = 0;
    controlSwitch = 0;
    controlInfinity = 1;
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
    controlBPM = 1;
    controlSlider = 0;
    controlSwitch = 0;
    controlInfinity = 1;
}