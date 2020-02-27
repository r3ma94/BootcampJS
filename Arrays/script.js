
let cars = ["Volvo", "BWM", "Toyota"];
console.log(cars);
console.log(cars[0]); // "Volvo"
console.log(cars[2]); // "Toyota"

// Niz od n elemenata 
// Indeksi su: 0, 1, 2, 3 ...,

cars[1] = "Ford"; // Menjamo drugu vrednost u nizu (na poziciji 1)
console.log(cars);


let test = [6.07, "Sreda", -9, false]; // U nizu je moguce navoditi vise vrsta promenljivih
console.log(test);

// Iteracija kroz elemente niza (ispis svih elemenata niza)

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// Drugi nacin:
for(let i = 0; i <= cars.length - 1; i++) {
    console.log(cars[i]);
}

// Ispis svih elemenata u obrnutom redosledu
for (let i = cars.length - 1; i >= 0; i--){
    console.log(cars[i]);
}

//                  ZADACI 

// 2. Zbir elemenata celobrojnog niza
let niz = [2, 5, 7, -9, 15, 13, 29, -2, 0];
let suma = 0;
for (let i = 0; i < niz.length; i++){
    suma = suma + niz[i];

}
console.log(suma);


// 3. Zadatak - proizod svih elemenata
niz = [1, 2, 3, 4];
let p = 1;
for (let i = 0; i < niz.length; i++){
    p = p * niz[i];
}
console.log(p);


// 4. Zadatak - srednja vrednost 
niz = [12, 13, 11];
let suma2 = 0;
for (let i = 0; i < niz.length; i++){
    suma2 = suma2 + niz[i];   
}
let srvr;
if (niz.length == 0){
    srvr = 0;
}
else {
    srvr = suma2 / niz.length;

}
console.log(srvr);



// 5. Maksimalna vrednost u nizu
niz = [11, 25, 7, 23, -7, 4, -9.8, 22, 16];
let max = niz[0]; // GRESKA: max = 0 !
for (let i = 1; i < niz.length; i++){
    if (niz[i] > max){
        max = niz[i];
    }

}
console.log(max);

// 6. Minimalna vrednost u nizu
niz = [11, 25, 7, 23, -7, 4, -9.8, 22, 16];
let min = niz[0];
for (let i = 1; i < niz.length; i++){
    
}
console.log(min);

// Napisati arrow funkciju koja vraca minimalni element niza

let minArrow = niz => {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++){
        if (niz[i] < min){
            min = niz[i];
        }
    }
    return min;
}

console.log(minArrow(niz));
console.log(minArrow([1, -5, 12, 11, -7]));

// 7. Odrediti indeks maksimalnog elementa celobrojnog niza
let maxIndex = niz => {
    let max = niz[0]; // Vrednost maksimalnog elementa niza
    let index = 0; // indeks maksimalnog elementa niza
    for (let i = 1; i < niz.length; i++){
        if (niz[i] > max){
            max = niz[i];
            index = i;
        }
    }
    return index;

}
console.log(maxIndex(niz));
console.log(maxIndex([1, 12, 50, -11, 4]));

// 8. - Domaci

// 9. Zadatak - Napisati arrow funkciju koja vraca br elemenata 
// celobrojnog niza koji su veci od srednje vrednosti
let brojSrVr = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++){
        suma += niz[i];       
    }
    let srvr = suma / niz.length;
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] > srvr){
            broj++;
        }
    }
    return broj;
}
console.log(brojSrVr(niz));
console.log(brojSrVr([22, 11, 33]));

// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza 
let zbirPozEl = niz => {
    let zbir = 0;
    for (let i = 0; i < niz.length; i++){
        if (niz[i] > 0) {
            zbir += niz[i];
        }
    }
    return zbir;
}

console.log(zbirPozEl([-2, 3, -4, 5]));

// 11. Broj parnih elemenata u celobrojnom nizu

let parniElem = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++){
        if (niz[i]%2 == 0) {
            broj++;
        }
    }
    return broj;
}
console.log(parniElem([1, 2, 3, 4, 5, 6]));

// 12. Odrediti broj parnih elemenata sa neparnim indeksom.
let neparniIndex = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++){
        if ((niz[i]%2) == 0 && (i%2 != 0)){
            broj++;

        }

    }
    return broj;
}
console.log(neparniIndex([1, 2, 3, 4, 5, 6]));

// 13.

