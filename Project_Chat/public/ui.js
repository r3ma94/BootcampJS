export class ChatUI{
    constructor(l){
        this.list = l;

    }

    set list(l){
        this._list = l;
    }

    get list(){
        return this._list;
    }
    formatDate(date){
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        //Dodavanje 0 ispred jednocifrenih vrednosti
        day = String(day).padStart(2, "0");
        month = String(month).padStart(2, "0");
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");


        let strDate = day + "." + month + "." + year + ". - " + hours + ":" + minutes;
        
        return strDate;
    }

    //Metod koji pravi osnovu za prikaz list itema
    //Data koji prosledjujemo je objekat tj. dokument iz baze
    templateLI(data){     
        let date = data.created_at.toDate();
        let strDate = this.formatDate(date);


        let htmlLI = `<li `;
        if(data.username == localStorage.usernameLS){
            htmlLI += `class="me">`;
        }
        else {
            htmlLI += `class="not-me">`;
        }

        htmlLI +=
        `   <span class="username"> ${data.username} : </span>
            <span class="message"> ${data.message}</span>
            <div class="date">${strDate}</div>
        </li>`;
        this.list.innerHTML += htmlLI;
        this.list.scrollTop = this.list.scrollHeight;
    }
    clear(){
        this.list.innerHTML = ``;
    }
}