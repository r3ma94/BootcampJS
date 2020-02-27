
/*
console.log("Zdravo")

// Zadatak 1.
let i = 1;
while(i <= 20) {
    console.log(i);
    i++; // ili i+1; ili i+=1;
}
console.log("svete!")

*/

// Zadatak 2. (Od 1 do 20 u istoj liniji)
/*
let i = 1;
let rez = "";
while(i <= 20) {
    rez = rez + i + " "; // rez +=
    i++; // ili i+1; ili i+=1;
}
console.log(rez);

// Zadatak 3. (od 20 do 1)
let j = 20;
while(j >= 1) {

    console.log(j);
    j--; // ili j-=1; ili j-1;
    
}

// Zadatak 4. (Ispisati parne brojeve od 20 do 1)

j = 20;
while(j >= 2) {

    console.log(j);
    j -= 2;
    
}

// Zadatak 4.1 (Ispisati parne brojeve od 1 do 20 koji su deljivi sa 3 ali nisu sa 9)

i = 1;
while (i <= 20) {
    if (i %3 == 0 && i %9 != 0){
        console.log(i);
    }
    i++;
}

// Zadatak 6. (Odrediti sumu brojeva od 1 do 100)

let i = 1;
let s = 0; // neutral za sabiranje; pocetna vrednost;
while(i <= 100){
    s += i;
    i++;
}

console.log(s);


// Zadatak 6.1 (Suma parnih brojeva od 1 do 100)
let s = 0;
let i = 2;
while(i <= 100) {
    if(i%2 == 0){
        s += i; // s = s + 1;
        
    }
    i++; // i+=1; 
}

console.log(s);

// Zadatak 7. (Suma brojeva od 1 do n)
let i = 1;
let n = 10;
let s = 0;
while(i <= n) {
    s += i; // s = s + i;
    i++; // i++; i=i+1;
}
console.log(s);

console.log(n*(n+1)/2);

// Zadatak 8 (Odrediti sumu brojeva od n do m)
let n = 5;
let m = 10;
let s = 0;
let i = n;
while(i <= m){
    s += i; // s = s + m;
    i++; // n = n + 1;
}
console.log("Suma brojeva od " + n + " do " + m + " je " + s);

// Zadatak 9 (Proizvod od n do m)
let n = 1;
let m = 5;
let i = n;
let p = 1; // neutral za mnozenje je 1
while(i <= m){
    p *= i; // p = p * i;
    i++;

}
console.log(p);

// 9.1 Proizvod svakog drugog broja od n do m
let n = 1;
let m = 5;
let i = n;
let p = 1; // neutral za mnozenje je 1
while(i <= m){
    p *= i; // p = p * i;
    i = i + 2; // i+=2;
    

}
console.log(p);

// 10. Odrediti sumu kvadrata od n do m
let n = 1;
let m = 5;
let i = n;
let s = 0;
while(i <= m) {
    s = s + i**2; // s = s + i * i;
    i++;
}
console.log(s);

*/

// 11. Odrediti sa koliko brojeva je deljiv uneti broj k
let k = 15;
let i = 1;
let br = 0;
while(i <= k){
    if(k%i == 0){
        br++; // br+=1

    }
    i++;
}
console.log(br);



/*
15 /1
15 /3
15 /5
15 /15
*/
