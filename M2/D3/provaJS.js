/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function trovaIlPiuGrande(num1, num2){
  if(num1 > num2){
    return num1;
  }
  else{
    return num2;
  }
}

trovaIlPiuGrande(10, 5); // per richiamare la funzione

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function notEqual(num){
  if(num !== 5){
    console.log("not equal");
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function controllaSeDivisibilePerCinque(num){
  if(num % 5 === 0){                  // % operatore per verificare il resto
    console.log("divisible by 5");
  }
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function controllaSeUgualeAOtto(num1, num2){
  if(num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8){  // || operatore di confronto
    return true;
  }
  else{
    return false;
  }
}

/* Esempio con operatore di confronto ||

  if(num1 > num2 || num1 === num2){     // questo codice viene eseguito se la prima condizione o la seconda sono vere 
    if(num1 > 0 && num1 < 10){          // questo codice viene eseguito se la prima condizione e la seconda sono vere

    }           
  }   

*/ 

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function calcolaTotaleCheckOut(totalShoppingCart){
  let costoSpedizione;
  if(totalShoppingCart > 50){
    costoSpedizione = 0;
  }
  else{
    costoSpedizione = 10;
  }
  return totalShoppingCart + costoSpedizione;
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

function calcolaTotaleChechOut(totalShoppingCart){
  let costoSpedizione;
  if(totalShoppingCart > 50){
    costoSpedizione = 0;
  }
  else{
    costoSpedizione = 10;
  }

  const sconto = totalShoppingCart * 0.2; //dichiariamo una costante che calcola lo sconto del 20%
  return totalShoppingCart - sconto + costoSpedizione;
}


/* ESERCIZIO 7
  Crea 3 variabili e assegna un valore numerico a ciascuna di esse. Utilizzando un blocco condizionale crea un algoritmo per ordinarle secondo il valore dal più alto al più basso
*/

function ordinaNumeri(num1, num2, num3){
  let numeriOrdinati = [num1, num2, num3]; // Variabile di numeri ordinati
  numeriOrdinati.sort(function(a,b){  // In questa occasione, accetta una funzione di confronto come argomento che specifica che gli elementi degli array devono essere ordinati. 
    return b - a;                     // In questo caso la funzione di confronto restituisce la differenze tra a e b e causa l'ordinamento dei numeri in ordine decrescente.
  });
  console.log(numeriOrdinati);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function controllaSeIntero(num){
  if(typeof num === "number" && Number.isInteger(num)){
    return true;
  }else{
    return false;
  }
}

console.log(controllaSeIntero(5));

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function controllaSeDispari(num){
  if(num % 2 === 0){
    return "Pari";
  }
  else{
    return "Dispari";
  }
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/*ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

function esercizioUndici{
  let num = 17;
  if(num<5){
    console.log("Tiny");
  }else{
    if(num<10){
      console.log("Small");
    }else{
      if(num<15){
        console.log("Medium");
      }else{
        if(num<20){
          console.log("Large");
        }else{
          console.log("Huge");
        }
      }
    }
  }
}

// Prendere struttura a cascata

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

function whatGender(){
  let isMale = true;
  let gender = isMale ? "male" : "female"; 
  // se la condizione è vera viene assegnata male, altrimenti female
  // operatore ternario usato per non usare if/else ma più difficile 
  console.log(gender);
}

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

function ordineAscendenteWhile(){
  let num = 0;
  while(num<=5){
    console.log(num);
    num++;
  }
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

function ordineAscendenteFor(){
  for(let num=0;num<=10;num++){
    console.log(num);
  }
}

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

function ordineAscendente(){
  for(var num=0;num<=10;num++){
    if(num !== 3 && num !== 8)
    {
      console.log(num);
    }
  }
}

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare se il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

function cicloPariDispari(){
  for(var num=0;num<15;num++){
    if(num %2 === 0)
    {
      console.log("Numero Pari"+num);
    }else{
      console.log("Numero Dispari"+num);
    }
  }
}

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3,
  stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

function cicloFizzBuzz(){
  for(var num=1;num<=100;num++){
    if(num %3 === 0 && num %5 !== 0){
      console.log("Fizz "+num);
    }else{
      if(num %5 === 0 && num %3 !== 0){
        console.log("Buzz "+num);
      }else{
        if(num %3 === 0 && num %5 === 0){
          console.log("FizzBuzz "+num);
        }
      }
    }
  }
}

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

function dayWeek(){
  let day = 2;

  switch(day){
    case 1: 
      console.log("Lunedi");
      break;
    case 1: 
      console.log("Martedi");
      break;
    case 1: 
      console.log("Mercoledi");
      break;
    case 1: 
      console.log("Giovedi");
      break;
    case 1: 
      console.log("Venerdi");
      break;
    case 1: 
      console.log("Sabato");
      break;
    case 1: 
      console.log("Domenica");
      break;
    default: // Istruzione quando nessun case è valido 
      console.log("Valore Non Valido");
    break;
  }
}