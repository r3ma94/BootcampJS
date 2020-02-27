// Kreiranje objekta BLOG

let blog = {
    title: "Moj blog",
    content: "Tekst",
    author: "MM"
};

console.log(blog);
console.log(typeof 5);
console.log(typeof "Asdfg");
console.log(typeof true);
console.log(typeof blog);

// Pristup osobinama objekta
//1. Nacin
console.log(blog.title);
//2. Nacin
console.log(blog["title"]);

// Izmena osobina objekta
//1. Nacin
blog.content = "Neki tekst";
console.log(blog.content);

// 2. Nacin
blog["title"] = "Moj prvi blog!!!";
console.log(blog.title);

// Napravimo 3 objekta:
let blog1 = {
    title: "Blog 1!",
    content: "Tekst 1",
    likes: 0,
    dislikes: 50
};

let blog2 = {
    title: "Blog 2!!",
    content: "Tekst 2",
    likes: 20,
    dislikes: 20

};

let blog3 = {
    title: "Blog 3?",
    content: "Tekst 3",
    likes: 5,
    dislikes: 50

};

let user = {
    username: "JohnDoe",
    age: 30,
    blogs:["Title 1", "Title 2", "Title 3"],
    login: function(){ // Funkcija u objektu = METOD!
        console.log("Ulogovani ste.")
    },
    logBlogs: function(){
        this.blogs.forEach(b =>{
            console.log(`Naslovi blogova su: ${b}`);

        });
            
    }

};

let arrBlogs = user.blogs;
// Ispis niza blogova
for(let i = 0; i < arrBlogs.length; i++){
    console.log(`Naslov bloga je : ${arrBlogs[i]}`);
}

// Ispis niza bloga foreach metodom
arrBlogs.forEach(blog =>{
    console.log(`Naslov je: ${blog}`);

});

// FUNKCIJA U OBJEKTU SE NAZIVA METOD!

user.login(); // Poziv metoda iz objekta

user.logBlogs(); // Poziv property-a unutar metoda

// Niz objekata
let blogs = [blog1, blog2, blog3];

// Kretanje FOR petlom

for(let i = 0; i < blogs.length; i++){
    console.log(blogs[i].title);
}




// Iteracija forEach nizom objekata - ispisivanje celih objekata
blogs.forEach( blog => {

    console.log(blog);

});

// Iteracija forEach nizom objekata - ispisivanje naslova

blogs.forEach(blog =>{
    console.log(blog.title);
});




//                           VEZBANJE

//Napraviti arrow funkciju kojoj se prosleđuje niz
//objekata, a ona vraća ukupan broj lajkova

let ukupnoLajkova = blogs =>{
    let ukupno = 0;
    blogs.forEach( elem =>{
        ukupno += elem.likes;
    
    });
    return ukupno;
};
console.log(ukupnoLajkova(blogs));



//Napraviti arrow funkciju kojoj se prosleđuje niz
//objekata, a ona vraća prosečan broj lajkova
let prosekLajkova = blogs =>{
    let ukupno = ukupnoLajkova(blogs);
    let broj = blogs.length;
    let avg = ukupno / broj;
    return avg;
    
};
// Prosecno dislajkova
let prosekDislajkova = blogs =>{
    let ukupno = 0;
    blogs.forEach( x => {
        ukupno += x.dislikes;

    });
    let broj = blogs.length;
    let avg = ukupno / broj;
    return avg;
    
};



console.log(prosekLajkova(blogs));

//Napraviti arrow funkciju kojoj se prosleđuje niz
//objekata, a ona ispisuje sve one naslove blogova koji
//imaju više pozitivnih nego negativnih ocena

let visePozitivnih = blogs =>{
    blogs.forEach( elem => {
        let poz = elem.likes;
        let neg = elem.dislikes;
        if(poz > neg){
            console.log(elem.title);
        }

    });

};

visePozitivnih(blogs);

