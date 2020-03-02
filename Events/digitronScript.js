let buttonOne = document.getElementById("one");
let buttonTwo = document.getElementById("two");
let buttonPlus = document.getElementById("plus");
let buttonEquals = document.getElementById("equals");

let x = 0;
let y = 0;
let z = 0;
let op = "";
buttonOne.addEventListener("click", () => {
    if (x == 0){
        x = 1;
    }
    else {
        y = 1;
    }
    
});

buttonTwo.addEventListener("click", () => {
    if (x == 0){
        y = 2;
    }
    else {
        y = 2;
    }
});

buttonPlus.addEventListener("click", () => {
    op = "+";
    
});

buttonEquals.addEventListener("click", () => {
    switch(op){
        case "+":
            z = x + y;
            break;
        case "-":
            z = x - y;
            break;
        case "*":
            z = x * y;
            break;
        case "/":
            z = x / y;
            break;
        
        
    }
    let resultP = document.getElementById("result");
    resultP.innerText = z;
});



