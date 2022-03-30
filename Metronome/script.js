            var open = false;
            var controlSlider = 0;
            var controlSwitch = 0;
            var controlInfinity = 0;
            var controlPause = 0;

            var bpm
            var bpm2
            var stopwatch
            var interval
            var beep = new Audio("beep.wav");

            var time
            var hour
            var minute
            var second
            var totalTime
            function start()
            {
                document.getElementById("start").style.display="none";
                document.getElementById("pause").style.display="block";
                controlPause = 0;
                clearInterval(interval);
                if(document.getElementById("switch").checked==false)
                {
                    if(controlInfinity == 0)
                    {
                        if(controlSlider == 0)
                        {
                            bpm = document.getElementById("bpm").value;
                            stopwatch = document.getElementById("timer").value;
                            bpm2 = 60000/bpm
                            interval = setInterval(tocar, bpm2);

                            time = new Date();
                            hour = parseInt(time.getHours() * 3600)
                            minute = parseInt(time.getMinutes() * 60)
                            second = parseInt(time.getSeconds())
                            totalTime = hour + minute + second
                        }
                        else
                        {
                            bpm = document.getElementById("slide").value;
                            stopwatch = document.getElementById("timer").value;
                            bpm2 = 60000/bpm
                            interval = setInterval(tocar, bpm2);

                            time = new Date();
                            hour = parseInt(time.getHours() * 3600)
                            minute = parseInt(time.getMinutes() * 60)
                            second = parseInt(time.getSeconds())
                            totalTime = hour + minute + second
                        }
                    }
                    else
                    {
                        if(controlSlider == 0)
                        {
                            bpm = document.getElementById("bpm").value;
                            stopwatch = document.getElementById("timer").value;
                            bpm2 = 60000/bpm
                            interval = setInterval(tocar, bpm2);
                        }
                        else
                        {
                            bpm = document.getElementById("slide").value;
                            stopwatch = document.getElementById("timer").value;
                            bpm2 = 60000/bpm
                            interval = setInterval(tocar, bpm2);
                        }
                    }
                }
                else
                {
                    if(controlSlider == 0)
                    {
                        bpm = document.getElementById("bpm").value;
                        stopwatch = (document.getElementById("timer").value) * 60;
                        bpm2 = 60000/bpm
                        interval = setInterval(tocar, bpm2);

                        time = new Date();
                        hour = parseInt(time.getHours() * 3600)
                        minute = parseInt(time.getMinutes() * 60)
                        second = parseInt(time.getSeconds())
                        totalTime = hour + minute + second
                    }
                    else
                    {
                        bpm = document.getElementById("slide").value;
                        stopwatch = (document.getElementById("timer").value) * 60;
                        bpm2 = 60000/bpm
                        interval = setInterval(tocar, bpm2);

                        time = new Date();
                        hour = parseInt(time.getHours() * 3600)
                        minute = parseInt(time.getMinutes() * 60)
                        second = parseInt(time.getSeconds())
                        totalTime = hour + minute + second
                    }
                }
            }

            function tocar()
            {
                if(controlInfinity == 0)
                {
                    var time2 = new Date();
                    var hour2 = parseInt(time2.getHours() * 3600)
                    var minute2 = parseInt(time2.getMinutes() * 60)
                    var second2 = parseInt(time2.getSeconds())
                    var totalTime2 = hour2 + minute2 + second2

                    console.log(parseInt(totalTime) + parseInt(stopwatch))
                    console.log(totalTime2)
                    if((totalTime2 <= (parseInt(totalTime) + parseInt(stopwatch))) && controlPause == 0)
                    {
                        beep.play();
                    }
                }
                else
                {
                    if(controlPause == 0)
                    {
                        beep.play();
                    }
                }
            }

            function pause()
            {
                document.getElementById("start").style.display="block";
                document.getElementById("pause").style.display="none";
                controlPause = 1;
            }

            function slide()
            {
                document.getElementById("bpm2").innerHTML = document.getElementById("slide").value;
            }

            function openConfig()
            {
                if (!open)
                {
                    document.getElementById("options2").style.width = "250px";
                    document.getElementById("maxContainer").style.marginLeft = "250px";
                    setTimeout(function ()
                    {
                        document.getElementById("itens").style.opacity = "1"
                        document.getElementById("itens").style.marginLeft = "0"
                    }, 250)
                    open = true;
                }
            }

            function closeConfig()
            {
                if (open)
                {
                    document.getElementById("options2").style.width = "0px";
                    document.getElementById("maxContainer").style.marginLeft = "0";
                    document.getElementById("itens").style.opacity = "0"
                    document.getElementById("itens").style.marginLeft = "-100px"
                    open = false;
                }
            }

            function openSlider()
            {
                document.getElementById("extra").style.display="block";
                document.getElementById("bpm").style.display="none";      
                document.getElementById("extra2").style.display="block";
                controlSlider = 1;
            }

            function secondminute()
            {
                document.getElementById("divTimer").style.display="block";
                document.getElementById("extra1").style.display="block";
                controlInfinity = 0;
                controlSwitch = 1;
            }

            function restore()
            {
                document.getElementById("extra").style.display="none";
                document.getElementById("bpm").style.display="block";
                document.getElementById("divTimer").style.display="block"; 
                document.getElementById("extra1").style.display="none";     
                document.getElementById("extra2").style.display="none";
                controlSlider = 0;
                controlSwitch = 0;
                controlInfinity = 0;
            }

            function infinity()
            {
                document.getElementById("extra1").style.display="none";
                document.getElementById("divTimer").style.display="none";
                controlSwitch = 0;
                controlInfinity = 1;
            }