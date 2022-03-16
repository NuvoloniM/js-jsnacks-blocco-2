/*
Snack4 (Bonus)
Crea due array che hanno un numero di elementi diversi.  
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

//creo due array
let listA = ["mele", "pere", "banane", "fragole", "more", "lamponi", "ananas"];
let listB = ["rosso", "blu", "giallo", "grigio", "rosa"];

//mi chiedo se list a > b
if (listA.length > listB.length) {
    // imposto x come la differenza tra le due lunghezze => sarà per quante volte ripeto il ciclo
    let x = listA.length - listB.length
    for (let i = 0; i < x; i++) {
        //chiedo cosa inserire nella lista più corta
        element = prompt('Scrivi un elemento da inserire in una lista');
        listB.push(element);
    }
    //ripeto nel caso opposto
} else {
    let x = listB.length - listA.length
    for (let i = 0; i < x; i++) {
        element = prompt('Scrivi un elemento da inserire in una lista');
        listA.push(element);
    }
    
}

console.log(listA);
console.log(listB);