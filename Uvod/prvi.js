// komentar u jednoj liniji



/*window.alert("Hello world!");*/
/*document.write("Hello world!");*/
console.log("Hello World!"); /*poruka u konzoli browsera*/

document.getElementById("par1").innerHTML = "Hello world";

console.log(55);
console.log(-3.123)
console.log(true);
console.log(false);



let x = 3; /*promenljiva x, vrednost 3*/

console.log(x);

let y;

y = -9;
x = 5;

console.log(x, y);
const z = 8.04; //vrednost konstanti moramo zadati  u istoj liniji koda gde je i uvodimo
console.log(z);
//z = 5; - ne moze jer je Z konstanta
//console.log(z);

x ="Utorak";
console.log(x, y);

x = "Volvo XC60"; // Using double quotes
y = 'Volvo XC60'; // Using single quotes
console.log(x, y);

x = "It's alright";
y = 'He\'s called "Johnny"'
console.log(x, y);

x = true;
y = false;
console.log(x, y);

let m; // m - Undefined
console.log(m, m + 3); // NaN - not a number

let n = null;

console.log(n, n + 3);



let firstName = "Pera";
let lastName = "Peric";
let fullName = firstName + " " + lastName;

console.log(firstName, lastName, fullName);

// console.log(fullname); nepostojeca promenljiva

console.log(fullName.length);


x = 8.7;
y = 3;

let t = x * y;
console.log(x, y, t);

x = 5;
y = 2;
t = x / y;
console.log(x, y, t);

x = 6;
y = 4;
console.log(x, y);
x = x + y;
console.log(x, y);

x = 8;
y = 4;
x *= y;
console.log(x, y);

x = 3;
y = 9;
x++; y--;
console.log(x, y);

x = 4;
y = 9;
console.log(y % x);

x = 3;
y = 9;
console.log(y ** x);


let sati = 14;
let minuti = 36;
console.log(sati * 60 + minuti)

let cenaRobe = 240;
let novcanica = 2000;
console.log(novcanica - cenaRobe);


let euri = 1000;
let kursEvra = 117.60;
console.log(euri * kursEvra);

let dinari = 2500;
console.log(dinari / kursEvra);

let kursDolara = 104;

console.log(euri * kursEvra / kursDolara);

dolari = 3400;
console.log(dolari * kursDolara / kursEvra);

let celz = 35;
let faren = celz * 1.8 + 32;
console.log(faren);         // C u F

let kelv = celz + 273.15;
console.log(kelv);          // C u K


faren = 88;
console.log((faren - 32) / 1.8); // F u C

kelv = 300;
console.log(kelv - 273.15); // K u C