export class Chatroom {

    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection("chats")
        this.unsub;
    }
    set username(u){
        this._username = u;
    }
    set room(r){
        this._room = r;
    }
    get username(){
        return this._username;
    }
    get room(){
        return this._room;
    }

    async addChat(mess){

        //Dohvatanje tekuceg datuma koji je potreban za timestamp
        let date = new Date();

        //Kreiranje objekta (dokumenta) koji prosledjujemo bazi podataka
        let docChat =  {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };

        // Da sacuvamo dokument u bazi
        let response = await this.chats.add(docChat);
        return response;
    }

    getChats(callback){
        this.unsub = this.chats
            .where("room","==", this.room)
            .orderBy("created_at")
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach( change =>{
                    //Ako je poruka dodata u bazu onda raditi update
                    if( change.type === "added"){
                        //uradi update
                        callback(change.doc.data());
                    }
                });
            });
    }
    updateUsername(uu){
        //Sustinski menja samo vrednost lokalne promenljive, ne menja vrednost username u bazi podataka
        this.username = uu;
        localStorage.setItem("usernameLS", uu)
    }

    updateRoom(ur){
        this.room = ur;
        //console.log("Updated room");
        if(this.unsub) {
            this.unsub();
        }
    }

}

// Nova instanca klase(Novi objekat)

//let chatroom = new Chatroom("js", "MM");
//console.log(chatroom);
/*
chatroom.addChat("Zdravo!")
.then(() => {
    console.log("Chat je dodat!");
})
.catch(error => {
    console.error(error);
})


chatroom.getChats(data => {
    console.log(data);
});


chatroom.updateRoom("general");



chatroom.updateRoom("js");


chatroom.getChats(data => {
    console.log(data);
});
*/
/*
setTimeout(() => {
    chatroom.updateRoom("js");
    chatroom.updateUsername("Tina");
    chatroom.getChats(data => {
        console.log(data);
    });
    chatroom.addChat("Kako si Milice?")
}, 3000);

*/