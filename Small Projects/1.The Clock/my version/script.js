var day, hours, minutes, seconds, hourChange;
function timer(){
    document.getElementById("HourHand").style.transform = `rotate(${(hours * 30) + (minutes * 0.5) + (seconds * 0.0002)}deg)`;
    document.getElementById("MinuteHand").style.transform = `rotate(${(minutes * 6) + (seconds * 0.5)}deg)`;
    document.getElementById("SecondHand").style.transform = `rotate(${seconds * 6}deg)`;
    run();
}

function run(){
    setTimeout(() => {
        day = new Date();
        hours = day.getHours();
        minutes = day.getMinutes();
        seconds = day.getSeconds();
        if (hourChange != hours){
            if(hourChange == 0){
                document.getElementById("bg").style.top = `-300%`;
                document.getElementById("moon").style.visibility = "visible";
                document.getElementById("moon").style.transform = `rotate(90deg) translateX(-800%)`;
                document.getElementById("sun").style.visibility = "hidden";
            }
            else if (hourChange > 0 && hourChange < 4){
                document.getElementById("bg").style.top = `-${((hours - 1)*11.111)}%`;
                document.getElementById("moon").style.visibility = "visible";
                document.getElementById("moon").style.transform = `rotate(${90 + ((hours)*30)}deg) translateX(-800%)`;
                document.getElementById("sun").style.visibility = "hidden";
                
            }
            else if (hourChange >= 4 && hourChange <= 19){
                document.getElementById("bg").style.top = `-${33.33 + ((hours - 4)*9.11133)}%`;
                document.getElementById("sun").style.visibility = "visible";
                document.getElementById("sun").style.transform = `rotate(${(hours - 4)*12}deg) translateX(-800%)`;
                document.getElementById("moon").style.visibility = "hidden";
            }
            else{
                document.getElementById("bg").style.top = `-${170 + ((hours - 19)*35)}%`;
                document.getElementById("moon").style.visibility = "visible";
                document.getElementById("moon").style.transform = `rotate(${(hours - 19)*30}deg) translateX(-800%)`;
                document.getElementById("sun").style.visibility = "hidden";
            }
            hourChange = hours;
        }
        

        if(hours > 12){
            hours = hours - 12;
        }
        timer() 
     }, 1000);
}

day = new Date();
hourChange =  day.getHours() + 1;
run();

// 4:30 to 7:00 light mode
// else night mode