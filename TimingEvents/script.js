let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

let timer;

btn1.addEventListener("click", () =>{
    timer = window.setTimeout(() => { // NIJE obavezno pozivati window objekat
        console.log("Zdravo!");
    }, 1000 * 2); // vrednost u milisekundama
    /*
    setTimeout(() => {
        console.log("Zdravo ranije")
    }, 500);
    */
});

btn2.addEventListener("click", () =>{
    clearTimeout(timer);
});

let div = document.querySelector("#result");
let btn3 = document.querySelector("#btn3");
let brojac = 0;
let count;
let countIsSet = false;

btn3.addEventListener("click", () =>{
    if(!countIsSet){
        countIsSet = true;
        count = setInterval(() => {            
            brojac++;
            div.innerHTML = brojac;
        }, 1000);
    }
});

let btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", () =>{
    clearInterval(count);
    countIsSet = false;
});

let clock = document.querySelector("#clock");
setInterval(function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);







