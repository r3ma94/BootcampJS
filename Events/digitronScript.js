let calcNumbers = document.querySelectorAll(".calcNum")
let calcOps = document.querySelectorAll(".calcOp");

let x = 0;
let y = 0;
let z = 0;
let op = "";

calcNumbers.forEach(elem => {
    elem.addEventListener("click",()=>{
        if(x == 0) {
            x = elem.textContent;
            
        }
        else {
            y = elem.textContent;
            
        }
    });
    
});

calcOps.forEach(elem =>{
    elem.addEventListener("click",() => {
        op = elem.textContent;
    });
});


let buttonEquals = document.getElementById("equals");
buttonEquals.addEventListener("click", () => {
    x = parseInt(x);
    y = parseInt(y);
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
    x = 0;
    y = 0;
    z = 0;
});



