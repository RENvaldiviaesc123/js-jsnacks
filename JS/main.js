
/*
MILESTONE 1:
_Crea una funzione chiamata sommaNumeri che prenda un array di N numeri e calcoli la somma di tutti 
questi numeri contenuti nell'array, restituendolo come risultato.
_Utilizzare la funzione sommaNumeri per stampare il risultato. L'array di N numeri da passare alla
 funzione lo create chiedendo all'utente quanti numeri vuole inserire 
(cioè N), e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().
*/
//Dichiariamo le variabili: In questo caso la quantità dei numeri a inserire, i numeri inseriti e l'aaray dei numeri.

let N = (parseInt(prompt("Inserisci la quantità dei numeri numeri")))


function sommaNumeri (N) {
    let userNumber = (parseInt(prompt("Inserisci i numeri")))
    for (let i = 0; i < N; i++) {   
    let arrayNum = []
    let risultato = i + userNumber
    arrayNum.push(risultato)
    return risultato
    }
    
}
 
let sommaDeiNumerini = sommaNumeri(N)
console.log(sommaDeiNumerini)














/*
Milestone 2:
_Crea una funzione chiamata mediaAritmetica che prende in input un array di N numeri e restituisca
 la media aritmetica dei numeri contenuti nell'array.
_Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media dei numeri che 
vanno chiesti all'utente attraverso dei prompt.
_Potete ad esempio provare ad usare questo programma per inserire N voti di scuola e farvi 
restituire qual è la media di tutti i voti inseriti!
*/