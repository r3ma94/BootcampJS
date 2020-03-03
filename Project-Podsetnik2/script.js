let ulTasks = document.querySelector("ul");
let liTasks = document.querySelectorAll("li");

liTasks.forEach(elem => {
    elem.addEventListener("click", (e) => {
        //console.log(e.target);
        if(e.target.style.textDecoration == "line-through" && e.target.style.opacity == 0.5){
            e.target.style.textDecoration = "none";
            e.target.style.opacity = 1;
        }
        else {
            e.target.style.textDecoration = "line-through";
            e.target.style.opacity = 0.5;
        }



    });
});
