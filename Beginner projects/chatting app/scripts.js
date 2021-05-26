var box = document.getElementById("writing_box");
var go = document.getElementById("slider");
var go_active = document.getElementById("slider:active");
var emojies = document.getElementById("emojies");
var emojiesPanel = document.getElementById("emojiesPanel");
var attach = document.getElementById("uplodForm");

// for next line on enter button in input
box.addEventListener("keyup", function(event){
    attach.style.visibility = "hidden";
    if (event.key == "Enter"){
        box.value = box.value.substr(0, box.value.length - 1)
        box.value += "\n";
        heightMapper();
    };
});

// creating focus on input box ane hiding other thing
box.addEventListener("click", function(){
    attach.style.visibility = "hidden";
    emojiesPanel.style.visibility = "hidden";
})

// emojes pannel poping
emojies.addEventListener("click", function(){
    if (emojiesPanel.style.visibility == "visible"){
        emojiesPanel.style.visibility = "hidden";
    }
    else{
        emojiesPanel.style.visibility = "visible";
    }
});

// getting the click of each emojies
document.querySelectorAll("#emojiesPanel").forEach(item =>{
    item.addEventListener('click', event =>{
        box.innerHTML = "&#" + event.target.id + ";";
        box.value += box.innerHTML;
    })
})

// heighting and input box
function heightMapper(){
    box.style.removeProperty('transition');
    box.style.height = '35px';
    var x = box.scrollHeight - 10;
    box.style.height = x + 'px';

    box.style.top = '560px';
    var div = document.querySelector('textarea');
    var divOffset = offset(div);
    var y = divOffset.top;
    var z = y - x + 35;
    box.style.top = z + "px";
};

// getting the scroll height 
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
};


// if message is already in html displaying it
// var i = 0;
// function getting(){
//     var everyChild = document.getElementById("container").children;
//         for (var i = 0; i < everyChild.length; i++){
//             Msg(everyChild[i].id);
//             j += 1
//         }
// }
// getting();