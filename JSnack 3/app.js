/*
Snack3
Crea un array di numeri interi e fai la somma di tutti gli elementi 
che sono in posizione dispari
*/

//creo un array

let list = [2,5,7,12,34,26,45,33,21,39,1,23];

let sum = 0;

//creo un ciclo for partendo da i = 1(dispari) e ogni ciclo aumento di 2 così da rimanere sempre dispari
for (let i = 1; i < list.length; i += 2) {
    sum += list[i];
}

console.log(sum);
