/*
Snack2
Generatore di “nomi cognomi” casuali: 
il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

//genero due array 
let nomi = ["Matteo", "Luca", "Alessia", "Giovanna", "Andrea", "Giuseppe", "Alessio", "Chiara" ];
let cognomi = ["Nuvoloni", "Rossi", "Bianchi", "Gialli", "Faraldi","Petruzzi", "King", "Samsung"];

//creo array vuoto che conterrà i risultati
let clients = [];

for (let i = 0; i < 8; i++) {
    clients.push(nomi[i] + " " + cognomi[i]);
}

console.log(clients);

//provo a scegliere combinazioni casuali e eliminare gli elementi usciti
let clients2 = [];

for (let i = nomi.length; i > 0; i--) {
    let x = Math.floor(Math.random() * (nomi.length));
    let y = Math.floor(Math.random() * (nomi.length));
    clients2.push(nomi[x] + " " + cognomi[y])
    nomi.splice(x,1);
    cognomi.splice(y,1);
}

console.log(clients2);
console.log(nomi);
console.log(cognomi);