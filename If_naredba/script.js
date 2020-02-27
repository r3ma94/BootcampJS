let a = 5;
let b = 3;
if (a > b) {
    console.log(`${a} je vece od ${b}`);
}
console.log("Komanda posle if");

a = 6;
b = "6";
if (a == b) {
    console.log(`${a} je jednako ${b}`);
}
else {
    console.log(`${a} nije je jednako ${b}`);
}
// == - ispituje vrednost promenljive a i b
// === - ispituje i tip i vrednost promenljive a i b
// != - ispituje da li je vrednost razlicita
// !== - ispituje da li je i tip a i vrednost razlicita

if (a === b) {
    console.log(`${a} je jednako ${b} po tipu i vrednosti`);
}
else {
    console.log(`${a} nije je jednako ${b} po tipu i po vrednosti`);
}



a = 5;
b = 12;
if (a > b) {
    console.log(`${a} je vece od ${b}`);
}
else {
    console.log(`${a} nije vece od ${b}`);
}

let temp = -5;
if (temp >= 0) {
    console.log("Temperatura je iznad nule.");
}
else {
    console.log("Temperatura je ispod nule.");
}

let pol = "Z";
let div = document.getElementById("blabla");
if (pol == "M") {
    console.log("Muski pol");
    div.innerHTML = "<img src ='images/male.png' alt='Muski'>";
    
}
else {
    console.log("Zenski pol")
    div.innerHTML = "<img src ='images/female.png' alt='Zenski'>";
}


let datum = new Date();
let vreme = datum.getHours();

if (vreme >= 12) {
    console.log("Podne")
}
else {
    console.log("Prepodne")
}

let datum2 = datum.getFullYear();
let godinaRodjenja = 2004;
if (datum2 - godinaRodjenja >= 18) {
    console.log("Osoba je punoletna");
}
else {
    console.log("Osoba je maloletna.");
}
let max;
a = 122;
b = 55;
let c = 50;

if (a > b) {
    max = a;
}
else {
    max = b;
}
if (c > max) {
    max = c;
}
console.log(max);

