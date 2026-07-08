let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function appendValue(value){
    if(display.innerText === "0"){
        display.innerText = value;
    }else{
        display.innerText += value;
    }
}

function clearDisplay(){
    display.innerText = "0";
}

function deleteLast(){
    let text = display.innerText;
    display.innerText = text.slice(0,-1);

    if(display.innerText === ""){
        display.innerText = "0";
    }
}

function calculate(){
    try{
        let expression = display.innerText;
        let result = eval(expression);

        let li = document.createElement("li");
        li.innerText = expression + " = " + result;
        historyList.prepend(li);

        display.innerText = result;
    }
    catch{
        display.innerText = "Error";
    }
}

function toggleHistory(){
    let panel = document.getElementById("historyPanel");

    if(panel.style.display === "block"){
        panel.style.display = "none";
    }else{
        panel.style.display = "block";
    }
}