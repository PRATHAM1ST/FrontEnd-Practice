const socket = io("http://localhost:8000")

const form = document.getElementById("slider");
const messageInput = document.getElementById("writing_box");
var emojiesPanel = document.getElementById("emojiesPanel");
var attach = document.getElementById("myfile");

var i = 1;
var j = 0;
var k = 0;

var name;
var pickedColorSender;


// getting the name throught prompt
var Name = document.getElementById("provideName");
var Submit = document.getElementById("submitName");
var Color = document.getElementById("selectColor");


Name.addEventListener("keyup", event=>{
    if (event.key == "Enter"){
        Name.style.visibility = "hidden";
        Submit.style.visibility = "hidden";
        Color.style.visibility = "visible";
        name = Name.value; 
        socket.emit("new-user", name);
    }
})
Submit.addEventListener("click", function(){
    Name.style.visibility = "hidden";
    Submit.style.visibility = "hidden";
    Color.style.visibility = "visible";
})

document.querySelectorAll(".colorPicker").forEach(item =>{
    item.addEventListener('click', event =>{
        var elements = document.getElementsByClassName("sender"); // get all elements
        var bgColor = window.getComputedStyle( document.getElementById(item.id) ,null).getPropertyValue('background-color');
        pickedColorSender = bgColor;
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = bgColor;
        }
        Color.style.visibility = "hidden";
        document.getElementById("provideInfo").style.visibility = "hidden";
    })
})


//broadcasting the user joined
socket.on("new-user-joined", name =>{
    appendMessage(`${name} Joined`, "receive", ``);
    createProfile(name)
})

// receiving a message
socket.on("receive", data=>{
    console.log(data);
    appendMessage(`${data.name} : ${data.message}`, "receive", `${data.color}`);
})

// user disconnected
socket.on("user-disconnected", name =>{
    appendMessage(`${name} Disconnected`, "receive")
})

// when go is clicked
form.addEventListener("click", e => {
    e.preventDefault()
    emojiesPanel.style.visibility = "hidden";
    attach.style.visibility = "visible";
    const message = messageInput.value
    socket.emit('send-message', message, pickedColorSender)
    if (message != ""){
        messageInput.style.transition = "0.25s";
        messageInput.style.height = " 4.89%";
        messageInput.style.top = "80.52%";
        appendMessage(`You: ${message}`, "sender", `${pickedColorSender}`);
        messageInput.value = "";
    }
    else{
        messageInput.value = ""; 
    }
})

// adjusting the size of message
function Msg(messengerType, pickedColor){
    var screenWidth = window.screen.width;
    var widthScroll = document.getElementById(messengerType).scrollWidth;
    widthScroll = widthScroll * 100 / screenWidth;
    if (widthScroll > 30){ widthScroll = 30 };
    document.getElementById(messengerType).style.width = widthScroll + "%";

    var screenHeight = window.screen.height;
    var heightScroll = document.getElementById(messengerType).scrollHeight;
    heightScroll = heightScroll * 100 / screenHeight;
    document.getElementById(messengerType).style.height = heightScroll + "%";

    document.getElementById(messengerType).style.backgroundColor = pickedColor;
}

// appending message
function appendMessage(message, messengerType, pickedColor){
    messenger = messengerType.substr(0);
    var div = document.createElement('div');
    div.className = messengerType;
    if (messenger == "s"){
        div.id = messenger + (j + 1);
        div.textContent = message;
        var element = document.getElementById("container");
        element.appendChild(div);
        Msg(messenger + (j + 1), pickedColor);
        j += 1;
    }
    else{
        div.id = messenger + (k + 1);
        div.textContent = message;
        var element = document.getElementById("container");
        element.appendChild(div);
        Msg(messenger + (k + 1), pickedColor);
        k += 1;
    }
}

function createProfile(name){
    var div = document.createElement('div');
    div.className = "picture";
    div.id = i;
    div.textContent = name;
    var element = document.getElementById("profiles");
    element.appendChild(div);
    // for (var l = 1; l <= i; l++){
    //     document.getElementById("" + l).style.transform = "rotate(-" + (90 / i) + "deg)";
    // }
    document.getElementById("" + i).style.visibility = "hidden";
    i += 1
}

