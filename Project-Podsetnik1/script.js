let ulTasks = document.querySelector("ul");
let liTasks = document.querySelectorAll("li");

liTasks.forEach(elem => {
    elem.addEventListener("click", () => {
        if (elem.style.textDecoration == "line-through" && elem.style.opacity == 0.5){
            elem.style.textDecoration = "none";
            elem.style.opacity = 1;
        }
        else {
            elem.style.textDecoration = "line-through";
            elem.style.opacity = 0.5;
        }
    });
});
