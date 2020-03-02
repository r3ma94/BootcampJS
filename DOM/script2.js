// Roditelj element

let par = document.querySelector("p");
console.log(par.parentElement); // div
console.log(par.parentElement.parentElement); // body

// Kolekcija svih deteta roditelja paragrafa
console.log(par.parentElement.children);

// Braca/sestre elementi
console.log(par.nextElementSibling);
console.log(par.previousElementSibling);
console.log(par.parentElement.nextElementSibling.children[1]);
console.log(par.parentElement.parentElement.previousElementSibling);

// par.children - kolekcija HTML tagova (deca paragrafa u ovom slucaju)
// par.cihldren[0] - Jedan tag - prvo dete paragrafa
// par.children[1] - Jedan tag - drugo dete paragrafa
// Za kolekciju je moguce koristiti for petlju
let div = par.parentElement;
let decaDiva = div.children; // kolekcija
for(let i = 0; i < decaDiva.length; i++){
    console.log(decaDiva[i]);
}
//Skraceno
for(let i = 0; i < par.parentElement.children.length; i++){
    console.log(par.parentElement.children[i]);
}

// Kod HTML kolekcija ne radi forEach petlja:
/*
par.parentElement.children.forEach(d =>{
    console.log(d);
});
*/
// Ukoliko zelimo forEach petlju kod kolekcija,
// moramo kolekciju da konvertujemo u niz:
let niz = Array.from(par.parentElement.children);
niz.forEach(elem =>{
    console.log(elem);
});

// Dohvatanje atributa

let link = document.querySelector("a");
console.log(link.getAttribute("href"));

// Postavljanje atributa

link.setAttribute("href", "http://www.wikipedia.com");
// Ako vrednost atributa vec postoji, ona se menja
link.setAttribute("id","link1");
console.log(link.getAttribute("href"));
link.innerText = "Wikipedia";
console.log(link);

// Svi linkovi se otvaraju u novom tabu
let sviLinkovi = document.querySelectorAll("a");
sviLinkovi.forEach(elem =>{
    elem.setAttribute("target","_blank");
});

// Sve slike imaju alt text
let sveSlike = document.querySelectorAll("img");
sveSlike.forEach(elem =>{
    elem.setAttribute("alt","Neki tekst")
});

// Sve paragrafe farbamo u ljubicasto
let sviPar = document.querySelectorAll("p");
sviPar.forEach(elem =>{
    elem.setAttribute("style","color: purple;");

});

// Farbamo parne paragrafe u zelenu a neparne u crvenu
sviPar.forEach((elem, i) =>{
    if(i%2 == 0){
       /* elem.setAttribute("style","color: green");
        elem.setAttribute("style","background-color: aqua")
        */
       elem.style.color = "green";
       elem.style.padding = "15px";
       elem.style.backgroundColor = "aqua";
    }
    else {
        elem.setAttribute("style","color: red");
    }
});



sviLinkovi.forEach((elem, i) =>{
    elem.style.padding = "5px";
    elem.style.fontSize = "18px";
    elem.style.textDecoration = "none";
    if (i % 2 == 0) {
        elem.style.backgroundColor = "green";
        elem.style.color = "purple";
    }
    else {
        elem.style.backgroundColor = "blue";
        elem.style.color = "white";
    }
    
});

sviPar.forEach((elem, i) =>{
    elem.style.padding = "5px";
    elem.style.fontSize = "18px";
    elem.style.textDecoration = "none";
    if (i % 2 == 0) {
        elem.style.backgroundColor = "green";
        elem.style.color = "purple";
    }
    else {
        elem.style.backgroundColor = "blue";
        elem.style.color = "white";
    }

});
par.classList.add("error") // Dodeljivanje klase paragrafu

sviPar.forEach((elem, i) =>{ 
    if (i % 2 == 0){
        elem.classList.add("error");
    }
    else {
        elem.classList.add("success");
    }
    

});

sviPar.forEach((elem, i) =>{ 
    if (i % 3 == 0){
        elem.style.fontSize = "15px";
    }
    else if(i % 3 == 1) {
        elem.style.fontSize = "20px";
    }
    else {
        elem.style.fontSize = "25px";
    }
    

});
console.log(sviPar);

//

sviPar.forEach(elem =>{
    if(elem.textContent.includes("error")){
        elem.classList.add("error");
    }
    else if (elem.textContent.includes("success")){
        elem.classList.add("success");
    }
});

console.log(sviPar);

sviPar.forEach(elem =>{
    if (elem.classList.contains("error")){
        elem.classList.remove("error");
    }
    else {
        elem.classList.add("error");
    }

});

console.log(sviPar);



//Dodati novi div tag dokumentu
let div2 = document.createElement("div2");
div2.innerText = "Pridodati div";
document.body.appendChild(div2);

// Formiratu ul listu sa stavkama ciji je sadrzaj proizvoljan tekst i dodati je div elementu
let lista1 = document.createElement("ul");
let li1 = document.createElement("li");
li1.innerText = "Prvi item";

let li2 = document.createElement("li");
li2.innerText = "Drugi item";

let li3 = document.createElement("li");
li3.innerText = "Treci item";

let divLista = document.getElementById("lista");
divLista.appendChild(lista1);
lista1.appendChild(li1);
lista1.appendChild(li2);
lista1.appendChild(li3);
/*
// Brisanje prvog elementa
// 1. Nacin
//lista1.removeChild(lista1.firstChild);
// 2. Nacin
lista1.removeChild(lista1.childNodes[0]);
// Brisanje poslednjeg elementa iz liste:
lista1.removeChild(lista1.lastChild);

*/
let liPom = document.createElement("li");
liPom.innerText = "***"

// Zameniti drugu stavku liste
lista1.replaceChild(liPom, lista1.childNodes[1]);