//Napisati arrow funkciju kojoj se prosleđuje niz objekata
//a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = blogs =>{
    blogs.forEach( blog => {
        let naslov = blog.title;
        if(naslov.endsWith("!")){
            console.log(naslov);
        }
    });
};

uzvicnik(blogs);

let user1 = {
    username: "MarkoMilovanovic",
    age: 25,
    blogs: [blog1, blog2, blog3],

    logBlogs: function(){
        this.blogs.forEach( b => {
            console.log(b);
        

        });
    },

    logTitleBlogs: function(){
        this.blogs.forEach(b => {
            console.log(b.title)
        });
    }
};

console.log(user1);

user1.logBlogs();

user1.logTitleBlogs();


//              VEZBANJE

//Napraviti niz korisnika gde svaki od korisnika sadrži niz
//blogova. Svaki blog u ovom nizu je objekat.

let user2 = {
    username: "JaneDoe",
    age: 16,
    blogs: [blog1, blog2]
};
console.log(user2);

let user3 = {
    username: "JasonDoe",
    age: 27,
    blogs: [blog1, blog3]
};
console.log(user3);

// Niz korisnika
let users = [user1, user2, user3];

//Ispisati imena onih autora koji imaju ispod 18 godina

let ispis = k => {
    k.forEach( elem => {
        let god = elem.age;
        if(god < 18){
            console.log(elem.username);
        }    
    });    
};

ispis(users);

//Ispisati naslove onih blogova koji imaju više od 50
//lajkova

let popularniBlogovi = k => {
    k.forEach( elem =>{
        let nizBlogova = elem.blogs;
        nizBlogova.forEach( b => {
            let lajkovi = b.likes;
            if(lajkovi > 50){
                console.log(b.title);
            }

        });
    });
};

popularniBlogovi(users);

// Ispisati sve blogove autora čiji je username ’JaneDoe’
let blogoviAutora = (korisnici, ime) =>{
    korisnici.forEach( k => {
        // Ako je korisnik "..." tek onda ispisati njegove blogove
        if(k.username == ime){
            let nizBlogova = k.blogs;
            nizBlogova.forEach( b => {
                console.log(b.title);
            });
        }

    });
};

blogoviAutora(users, "JasonDoe");

// Ispisati imena onih autora koji imaju ukupno više od 200
// lajkova za blogove koje su napisali


let popularniAutori = autor => {
    
    autor.forEach( a => {
        let nizBlogova = a.blogs;
        let sumLikes = 0;
        nizBlogova.forEach( b => {
            sumLikes += b.likes;
        });
        if (sumLikes > 200){
            console.log(a.username);
        }
    });

};
popularniAutori(users);


let popularniAutori2 = autor => {
    
    autor.forEach( a => {
        let nizBlogova = a.blogs;
        let sumLikes = ukupnoLajkova(nizBlogova);
        
        if (sumLikes > 200){
            console.log(a.username);
        }
    });

};
popularniAutori2(users);


//Ispisati naslove onih blogova koji imaju natprosečan broj
//pozitivnih ocena i ispodprosečan broj negativnih ocena

let superBlog = niz => {

    let sum = 0; // suma svih lajkova svih blogova
    let sumDis = 0; // suma svih dislajkova svih blogova
    let br = 0; // broj svih blogova
    
    // Ukupno lajkova, dislajkova i blogova
    niz.forEach( a => {
        let nizBlogova = a.blogs;
        nizBlogova.forEach( b => {
            br++;
            sum += b.likes;
            sumDis += b.dislikes;

        });

    });

    let avgLikes = sum / br;
    let avgDislikes = sumDis / br;

    niz.forEach( a => {
        let nizBlogova = a.blogs;
        nizBlogova.forEach( b => {
            if(avgLikes < b.likes && avgDislikes > b.dislikes){
                console.log(b.title);
            }
        });
    });

};

superBlog(users);








