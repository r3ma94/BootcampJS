/*
function zdravoSvete(){

    console.log("Zdravo svete!");
}
zdravoSvete(); //poziv funkcije
console.log("...");
for(let i = 1; i <= 10; i++) {
    zdravoSvete();
}

// Funkcija sa jednim prosledjenim parametrom
function ispisi(tekst) {
    console.log(tekst);
}
ispisi ("IT Bootcamp");
ispisi ("JavaScript");
let ime = "Ana";
ispisi(ime);
ispisi(17.3);

function ispisKorisnika (ime, prezime, godinaRodjenja) {
    console.log(`Korisnik: ${ime} ${prezime}, godina rodjenja: ${godinaRodjenja}.`);
}
ispisKorisnika ("Ana", "Antic", 1995);
ispisKorisnika ("Bojana", "Bokic", 1979);
ispisKorisnika ("Vuk", "Vulic", 1986);
let korisnikIme = "Mika";
let korisnikPrezime = "Mikic";
let korisnikGodRodj = 1989;
ispisKorisnika(korisnikIme, korisnikPrezime, korisnikGodRodj);


// Ispis zbira dva broja
function zbir (a, b) {
    let c = a + b;
    console.log(c);
}
zbir (359, 567);
zbir ("2", "5");
zbir (6, "6");

// Digitron
function digitron(a, b, o){
    let rez;
    if (o == "+"){
        rez = a + b;
    }
    else if (o == "-") {
        rez = a - b;
    }
    else if (o == "*") {
        rez = a * b;
    }
    else {
        if (b == 0) {
            rez = "Nije dozvoljeno deliti nulom.";
        }
        else {
            rez = a / b;
        }
    }
    console.log(rez);
}
digitron (22, 59, "+");
digitron (365, 186, "-");
digitron (12, 12, "*");
digitron (25, 5, "/");
digitron (25, 0, "/");


// Return funkcije
function saberi(a, b){
    let c = a + b;
    return c;

}

let zbir = saberi (1, 5);
console.log(zbir);
let pom = zbir + 1;
console.log(pom);

let zbir1 = saberi (3, 4);
let zbir2 = saberi (2, 7);
let zbir3 = zbir1 + zbir2;
console.log(`${zbir1} + ${zbir2} = ${zbir3}`);

//2. Nacin
zbir3 = saberi(zbir1, zbir2);
console.log(zbir3);

// "Funkcija ispisuje" => console.log()...
// "Funkcija vraca" => return;



// Zadaci: 4. Zadatak:

function maks2(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
let m = maks2 (2, 5);
console.log(m);




function maks4(a, b, c, d){
    let max1 = maks2 (a, b);
    let max2 = maks2 (c, d);
    let max3 = maks2 (max1, max2);
    return max3;
}

m = maks4 (12, 11, 16, 15);
console.log(m);



// Zadatak 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.


function neparan(n){
    if(n%2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
let parNepar = neparan (9);
console.log(parNepar);
if (parNepar == true) {
    console.log("Broj je neparan");

}
else {
    console.log("Broj je paran");
}

// Zadatak 9 
function sedmiDan(dan){
   let pomDan = dan%7;
   switch(pomDan){
        case 0:
            return "Nedelja";
            break;
        case 1: 
            return "Ponedeljak";
            break;
        case 2:
            return "Utorak";
            break;
        case 3:
            return "Sreda";
            break;
        case 4:
            return "Cetvrtak";
            break;
        case 5:
            return "Petak";
            break;
        case 6:
            return "Subota";
            break;
        default:
            return "Los unos.";
   }
}

let dan = sedmiDan (15);
console.log(dan);


// Oblast vazenja promenljivih
let s = 0;
for(let i = 1; i <= 3; i++) {
    s += i;
}

for(i = 4; i <= 6; i++) {
    s += i;
}
console.log(s);
console.log(i);

function f1() {
     j = 3;
    if (8 === 8){
         k = -5;
    }
    console.log(j, k);
}

function f2() {
    
    console.log(j, k);
}

f1 ();
f2 ();
*/
