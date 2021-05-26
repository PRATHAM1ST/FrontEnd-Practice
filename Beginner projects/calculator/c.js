const box = document.getElementById("box");
const numbers = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");
const input = document.getElementById("input");
const lastThing = document.getElementById("lastThing");
const theme = document.getElementById("theme");
const themeType = document.getElementById("themeType");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");

var last = 0;
var lastOpert = "";
var currentTheme = "Light";
var answerGiven = false;

numbers.forEach(item =>{
    item.addEventListener('click', event =>{
        if (input.value == "0" && (event.path[0].id != "0"  || event.path[0].id == "0")){
            input.value = "";
        }
        else if (answerGiven){
            afterAnswer();
        }
        input.value += event.path[0].id;
    });
})

operator.forEach(item =>{
    item.addEventListener('click', event =>{
        var oprt = event.path[0].id;

        if (oprt != "result"){
            if(last != 0 && lastOpert != ""){
                resultOutput()
            }
            last = intFloat(input.value);
            if (oprt == "plus"){
                lastOpert = "+";
            }
            else if(oprt == "minus"){
                lastOpert = "-";
            }
            else if(oprt == "multiply"){
                lastOpert = "*";
            }
            else if(oprt == "division"){
                lastOpert = "/";
            }
            input.value = "0";
            lastThing.innerHTML = last + " " + lastOpert;
        }
        else if (lastOpert != ""){
            answerGiven = true;
            resultOutput();
        }

    });
})


input.addEventListener("keyup", event =>{
    if (event.key == "Enter"){
        resultOutput();
    }
    else if(event.key == "+"){
        document.getElementById("plus").click();
    }
    else if(event.key == "-"){
        document.getElementById("minus").click();
    }
    else if(event.key == "*"){
        document.getElementById("multiply").click();
    }
    else if(event.key == "/"){
        document.getElementById("divide").click();
    }
    else if(event.key === parseInt(event.key, 10)){
        document.getElementById(event.key).click();
    }
})

theme.addEventListener("click", ()=>{
    if (currentTheme == "Light"){
        document.body.style.transition = "1s";
        theme.innerHTML = `<img src="moon.png"><p id="themeText">Dark</p>`;
        theme.style.filter = "invert(1)";
        document.body.style.backgroundColor = "rgb(11, 16, 49)";
        var element = document.getElementsByTagName("td");
        var css = 'table td:hover{color: white}';
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        for(var i = 0; i< element.length; i++){
            element[i].style.filter = "invert(1)";
            element[i].appendChild(style);
        }
        input.style.filter = "invert(1)";
        clear.style.filter = "invert(1)";
        backspace.style.filter = "invert(1)";
        currentTheme = "Dark"
    }
    else{
        theme.innerHTML = `<img src="sun.png"><p id="themeText">Light</p>`;
        theme.style.filter = "invert(0)";
        document.body.style.backgroundColor = "white";
        var element = document.getElementsByTagName("td");
        for(var i = 0; i< element.length; i++){
            element[i].style.filter = "invert(0)";
        }
        input.style.filter = "invert(0)";
        clear.style.filter = "invert(0)";
        backspace.style.filter = "invert(0)";
        currentTheme = "Light";
    }
})

clear.addEventListener('click', ()=>{
    last = 0;
    lastOpert = "";
    input.value = "0";
    lastThing.innerHTML = "";
})

backspace.addEventListener('click', ()=>{
    if (input.value.length === 1){
        input.value = 0;
    } 
    else{
        // input.value = input.value.substring(0, input.value.length - 1);
        input.value = input.value.slice(0, -1);

    }
})

function intFloat(value){
    if (value.includes(".")){
        return parseFloat(value);
    }
    return parseInt(value);
} 

function restrictValue(event){
    var x = Boolean(parseInt(event.key));
    if (input.value == "0" && (event.path[0].id != "0"  || event.path[0].id == "0")){
        input.value = "";
    }
    if (event.key == "Backspace" && (input.value == "" || input.value.length === 1)){
        input.value = "0";
    }
    else if (event.key == "Backspace" && input.value != ""){
        return true;
    }
    if (x || event.key == "." || event.key == "0"){
        afterAnswer();
        return true;
    }
    else{
        event.preventDefault();
        if (input.value == ""){
            input.value = "0";
        }
    }
}

function resultOutput(){
    var final = intFloat(input.value);
    if (final == null){final = 0};
    lastThing.innerHTML = last + " " + lastOpert + " " + final;
    input.value = "";
    if (lastOpert == "+"){
        input.value = last + final; 
    }
    else if(lastOpert == "-"){
        input.value = last - final;
    }
    else if(lastOpert == "*"){
        input.value = last * final;
    }
    else if(lastOpert == "/"){
        input.value = last / final;
    }
    answerGiven = true;
}

function afterAnswer(){
    if (answerGiven){
        input.value = "";
        lastThing.innerHTML = "";
        last = 0;
        lastOpert = "";
        answerGiven = false;
    }
}