import createDiv from "./modules/result_div.js";
import {tacniOdgovori, calculateScore} from "./modules/answers.js";

import generateScore from "./modules/clock.js";



let form = document.querySelector("form");


let [div, h2] = createDiv("intro", document.body, document.body.children[1]);

form.addEventListener("submit", event =>{
    event.preventDefault();

    // Potrebno je odrediti koji radio je selektovan
    // Generalni nacin:
    /*
    let radios = document.querySelectorAll(".q1");
    radios.forEach(radio =>{
        if(radio.checked == true){
            console.log(radio.value);
        }
    });
    */
   // Za forme:
   // 1) U JS kodu - objekat forme (promenljiva form)
   // 2) Svi elementi forme u HTML-u moraju da imaju name atribut
   let odg1 = form.q1.value; // value cekiranog radio buttona
   let odg2 = form.q2.value;
   let odg3 = form.q3.value;
   let odg4 = form.q4.value;
   let name = form.q5.value;
  
   console.log(odg1, odg2, odg3, odg4);
   let odgovori = [odg1, odg2, odg3, odg4];
   let score = calculateScore(odgovori, name);
   console.log(score);
   div.style.display = "block";
   scrollTo(0,0);
   //
   generateScore(h2, score);

   
});