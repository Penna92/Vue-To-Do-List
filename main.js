
const toDoList = new Vue({
    el: "#list",
    data: {
        roma: [
            {
                id: 1,
                check: false,
                nomeAttrazione: "Colosseo",
                distanzaHotel: 120,
            },
            {
                id: 2,
                check: false,
                nomeAttrazione: "Musei Vaticani",
                distanzaHotel: 750,
            },
            {
                id: 3,
                check: false,
                nomeAttrazione: "Basilica di San Pietro",
                distanzaHotel: 300,
            },
            {
                id: 4,
                check: false,
                nomeAttrazione: "Pantheon",
                distanzaHotel: 100,
            },
            {
                id: 5,
                check: false,
                nomeAttrazione: "Catacombe di Roma",
                distanzaHotel: 500,
            },
            {
                id: 6,
                check: false,
                nomeAttrazione: "Foro Romano",
                distanzaHotel: 700,
            },
            {
                id: 7,
                check: false,
                nomeAttrazione: "Villa Borghese",
                distanzaHotel: 260,
            },
            {
                id: 8,
                check: false,
                nomeAttrazione: "Castel Sant'Angelo",
                distanzaHotel: 1000,
            },
            {
                id: 9,
                check: false,
                nomeAttrazione: "Piazza San Pietro",
                distanzaHotel: 450,
            },
            {
                id: 10,
                check: false,
                nomeAttrazione: "Palatino",
                distanzaHotel: 150,
            },
        ],
        nuovaAttrazione: "",
        attrazioneRimossa: "",
    },
    methods: {
        aggiungi(){
            const attrazione = {
                check: false,
                nomeAttrazione: this.nuovaAttrazione
            }
            this.roma.push(attrazione);
            this.nuovaAttrazione="";
        },
        rimuovi(i){
            this.roma.splice(i, 1);
        },
        removeLastElement(){
            this.attrazioneRimossa = this.roma.pop()
            console.log(this.attrazioneRimossa, this.roma.length)
        }
    }
})