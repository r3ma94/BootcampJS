// Modul answers.js

let tacniOdgovori = ["B","A","B","B",];

let calculateScore = (odgovori, name) => {
    let score = 0;
    odgovori.forEach((odgovor, index) => {
        if(odgovor == tacniOdgovori[index]){
            score += 20;
        }
   });
   let granica = 6;
   if (name.length >= granica) {
        score += 20;
   }
   return score;
}

export {tacniOdgovori, calculateScore};