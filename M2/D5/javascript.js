/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area=function(l1, l2){
  return l1*l2;
}

const areaResult = area (3,4);
console.log(areaResult);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(numInt1, numInt2){
  let sum=numInt1+numInt2;
  if(numInt1===numInt2){
    return sum*3;
  }else{
    return sum;
  }
}
console.log(crazySum(3,3));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num){
  if(num>19){
    return Math.abs((num-19)*3);
  }else{
    return Math.abs(num-19);
  }
}
console.log(crazyDiff(45));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(numeroInt){
  let numero = parseInt(numeroInt);
  if((numero>20 && numero<=100)||(numero===400)){
    return true;
  }else{
    return false;
  }
}
console.log(boundary(30));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

const codify = function(str){
  if(str.startsWith('code')){ // questo metodo usato per controllare l'inizio della stringa
    return str;
  }else{
    return 'code'+str;
  }
}
console.log(codify('codes'));

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(num){
  if(num>=0 && (num%3===0 || num%7===0)){
    return true;
  }else{
    return false;
  }
}
console.log(check3and7(14));

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

// Fatto come un array
function reverseString(word){
  const arr=[];
  let x=word.length-1;
  for(let i=0; i<word.length; i++){
    arr[x]=word[i];
    x=x-1;
  }
  console.log(arr.join(''));
}
console.log(reverseString("ciao"));

// Tutto in un colpo solo
/*const reverseString = function (str) {
  return str.split('').reverse('').join('')

  //let splitString = str.split("")
  //let reverseString = splitString.reverse()
  //let finalString = reverseString.join("")
}
console.log(reverseString("ciao"));*/

/*La funzione "reverseString" prende in input una stringa "str" e la inverte utilizzando una combinazione di metodi JavaScript.

    "return str.split('')" - Questo metodo divide la stringa "str" in un array di caratteri utilizzando il parametro vuoto "" come separatore. 
    Ad esempio, "hello" diventa ["h", "e", "l", "l", "o"].
    ".reverse('')" - Questo metodo inverte l'ordine degli elementi all'interno dell'array. 
    Ad esempio, ["h", "e", "l", "l", "o"] diventa ["o", "l", "l", "e", "h"].
    ".join('')" - Questo metodo unisce gli elementi dell'array in una stringa utilizzando il parametro vuoto "" come separatore. 
    Ad esempio, ["o", "l", "l", "e", "h"] diventa "olleh".

In sintesi, la funzione divide la stringa in un array di caratteri, inverte l'ordine degli elementi e unisce di nuovo gli elementi in una stringa per ottenere la stringa originale invertita.*/


/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(str){
  let words = str.split(' '); // ATTENZIONE split('') != split(' ')
  let finalString = [];

  for(let i=0; i<words.length; i++){
    let firstChar = words[i].charAt(1); // estrae la prima lettera della parola corrente
    //console.log(firstChar);
    let uppercase = firstChar.toUpperCase();
    let cutWord = words[i].slice(1); // taglia la prima lettera della parola corrente
    let finalWord = uppercase + cutWord;
    finalString.push(finalWord);
  }
  console.log(finalString.join(''));
}
console.log(upperFirst('hello world'));


/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(str){
  let cut = str.slice(1, str.length-1);
  console.log(cut);
}
console.log(cutString("ciao"));

/*Questa funzione "cutString" prende in input una stringa "str" e taglia i primi e gli ultimi caratteri della stringa.

    return str.slice(1, str.length - 1)" - Questa riga utilizza il metodo "slice()" per tagliare la stringa "str" a partire dal secondo carattere (indice 1)
    fino all'ultimo carattere (indice "str.length - 1"). Il metodo slice() prende 2 argomenti: l'indice iniziale e l'indice finale della sezione della stringa
    da estrarre. In questo caso l'indice iniziale è 1 e l'indice finale è la lunghezza della stringa meno 1 per prendere tutti i caratteri tranne il primo
    e l'ultimo.

Nota che anche .slice(1,-1) funziona, in questo caso stiamo passando solo un argomento alla funzione slice (1), quello iniziale, e l'indice finale è calcolato
in modo implicito come -1 che indica l'ultimo elemento della stringa.*/


/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n){
  let arr = [];

  for(let i=0; i<n; i++){
    arr.push(Math.floor(Math.random()*11));
  }
  console.log(arr);
}
console.log(giveMeRandom(7));
