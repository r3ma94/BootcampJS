let ulTasks = document.querySelector("ul");
let liTasks = document.querySelectorAll("li");
let btnAdd = document.querySelector("button");
let inputField = document.querySelector("#fillOut");


/*
liTasks.forEach(elem => {
    elem.addEventListener("click", (e) => {
        //elem.remove(); - isto je kao i linija ispod
        e.target.remove();
        console.log("Kliknuto na list item");
        e.stopPropagation(); - ne poziva dalje roditeljski element

    });
});
*/
ulTasks.addEventListener("click", (e) => {
    //console.log("Kliknuto na ul");
    //console.log(e.target.tagName);
    if (e.target.tagName == "LI") {
        e.target.remove();
    }


});

let addingItems = () => {
    let noviZadatak = document.querySelector("input").value;
    let rabBegin = document.getElementById("addToBeginning");
    
    if(noviZadatak == ""){
        alert("Polje je prazno");
    }
    else {
        // Kreairanje nove obaveze
        let noviItem = document.createElement("li");
        noviItem.textContent = noviZadatak;
        if(rabBegin.checked){
            ulTasks.prepend(noviItem);
        }
        else {
            ulTasks.append(noviItem);
        }
        //ulTasks.appendChild(noviItem); - Na kraju liste
        //ulTasks.prepend(noviItem); // - Na pocetak liste
    }    
    // Brisanje iz input polja
    document.querySelector("input").value = "";
};

btnAdd.addEventListener("click", () => {
    addingItems();
    
    
});

inputField.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
        addingItems();
    }
});


