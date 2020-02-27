/*

// Zadatak 11.
function suma(n, m){
    if (n > m) {
        return 0;
    }
    let s = 0;
    for(let i = n; i <= m; i++){
        s += i;
    }
    return s;
    
}

console.log(suma(7, 2));
let p = suma(6, 12);
console.log(p);
p = suma(1, 9);
console.log(p);


// Zadatak 12.
function mnozi(n, m){
    let p = 1;
    for(let i = n; i <= m; i++){
        p *= i; // p = p * i;
    }
    return p;
}

console.log(mnozi(3, 6));

// Zadatak 13.
function arsr(n, m) {
    let zbir = 0;
    let broj = 0;
    for(let i = n; i <= m; i++) {
        zbir += i; // zbir = zbir + 1;
        broj++; // broj = broj + 1;
    
    }
    return zbir / broj;
}

console.log(arsr(5,9));

// Zadatak 14.
function arsr3 (n, m) {
    let zbir = 0;
    let broj = 0;
    for(let i = n; i <= m; i++) {
        if (i%10 == 3) {
            zbir += i;
            broj++;
        }
    }

    if(broj > 0) {
        return zbir / broj;

    }
    return 0;


}

console.log(arsr3(1, 14));
*/
// Zadatak 10.
function deljivSaTri(n, m) {
    let broj = 0;
    for(let i = n; i <= m; i++){
        if (i%3 == 0) {
            broj++;
        }
    }
    return broj;

}

console.log(deljivSaTri(3,12));

// Zadatak 5.

function slika(putanja){
   // return '<img src="' + putanja + '" alt = "Blabla">';
      return `<img src='${putanja}' alt='Blabla'>`;
}

let elem = document.getElementById("blabla");
elem.innerHTML = slika("images/lights.jpg");
console.log(elem.innerHTML);
elem.innerHTML += slika("images/mountains.jpg");


// Zadatak 6.

function paragraf(boja){
    return `<p style="color: ${boja}">TEKSTTEKSTTEKSTTEKSTTEKSTTEKST</p>`;
}

elem.innerHTML += paragraf("red");
elem.innerHTML += paragraf("blue");
elem.innerHTML += paragraf("orange");

function paragraf2(boja, tekst){
    return `<p style="color: ${boja}">${tekst}</p>`;
}

elem.innerHTML += paragraf2("green", "Lorem ipsum...");
elem.innerHTML += paragraf2("yellow", "Magna turba in via est");

// Zadatak 7

function paragraf3(velicina, tekst){
    return `<p style="font-size: ${velicina}px">${tekst}</p>`;
}

elem.innerHTML += paragraf3(23,"JEDAN DVA TRI CETIRI")
elem.innerHTML += paragraf3(32,"JEDAN DVA TRI CETIRI PET SEST");

// Zadatak 8
function pisiPetParagrafa(){
    let res = "";
    for(let i = 1; i <= 5;i++){
        let j = i * 10;
        res = res + `<p style="font-size: ${j}px">Neki tekst</p>`;
            
    }
    return res;
}

elem.innerHTML += pisiPetParagrafa();