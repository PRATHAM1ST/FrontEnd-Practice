document.querySelector(".input-area").addEventListener('keyup', e=>{
    document.querySelector(".output-area").innerHTML = document.querySelector(".input-area").value;
})

var bgclr, fontclr, tempclr, fontselection = 1, clrselection=1;
const root = document.querySelector(':root');

reverseclick = 0

document.querySelector(".reverse").addEventListener('click', e=>{
    let rootstyle = getComputedStyle(root);
    bgclr = rootstyle.getPropertyValue('--bg-clr');
    fontclr = rootstyle.getPropertyValue('--font-clr');
    tempclr = bgclr;
    root.style.setProperty('--bg-clr', fontclr);
    root.style.setProperty('--font-clr', tempclr);
    if (reverseclick % 2 == 0){
        document.querySelector(".reverse").style.color = "white";
    }
    else{
        document.querySelector(".reverse").style.color = "black";
    }
    reverseclick ++;
})

document.querySelectorAll(".colors").forEach(e=>{
    e.addEventListener('click', e=>{
        document.querySelector(`#c${clrselection}`).style.boxShadow = "none";
        let selected = e.path[0].className;
        if (selected.includes('1')){
            root.style.setProperty('--bg-clr', "#F5B51B");
            root.style.setProperty('--font-clr', "#133E58");
            document.querySelector(`#c1`).style.boxShadow = "0 0 1rem 0.5rem white";
            clrselection = 1;
        }
        else if (selected.includes('2')){
            root.style.setProperty('--bg-clr', "#7ADAC0");
            root.style.setProperty('--font-clr', "#200371");
            document.querySelector(`#c2`).style.boxShadow = "0 0 1rem 0.5rem white";
            clrselection = 2;
        }
        else if (selected.includes('3')){
            root.style.setProperty('--bg-clr', "#FF7129");
            root.style.setProperty('--font-clr', "#2F2F2B");
            document.querySelector(`#c3`).style.boxShadow = "0 0 1rem 0.5rem white";
            clrselection = 3;
        }
        else if (selected.includes('4')){
            root.style.setProperty('--bg-clr', "#FEA981");
            root.style.setProperty('--font-clr', "#5C0E2F");
            document.querySelector(`#c4`).style.boxShadow = "0 0 1rem 0.5rem white";
            clrselection = 4;
        }
        else if (selected.includes('5')){
            root.style.setProperty('--bg-clr', "#F8D3E2");
            root.style.setProperty('--font-clr', "#0D1239");
            document.querySelector(`#c5`).style.boxShadow = "0 0 1rem 0.5rem white";
            clrselection = 5;
        }
        document.querySelector(".reverse").style.color = "black";
        reverseclick = reverseclick % 2? reverseclick + 1: reverseclick;
    })
})

document.querySelectorAll(".font").forEach(e=>{
    e.addEventListener('click', e=>{
        document.querySelector(`#f${fontselection}`).style.boxShadow = "none";
        let selected = e.path[0].className;
        if (selected.includes('1')){
            root.style.setProperty('--font-style', "'Oleo Script', cursive");
            document.querySelector('#f1').style.boxShadow = "0 0.5rem 0 0 white";
            fontselection = 1;
        }
        else if (selected.includes('2')){
            root.style.setProperty('--font-style', "'Pattaya', sans-serif");
            document.querySelector('#f2').style.boxShadow = "0 0.5rem 0 0 white";
            fontselection = 2;
        }
        else if (selected.includes('3')){
            root.style.setProperty('--font-style', "'Mate SC', serif");
            document.querySelector('#f3').style.boxShadow = "0 0.5rem 0 0 white";
            fontselection = 3;
        }
        else if (selected.includes('4')){
            root.style.setProperty('--font-style', "'Bebas Neue', cursive");
            document.querySelector('#f4').style.boxShadow = "0 0.5rem 0 0 white";
            fontselection = 4;
        }
        else if (selected.includes('5')){
            root.style.setProperty('--font-style', "'Bree Serif', serif");
            document.querySelector('#f5').style.boxShadow = "0 0.5rem 0 0 white";
            fontselection = 5;
        }
    })

})