/*
Snack1
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
*/

//chiedo un numero a caso 
let num = parseInt(prompt('Inserisci il primo numero che ti viene in mente'));

//target html
let result = document.getElementById('result');

//stampo
if (isNaN(num) == true || num == '') {
    alert('Ti ho chiesto un numero!')
} else if(num % 2 == 0){
    result.innerHTML = `Il primo numero che ti è venuto in mente è ${num}`
} else {
    result.innerHTML = `Lo so che tu hai pensato a ${num} ma secondo me intendevi <span style='font-size:25px'> ${ num + 1}</span>`;
}