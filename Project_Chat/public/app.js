// Moduli
import {Chatroom} from "./chat.js"
import {ChatUI} from "./ui.js"

// DOM
let chatlist = document.querySelector("#ulMessages");

let formMessage = document.querySelector("#formMessage");
let inputMessage = document.querySelector("#inputMessage");

let formUsername = document.querySelector("#formUsername");
let inputUsername = document.querySelector("#inputUsername");

let patternUsername = /^[a-zA-Z0-9_][a-zA-Z]+[0-9]*$/;

let rooms = document.querySelector("nav");

let updatedUsername = document.querySelector("#divUpdatedUsername");

let buttons = document.querySelectorAll("button");

// Provera username-a u lokalnoj memoriji
let checkUsername = () => {
    if(localStorage.usernameLS){
        return localStorage.usernameLS;
    }
    else {
        return "anonymous";
    }
}

// Kreiranje instanci klasa
let chatroom = new Chatroom("general", checkUsername());
let chatui = new ChatUI(chatlist);

// Provera prilikom ucitavanja stranice
// Koja soba je bila poslednja posecena, nju ucitati
let checkRoom = () =>{
    if(localStorage.roomLS){
        return localStorage.roomLS;
    }
    else {
        return "general";
    }
}
chatroom.updateRoom(checkRoom());

// Poslednoj posecenoj sobi dodati klasu koja ce da oboji to dugme
buttons.forEach(b => {
    if(b.id == checkRoom()){
        b.classList.add("btn-selected");
    }
});


// Ispisi poruka
chatroom.getChats( data => {
    //console.log(data);
    chatui.templateLI(data);
});


//Kada je submit dugme Send posalji poruku
formMessage.addEventListener("submit", e => {
    e.preventDefault();
    let message = inputMessage.value;
    chatroom.addChat(message)
    .then(() => {
        formMessage.reset();
    })
    .catch(error => {
        console.error(error);
    });
    
});

//Kada je submit dugme update izmeni koriscnicko ime
formUsername.addEventListener("submit", e => {
    e.preventDefault();
    let newUsername = inputUsername.value;

    // Testiramo da li je username odgovarajuci:
    if(patternUsername.test(newUsername)){
        chatroom.updateUsername(newUsername);
        formUsername.reset();
    }
    else {
        alert("Invalid username!");
    }
    

    // Osveziti chat prilikom promene korisnickog imena tako sto ga izbrisemo i ucitamo ponovo
    chatui.clear();
    chatroom.getChats(data =>{
        chatui.templateLI(data);
    });


    // Kada je update ime prikazati poruku u trajanju od 3s
    updatedUsername.innerHTML = `Your username was updated to <span id="spanNewUsername">${newUsername}</span>`;
    setTimeout( () =>{
        updatedUsername.innerHTML = ``;
    }, 3000);
    
});

// Promena sobe
rooms.addEventListener("click", e => {
    if(e.target.tagName == "BUTTON"){
        // - Kada je kliknuto na dugme, dodeliti mu klasu da je bas ono selektovano
                
        buttons.forEach(b => {
            // 1. "Ocistiti" dugme od btn-selected klase
            if(b.classList.contains("btn-selected")){
                b.classList.remove("btn-selected");
            }
            
        });
        let btnId = e.target.getAttribute("id");
        let btn = document.getElementById(btnId);
       
        btn.classList.add("btn-selected");        
            
        
        // -Izbrisati sve poruke sa stranice
        chatui.clear();

        // -Promeniti sobu
        let newRoom = e.target.getAttribute("id");
        chatroom.updateRoom(newRoom);
        localStorage.setItem("roomLS", newRoom);

        // - Ucitati poruke za promenjenu sobu
        chatroom.getChats(data => {
            //console.log(data); // u konzoli
            chatui.templateLI(data);
        });
    }
});