let parniInSuma = niz => {
    suma = 0;
    for (let i = 0; i < niz.length; i++){
        if(i%2 == 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(parniInSuma([1, 2, 3, 4, 5, 6, 7]));



// 14. Promeniti znak svakom elementu

let promZnak = niz => {
    for(let i = 0; i < niz.length; i++){
        niz[i] *= -1;
                
    }
    
    
}

console.log(promZnak(niz));

// 15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
let promZnak2 = niz => {
    for(let i = 0; i < niz.length; i++) {
        if (niz[i]%2 != 0 && i%2 == 0) {

        }
        
    }
}


// 16. 
let lista = niz => {
    // Elementi niza su stringovi
    let result = "";
    result += "<ul>";
    for(let i = 0; i < niz.length; i++){
        result += `<li>${niz[i]}</li>`;
    }
    result += "</ul>"
    return result;

}

let div = document.getElementById("blabla");
div.innerHTML = lista(["Jaja", "Mleko", "Jogurt"]);

// 17. Tabela sa imenima

let nizTimova = ["Tim A", "Tim BB", "Tim CCC"];
let tabela = "<table><tr>";
for (let i = 0; i < nizTimova.length; i++){
    tabela += `<td>${nizTimova[i]}</td>`;
}
tabela += "</tr></table>";
let divTabela = document.getElementById("tabela");
divTabela.innerHTML = tabela;

// 18. Zadatak

let nizSlika = ["lights.jpg", "nature.jpg", "mountains.jpg"];
let slike = "";
for (let i = 0; i < nizSlika.length; i++){
    slike += `<img src="${nizSlika[i]}">`
}
let divSlike = document.getElementById("slicice");
divSlike.innerHTML += slike;



// Stringovi i njihovi metodi
let str = "Zdravo svete!";

// Duzna stringa - length
console.log(str.length);

// Da li sadrzi neki karakter - includes
console.log(str.includes("v"));

if (str.includes("o")){
    console.log("String zadrzi slovo o");
}
else {
    console.log("String ne sadrzi slovo o");
}

// Da li sadrzi karakter na specificiranoj poziciji 
console.log(str.includes("Z", 0));

//Indeks unetog slova - indexOf

console.log(str.indexOf("e"));

//Poslednji indeks unetog slova - lastIndexOf

console.log(str.lastIndexOf("e"));

// Prvo slovo reci - startWith

console.log(str.startsWith("Z"));

// Poslednje slovo reci - endWith

console.log(str.endsWith("!"));

// slice - odakle poceti(od koje pozicije) podstring, gde zavrsiti podstring(do koje pozicije)
console.log(str.slice(3, 4));

// Substr - odakle poceti podstring, koliko elemenata od te pozicije na dalje uzeti
console.log(str.substr(3, 4));

// Replace
console.log(str.replace("e", "w"));

// 19. Zadatak

for (i = 0; i < nizTimova.length; i++){
    let duzReci = nizTimova[i].length;
    console.log(duzReci);
}

// 20. Zadatak
let najduzaRec = nizTimova =>{
    max = nizTimova[0].length;
    let maxRec = nizTimova[0];
    for (let i = 0; i < nizTimova.length; i++){
        if (max < nizTimova[i].length){
            max = nizTimova[i].length;
            maxRec = nizTimova[i];
        }
    }
    return maxRec;  
}

console.log(najduzaRec(nizTimova));


// Prosecna duzina reci

let averageLength = nizTimova => {
    let prosek = 0;
    for (let i = 0; i < nizTimova.length; i++){
        prosek += nizTimova[i].length;
        
    
    }
    return prosek / nizTimova.length;

}

console.log(averageLength(nizTimova));

// Ispisati natprosecno dugacke reci

let aboveAvgLength = nizTimova =>{
    let ar = averageLength(nizTimova);
    for(let i = 0; i < nizTimova.length; i++){
        if(ar < nizTimova[i].length){
        console.log(nizTimova[i]);

        }
    }

}

aboveAvgLength(nizTimova);

//22. Zadatak
// nizTimova = ["Tim A", "Tim BB", "Tim CCC"];
let brojElemenataSaKarakterom = (niz, slovo) => {
    let broj = 0; 
    for(let i = 0; i < niz.length; i++) {
        if (niz[i].includes(slovo)){
            broj++;
        }
    }
    return broj;
}

console.log(brojElemenataSaKarakterom(nizTimova, "i"));


// 23. Zadatak

let brojElemenataKojiPocinju = (niz, slovo) => {
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        if (niz[i].startsWith(slovo.toUpperCase()) || niz[i].startsWith(slovo.toLowerCase())) {
            broj++;
        }
    }
    return broj;
}

console.log(brojElemenataKojiPocinju(nizTimova, "t"));

// 24. Zadatak
let a = [2, 5, 7];
let b = [-7, -5, -9];
let c = [];
for(let i = 0; i < a.length; i++){
    c.push(a[i]);
    c.push(b[i]);

}

console.log(c);

// 25. Zadatak
let proizvodElemenata = (a, b) => {
    c = [];
    for (let i = 0; i < a.length; i++) {
        c.push(a[i] * b[i]);
    }
    return c;


}
console.log(proizvodElemenata(a, b));

// 26. Zadatak
a = [2, 4, 6, 8, 10, 12];
//   0  1  2  3  4   5 
b = [];
let n = a.length / 2;
for (let i = 0; i < n; i++){
    let i_pom = a.length - i - 1;
    b.push((a[i] + a[i_pom]) / 2);


    
}

console.log(b);













