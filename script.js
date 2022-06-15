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

function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("pause").style.display = "block";
    controlPause = 0;
    clearInterval(interval);
    clearInterval(interval2);
    if (controlBPM == 0) {
        if (document.getElementById("switch").checked == false) {
            if (controlInfinity == 0) {
                if (controlSlider == 0) {
                    console.log("if1")
                    bpm = document.getElementById("bpm").value;
                    stopwatch = document.getElementById("timer").value;
                    bpm2 = 60000 / bpm
                    interval = setInterval(tocar, bpm2);

                    time = new Date();
                    hour = parseInt(time.getHours() * 3600)
                    minute = parseInt(time.getMinutes() * 60)
                    second = parseInt(time.getSeconds())
                    totalTime = hour + minute + second
                }
                else {
                    console.log("if2")
                    bpm = document.getElementById("slide").value;
                    stopwatch = document.getElementById("timer").value;
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
                    console.log("if3")
                    bpm = document.getElementById("bpm").value;
                    stopwatch = document.getElementById("timer").value;
                    bpm2 = 60000 / bpm
                    interval = setInterval(tocar, bpm2);
                }
                else {
                    console.log("if4")
                    bpm = document.getElementById("slide").value;
                    stopwatch = document.getElementById("timer").value;
                    bpm2 = 60000 / bpm
                    interval = setInterval(tocar, bpm2);
                }
            }
        }
        if (document.getElementById("switch").checked == true) {
            if (controlSlider == 0) {
                console.log("if5")
                bpm = document.getElementById("bpm").value;
                stopwatch = (document.getElementById("timer").value) * 60;
                bpm2 = 60000 / bpm
                interval = setInterval(tocar, bpm2);

                time = new Date();
                hour = parseInt(time.getHours() * 3600)
                minute = parseInt(time.getMinutes() * 60)
                second = parseInt(time.getSeconds())
                totalTime = hour + minute + second
            }
            else {
                console.log("if6")
                bpm = document.getElementById("slide").value;
                stopwatch = (document.getElementById("timer").value) * 60;
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
        console.log("if7")
        bpm = document.getElementById("bpmPoly").value;
        stopwatch = document.getElementById("timer").value;
        bpm2 = 60000 / bpm
        timeSig1 = document.getElementById("timeSig1").value;
        timeSig2 = document.getElementById("timeSig2").value;
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
    }
    else {
        if (controlPause == 0) {
            beep.play();
        }
    }
}

function pause() {
    document.getElementById("start").style.display = "block";
    document.getElementById("pause").style.display = "none";
    controlPause = 1;
}

function slide() {
    document.getElementById("bpm2").innerHTML = document.getElementById("slide").value;
}

function openConfig() {
    if (!open) {
        document.getElementById("options2").style.width = "250px";
        document.getElementById("maxContainer").style.marginLeft = "250px";
        setTimeout(function () {
            document.getElementById("itens").style.opacity = "1"
            document.getElementById("itens").style.marginLeft = "0"
        }, 250)
        open = true;
    }
}

function closeConfig() {
    if (open) {
        document.getElementById("options2").style.width = "0px";
        document.getElementById("maxContainer").style.marginLeft = "0";
        document.getElementById("itens").style.opacity = "0"
        document.getElementById("itens").style.marginLeft = "-100px"
        open = false;
    }
}

function restore() {
    document.getElementById("bpm").style.display = "block";
    document.getElementById("extra2").style.display = "none";
    document.getElementById("extra").style.display = "none";
    document.getElementById("timer").style.display = "block";
    document.getElementById("extra1").style.display = "none";
    document.getElementById("bpmPoly").style.display = "none";
    document.getElementById("timeSig1").style.display = "none";
    document.getElementById("timeSig2").style.display = "none";
    document.getElementById("doispontos").style.display = "none";
    controlBPM = 0;
    controlSlider = 0;
    controlSwitch = 0;
    controlInfinity = 0;
}

function openSlider() {
    document.getElementById("bpm").style.display = "none";
    document.getElementById("extra2").style.display = "block";
    document.getElementById("extra").style.display = "block";
    if (controlSwitch == 1) {
        document.getElementById("timer").style.display = "block";
        document.getElementById("extra1").style.display = "block";
    }
    else {
        if (controlInfinity == 1) {
            document.getElementById("timer").style.display = "none";
            document.getElementById("extra1").style.display = "none";
        }
        else {
            document.getElementById("timer").style.display = "block";
            document.getElementById("extra1").style.display = "none";
        }
    }
    document.getElementById("bpmPoly").style.display = "none";
    document.getElementById("timeSig1").style.display = "none";
    document.getElementById("timeSig2").style.display = "none";
    document.getElementById("doispontos").style.display = "none";
    controlBPM = 0;
    controlSlider = 1;
}

function secondminute() {
    if (controlSlider == 1) {
        document.getElementById("bpm").style.display = "none";
        document.getElementById("extra2").style.display = "block";
        document.getElementById("extra").style.display = "block";
    }
    else {
        document.getElementById("bpm").style.display = "block";
        document.getElementById("extra2").style.display = "none";
        document.getElementById("extra").style.display = "none";
    }
    document.getElementById("timer").style.display = "block";
    document.getElementById("extra1").style.display = "block";
    document.getElementById("bpmPoly").style.display = "none";
    document.getElementById("timeSig1").style.display = "none";
    document.getElementById("timeSig2").style.display = "none";
    document.getElementById("doispontos").style.display = "none";
    controlBPM = 0;
    controlSwitch = 1;
    controlInfinity = 0;
}

function infinity() {
    if (controlSlider == 1) {
        document.getElementById("bpm").style.display = "none";
        document.getElementById("extra2").style.display = "block";        
        document.getElementById("extra").style.display = "block";
    }
    else {
        document.getElementById("bpm").style.display = "block";
        document.getElementById("extra2").style.display = "none";
        document.getElementById("extra").style.display = "none";
    }
    document.getElementById("timer").style.display = "none";
    document.getElementById("extra1").style.display = "none";
    document.getElementById("bpmPoly").style.display = "none";
    document.getElementById("timeSig1").style.display = "none";
    document.getElementById("timeSig2").style.display = "none";
    document.getElementById("doispontos").style.display = "none";
    controlBPM = 0;
    controlSwitch = 0;
    controlInfinity = 1;
}

function openPolyrhythm() {
    document.getElementById("bpm").style.display = "none";
    document.getElementById("extra2").style.display = "none";
    document.getElementById("extra").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("extra1").style.display = "none";
    document.getElementById("bpmPoly").style.display = "block";
    document.getElementById("timeSig1").style.display = "block";
    document.getElementById("timeSig2").style.display = "block";
    document.getElementById("doispontos").style.display = "block";
    controlBPM = 1;
    controlSlider = 0;
    controlSwitch = 0;
    controlInfinity = 1;
}