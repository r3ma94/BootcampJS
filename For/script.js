
let i;
/*
for(i = 0; i <= 10; i++) {
    console.log("Naredu je broj: " + i)
}

// Zadatak 1
let i;
for (i = 1; i <= 20; i++) {
    
}


// Zadatak 2 
for (i = 20; i >= 1; i--) {
    
}


// Zadatak 3 - Ispisati parne brojeve od 1 do 20

for (i = 1; i <= 20; i++) {
    if (i%2 == 0) {
        console.log(i)
    }
}


// Zadatak 4.

for (i = 5; i <= 15; i++){
    console.log(2*i);
}

// Zadatak 5.
let s = 0;
for (i = 1; i <= 100; i++) {
    s = s + i;
    
}
console.log(s);

// za uneti proizvod mnoziti brojeve od 1 pa redom, tako da ne predjete uneti proizvod p
let p = 15;
i = 1;
let br = 0;
let pom_p = 1;
while(pom_p < p) {
    pom_p *= i;
    i++;
    br++;

    
    
}
console.log(br - 1);


// Zadatak 6. ( do n)
i = 1;
let s = 0;
let n;
for (i = 1; i <= n; i++) {
    s = s + i;
    

}
console.log(s);

// Zadatak 7. ( od n do m)
let n = 10;
let s = 0;
let m = 200;
for (i = n; i <= m; i++) {
    s += i;
}

console.log(s);

// Zadatak 8.
let n = 5;
let m = 10;
let p = 1;
for (i = n; i <= m; i++) {
    p *= i;
}
console.log(p);



// Zadatak 12. - Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.
let p = 1;
for(i = 20; i <= 100; i++) {
    if (i%11 == 0) {
        p = p * i;
    }
}
console.log(p);

// Zadatak 13. - Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
let br = 0;
for(i = 5; i <= 150; i++){
    if (i%13 == 0){
        br++;
    }
}
console.log(br);


// Zadatak 14. - Ispisati aritmetičku sredinu brojeva od n do m.
let n = 5;
let m = 10;
let s = 0;
let br = 0;
for(i = n; i <= m; i++){
    s += i;
    br++;
}
let arsr = s/br;
console.log(arsr);

// Zadatak 15.
let n = -7;
let m = 13;
let poz = 0;
let neg = 0;
for(i = n; i <= m; i++) {
    if (i >= 0) {
        poz++;
    }
    else {
        neg++;
    }


}
console.log(poz);
console.log(neg);

// Zadatak 16.
let br = 0;
for(i = 5; i <= 50; i++) {
    if (i%3 == 0 || i%5 ==0) {
        br++;
    }
   

}
console.log(br);

// Zadatak 17.
let n = 10;
let m = 45;
let br = 0;
let s = 0;
for(i = n; i <= m; i++) {
    let cifra = i % 10;
    if (cifra == 4){
        br++; // br += 1; // br = br+1;
        s = s + i; //s =+ i;


    }
}
console.log(br);
console.log(s);

// Zadatak 21. Odrediti proizvod brojeva od n do m koji su deljivi brojem a
let n = 11;
let m = 30;
let a =  10;
let p = 1;
for (i = n; i <= m; i++){
    if (i%a == 0) {
        p = p * i;

    }
}
console.log(p);

// Zadatak 10. 
// Tri slicice
let div = document.getElementById("slika");
for (i = 1; i <= 10; i++) {

    div.innerHTML += "<img src=images/" + i + ".png><br>";

}
*/
//(Tri slicice naizmenicno)
let div = document.getElementById("slika");
for (i = 1; i <= 10; i++) {
    if(i%3 == 1) {
        div.innerHTML += "<img src=images/1.png>"
    }
    else if (i%3 == 2) {
        div.innerHTML += "<img src=images/2.png>"
    }
    else {
        div.innerHTML += "<img src=images/3.png>"
    }

}
