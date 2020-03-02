let buttonHello = document.getElementById("hello");

buttonHello.addEventListener("click", () => {
    console.log("Hello World!");
});

let helloParagraph = document.getElementById("par");
buttonHello.addEventListener("click", () => {
    helloParagraph.innerHTML += "<br> Hello!!!";
});


// Napraviti dugme klikom na koje se u konzoli
//ispisuje vrednost brojača br.
//Brojač na početku ima vrednost 1, a svaki put
//kada se klikne na dugme povećati vrednost
//brojača za 1.

let buttonBrojac = document.getElementById("brojac");
let br = 1;
buttonBrojac.addEventListener("click", () => {
    br++;
    console.log(br);
    let helloParagraph = document.getElementById("par");
    helloParagraph.innerHTML = `Vrednost brojaca je: ${br}`;
    
});

//Napraviti dugme + i dugme -.
//Kada se klikne na dugme +, na ekranu prikazati
//vrednost brojača povećanu za 1.
//Kada se klikne na dugme -, na ekranu prikazati
//vrednost brojača smanjenu za 1.
let r = 0;
let spanResult = document.getElementById("result");
spanResult.innerText = r;
let buttonPlus = document.getElementById("plus");
let buttonMinus = document.getElementById("minus");
buttonPlus.addEventListener("click", () => {
    r++;
    spanResult.innerText = r;
   
});

buttonMinus.addEventListener("click", () => {
    r--;
    
    if(r < 0){
        r = 0;
    }
    spanResult.innerText = r;
});


let buttonSubmit = document.getElementById("submit");

buttonSubmit.addEventListener("click", () => {
    let parName = document.getElementById("parName");
    let inputName = document.getElementById("name").value;
    parName.innerHTML = inputName;
});

//Naredni zadatak


let buttonSquare = document.getElementById("buttonSquare");
let squarePar = document.getElementById("squarePar");
buttonSquare.addEventListener("click", () => {
    let squareNumber = document.getElementById("square").value;

    squarePar.innerText = squareNumber**2;
    
});

let buttonHalf = document.getElementById("buttonHalf");
let halfPar = document.getElementById("halfPar");
buttonHalf.addEventListener("click", () => {
    let halfNumber = document.getElementById("half").value;

    halfPar.innerText = halfNumber / 2;  
    
});

let buttonCircle = document.getElementById("circleButton");
let circlePar = document.getElementById("circlePar");
buttonCircle.addEventListener("click", () => {
    let cirlceNumber = document.getElementById("circle").value;

    circlePar.innerText = (cirlceNumber**2) * Math.PI;
});





