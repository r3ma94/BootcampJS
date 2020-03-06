let forma = document.querySelector("#login-form");
let inputUsername = document.querySelector("#username");
let btnSubmit = document.querySelector("#submit");
let divError = document.querySelector("#error");
let patternUsername = /^[a-zA-Z0-9]{5,15}$/;

inputUsername.addEventListener("keyup", e =>{
    if(patternUsername.test(inputUsername.value)){
        inputUsername.setAttribute("class","success");
    }
    else {
        inputUsername.setAttribute("class","error");  
    }
});

forma.addEventListener("submit", e => {
    e.preventDefault();

    //let patternUsername = /zdravo/i; // da li sadrzi rec zdravo
    
    let username = inputUsername.value;
    
    if(patternUsername.test(username)){
        divError.textContent = `Podaci ispravno uneti. Vas username je: ${username}`;
    }
    else {
        divError.textContent = "Username sme sadrzati samo slova ili brojeve i biti izmedju 5 i 15 karaktera";
    }
    //console.log(username);
});