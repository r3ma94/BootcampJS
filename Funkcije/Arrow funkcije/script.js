let suma = function(a, b){
    let s = a + b;
    return s;
}

let suma2 = (a, b) => {
    return a + b;
}

console.log(suma(2, 5));
console.log(suma(9, 4));
console.log(suma2(10, 10));

let hello = () => {
    console.log("Hello World");
}

hello ();


let echo = (s1, s2) => {
    let s = s1 + ", " + s2;
    console.log(s);
}
echo("Marko", "Milovanovic");
echo("Jen", "dva");


// 3. Zadatak
let neparan = (n) => {
    if (n%2 == 0) {
        return true;
    }
    else {
        return false;
    }

}

console.log(neparan(11));

// 4. Zadatak
let maks2 = (a, b) => {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(maks2(2, 5));

let max4 = (a, b, c, d) => {
    let max1 = maks2 (a, b);
    let max2 = maks2 (c, d);
    let max3 = maks2 (max1, max2);
    return max3;

}

console.log(max4(1, 3, 5, 8));


// 10. Zadatak
let deljivSaTri = (n, m) => {
    let br = 0;
    for (let i = n; i <= m; i++) {        
        if (i%3 == 0) {
            br++;
        }

    }
    return br;
}
console.log(deljivSaTri(1, 15));

// 5. Zadatak

let slika = (putanja) => {
    return `<img src="${putanja}" alt="blabla">`;
}

// 1) Telo arrow funckije se sastovi samo od return naredbe
let slika2 = (putanja) => `<img src="${putanja}" alt="blabla">`;

let div = document.getElementById("blabla");
div.innerHTML = slika2("images/1.png");
// 2) Arrow funkcija prima JEDAN parametar

let slika3 = putanja =>  `<img src="${putanja}" alt="blabla">`;
div.innerHTML += slika3("images/1.png");

let sledbenik = n => n + 1;
console.log(sledbenik(6));

