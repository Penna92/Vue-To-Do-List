// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

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
    aggiungi() {
      const attrazione = {
        check: false,
        nomeAttrazione: this.nuovaAttrazione,
      };
      this.roma.push(attrazione);
      this.nuovaAttrazione = "";
    },
    rimuovi(i) {
      this.roma.splice(i, 1);
    },
    removeLastElement() {
      this.attrazioneRimossa = this.roma.pop();
      console.log(this.attrazioneRimossa, this.roma.length);
    },
  },
});
