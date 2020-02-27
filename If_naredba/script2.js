let a = 5;
let b = 9;
let c = a;
a = b;
b = c;
console.log(a, b);

//7. Zadatak
let poeni;
if (poeni > 90) {
    console.log("Ocena 10");
}
else if (poeni > 80) {
    console.log("Ocena 9");
}
else if (poeni > 70) {
    console.log("Ocena 8")
}
else if (poeni > 60) {
    console.log("Ocena 7")
}
else if (poeni > 50) {
    console.log("Ocena 6")
}
else {
    console.log("Nije polozio")
}

//8. Zadatak
let datum = new Date();
let dan = datum.getDay();
if (dan == 0) {
    console.log("Vikend");
}
else if (dan == 6){
    console.log("Vikend");
}

else {
    console.log("Radni dan");
}


// 9. Zadatak
let vreme = datum.getHours();
if (vreme < 12) {
    console.log("Dobar jutro");
}
else if (vreme < 18) {
    console.log("Dobar dan");
}
else {
    console.log("Dobro vece");
}

// 10. Zadatak
let datum1 = new Date(2020, 1, 1)
let datum2 = new Date(2020, 2, 1)
if (datum1 > datum2) {
    console.log("Prvi datum je kasniji");
}
else {
    console.log("Drugi datum je kasniji");
}

// 11. Zadtak
if (vreme > 17) {
    console.log("Firma ne radi");
}
else if (vreme < 9) {
    console.log("Firma ne radi.");
}
else {
    console.log("Firma radi.");
}

// 12. Zadatak
let p1 = 9;
let k1 = 17;
let p2 = 12;
let k2 = 21;
if ((p2 <= k1) && (p1 <= p2)) {
    console.log("Radna vremena se poklapaju");
}
else if ((p2 <= p1) && (p1 <= k2)) {
    console.log("Radna vremena se poklapaju");
}
else {
    console.log("Radna vremena se ne poklapaju");
}




// 13. Zadatak

let broj = 8;
let paran;
if (broj % 2 == 0) {
    paran = true;
    console.log("Broj je paran.");
}
else {
    paran = false;
    console.log("Broj je neparan.");
}
console.log(paran);



// 14. Zadatak
if (broj % 3 == 0) {
    console.log("Deljiv sa 3");
}
else {
    console.log("Nije deljiv sa 3");
}
//15. Zadatak

let x = 22;
let y = 25;
let z;
if (x > y) {
    z = x - y;
    console.log(z);
}
else {
    z = y - x;
    console.log(z);
}

// 16. Zadatak 
x = 15;
if (x <= 0) {
    y = x - 1;
    console.log(y);
}
else {
    y = x + 1;
    console.log(y);
}

// 17. Zadatak
x = 25;
y = 41;
z = 13;

if ((x > y) && (x > z) && (y > z)) {
    console.log(`Najveci je ${x}, srednji je ${y}, najmanji je ${z}`);
}
else if ((y > x) && (y > z) && (x > z)) {
    console.log(`Najveci je ${y}, srednji je ${x}, najmanji je ${z}`);
}
else if ((z > x) && (z > y) && (x > y)) {
    console.log(`Najveci je ${z}, srednji je ${x}, najmanji je ${y}`);
}
else if ((z > x) && (z > y) && (y > x)) {
    console.log(`Najveci je ${z}, srednji je ${y}, najmanji je ${x}`);
}

else if ((x > y) && (x > z) && (z > y)) {
    console.log(`Najveci je ${x}, srednji je ${z}, najmanji je ${y}`);
}
else {
    console.log(`Najveci je ${y}, srednji je ${z}, najmanji je ${x}`);
}



let boja = "tirkizna";
switch(boja) {
    case "plava":
        console.log("Odabrali ste plavu boju.");
        break;
    case "zelena":
    case "tirkizna":
        console.log("Odabrali ste nijansu zelene boje.");
        break;
    case "crvena":
        console.log("Odabrali ste crvenu boju.");
        break;
    default:
        console.log("Nije dobra boja");
    
}
// Zadatak 1 (SWITCH)
let danX = 4
switch(danX){
    case 0:
        console.log("Nedelja");
        break;
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
        break;
    case 4:
        console.log("Cetvrtak");
        break;
    case 5:
        console.log("Petak");
        break;
    case 6:
        console.log("Subota")
        break;
    default:
        console.log("");
}

// Zadatak 2 (SWITCH)

let ocena = 2;
switch(ocena) {
    case 1:
        console.log("Nedovoljan");
        break;
    case 2:
        console.log("Dovoljan");
        break;
    case 3:
        console.log("Dobar");
        break;
    case 4:
        console.log("Vrlo dobar");
        break;
    case 5:
        console.log("Odlican");
        break;


}
// Zadatak 3
let paranBr = 12;

switch(paranBr) {
    case 0:
        console.log("Uneti broj je 0");
        break;
    case 2:
        console.log("Uneti broj je 2");
        break;
    case 4:
        console.log("Uneti broj je 4")
        break;
    case 6:
        console.log("Uneti broj je 6")
        break;
    case 8:
        console.log("Uneti broj je 8")
        break;
    default:
        console.log("Pogresan unos")
}

// Zadatak 4 

let broj1 = 2;
let broj2 = 6;
let char = "m";
switch(char) {
    case "m":
        console.group(broj1 * broj2);
        break;

}