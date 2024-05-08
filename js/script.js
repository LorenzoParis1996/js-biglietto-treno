/*creo delle varibiali con prompt che da stringa si trasformeranno in numeri*/

const kmPercorsi = parseInt(prompt('Quanti kilometri devi percorrere?'));
console.log(kmPercorsi);

const etaUtente = parseInt(prompt('Quanti anni hai?'));
console.log(etaUtente);

/*creo variabile col prezzo per km */

let prezzoPerKm = 0.276;

/*creo variabile per definire il prezzo intero senza sconti*/

let prezzoIntero = (kmPercorsi * prezzoPerKm);


/*creo delle condizioni in cui essere under 18 oppure over 65 comporta degli sconti*/

if (etaUtente < 18) {

    /*queste variabili create per le due scontistiche vengono applicate solamente dentro le istruzioni delle condizioni che metto*/

    let scontoUnder = ((prezzoIntero * 21) / 100);
    let prezzoUnder = (prezzoIntero - scontoUnder);
    console.log(prezzoUnder.toFixed(2));
} else if (etaUtente > 65) {
    let scontoOver = ((prezzoIntero * 42) / 100);
    let prezzoOver = (prezzoIntero - scontoOver);
    console.log(prezzoOver.toFixed(2));
} else {
    console.log(prezzoIntero.toFixed(2));
}
