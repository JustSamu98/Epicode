// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

const arrRandom = function(num){
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
}
//console.log(arrRandom(5));

function checkArray(arr){
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i]>5){
      console.log(arr[i]+" è maggiore di 5");
      sum += arr[i];
    }else{
      console.log(arr[i]+" è minore di 5");
    }
  }
  console.log("Somma numeri maggiori di 5: "+sum);
}
checkArray(arrRandom(5));



/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

const shoppingCart = [
  {
    prezzo: 10,
    name: "Cuffie",
    id: 1,
    quantita: 10,
  },
  {
    prezzo: 50,
    name: "Mouse",
    id: 765,
    quantita: 3,
  },
  {
    prezzo: 20,
    name: "Tastiera",
    id: 43,
    quantita: 5,
  },
]

function shoppingCartTotal(arr){
  let tot = 0;
  for(let i=0; i<arr.length; i++){
    tot += (arr[i].prezzo * arr[i].quantita);
  }
  console.log("Totale dovuto al negozio: "+tot);
}
shoppingCartTotal(shoppingCart);

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

const shoppingCart2 = [
  {
    prezzo: 10,
    name: "Cuffie",
    id: 1,
    quantita: 10,
  },
  {
    prezzo: 50,
    name: "Mouse",
    id: 765,
    quantita: 3,
  },
  {
    prezzo: 20,
    name: "Tastiera",
    id: 43,
    quantita: 5,
  },
]

const nuovo = {
  prezzo: 5,
  name: "usb",
  id: 4362,
  quantita: 10,
}

function addToShoppingCart(arr){
  const addToArr = shoppingCart2.push(arr); // permette di aggiungere un oggetto all'array e in più
                                            // di salavare nella variabile la quantità di ogg nell'arr
  return("Oggetti nell'array "+addToArr);
}
console.log(addToShoppingCart(nuovo));
console.log(shoppingCart2);


/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

const shoppingCart3 = [
  {
    prezzo: 10,
    name: "Cuffie",
    id: 1,
    quantita: 10,
  },
  {
    prezzo: 50,
    name: "Mouse",
    id: 765,
    quantita: 3,
  },
  {
    prezzo: 20,
    name: "Tastiera",
    id: 43,
    quantita: 5,
  },
]

function maxShoppingCart(arr){
  let maxCost = arr[0];
  for(let i=0; i<arr.length; i++){
    if(maxCost.prezzo < arr[i].prezzo){
      maxCost = arr[i];
    }
  }
  return maxCost;
}
console.log(maxShoppingCart(shoppingCart3))

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

const shoppingCart4 = [
  {
    prezzo: 10,
    name: "Cuffie",
    id: 1,
    quantita: 10,
  },
  {
    prezzo: 50,
    name: "Mouse",
    id: 765,
    quantita: 3,
  },
  {
    prezzo: 20,
    name: "Tastiera",
    id: 43,
    quantita: 5,
  },
]

function latestShoppingCart(arr){
  let lastOgg = arr[arr.length-1];
  return lastOgg;
}
console.log(latestShoppingCart(shoppingCart4))


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

function loopUntil(x){
  let counter = 0;
  while(counter !== 3){
    let random = Math.floor(Math.random()*10);
    console.log(random);
    if(random>x){
      counter++;
    }else{
      counter = 0;
    }
  }
}
console.log(loopUntil(3));

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

function average(arr){
  let somma = 0;
  let count = 0;
  for(let i=0; i<arr.length; i++){
    if(typeof arr[i] === "number"){
      somma += arr[i];
      count++;
    }
  }
  let media=somma/count;
  return media;
}
console.log(average([2, 5, 3, "ciao"]));

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

function longest(arr){
  let longest = arr[0];
  for(let i=0; i<arr.length; i++){
    if(arr[i].length > longest.length){
      longest = arr[i];
    }
  }
  return longest;
}
console.log(longest(['strive', 'school', 'developer', 'student']))

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

function antiSpam(emailContent){
  if(emailContent.includes('SPAM') || emailContent.includes('SCAM')){
    return false;
  }else{
    return true;
  }
}
console.log(antiSpam('SPAM'))
console.log(antiSpam('NO'))

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

const howManyDays = function (selectedDate) {
  let today = new Date(); // data di oggi
  let difference = today - selectedDate;
  let d;
  return Math.floor(difference / (1000 * 60 * 60 * 24));
  /*Questa riga divide il valore di difference per il numero di millisecondi in un giorno (1000 * 60 * 60 * 24), 
  arrotonda verso il basso il risultato utilizzando la funzione Math.floor e lo restituisce come risultato della funzione.*/
}
console.log(howManyDays(new Date('2011-05-30')))

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

const matrixGenerator = function (x, y) {
  let matrix = []
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      matrix.push(i.toString() + j.toString())
    }
  }
  let charsPerRow = matrix.length / y
  for (let z = 0; z < y; z++) {
    console.log(matrix.slice(z * charsPerRow, (z + 1) * charsPerRow))
  }
}

console.log(matrixGenerator(3,3))

/*    const matrixGenerator = function (x, y) { - Dichiariamo la funzione "matrixGenerator", che prende in ingresso due interi, "x" e "y".

    let matrix = [] - Dichiariamo un array vuoto che useremo come matrice.

    for (let i = 0; i < y; i++) { - Iniziamo un ciclo for che itererà "y" volte. Questo ciclo determinerà il numero di righe della matrice.

    for (let j = 0; j < x; j++) { - All'interno del primo ciclo, iniziamo un secondo ciclo for che itererà "x" volte. Questo ciclo determinerà il numero di colonne della matrice.

    matrix.push(i.toString() + j.toString()) - Ad ogni iterazione dei due cicli for, uniamo il valore di "i" e "j" come stringhe e li aggiungiamo all'array "matrix". Questo creerà un elemento della matrice che rappresenta l'indice dell'elemento.

    let charsPerRow = matrix.length / y - Dichiariamo una variabile che rappresenta il numero di elementi per riga, che è uguale alla lunghezza dell'array "matrix" divisa per "y".

    for (let z = 0; z < y; z++) { - Iniziamo un terzo ciclo for che itererà "y" volte. Questo ciclo ci aiuterà a stampare la matrice.

    console.log(matrix.slice(z * charsPerRow, (z + 1) * charsPerRow)) - Ad ogni iterazione del terzo ciclo, stampiamo una parte dell'array "matrix". La parte da stampare è determinata dal metodo "slice", che prende come argomenti la posizione iniziale e la posizione finale della parte dell'array da stampare. La posizione iniziale è determinata moltiplicando "z" per "charsPerRow", mentre la posizione finale è determinata moltiplicando "(z + 1)" per "charsPerRow". Questo ciclo stamperà una riga della matrice ad ogni iterazione.

   







    /*function matrixGenerator(x, y) {
  // Dichiarare una variabile vuota chiamata "matrix" che sarà la matrice che verrà restituita alla fine
  let matrix = [];

  // Utilizzare un ciclo for per iterare x volte
  for (let i = 0; i < x; i++) {
    // Dichiarare una variabile vuota chiamata "row" che rappresenta una riga della matrice
    let row = [];

    // Utilizzare un secondo ciclo for per iterare y volte
    for (let j = 0; j < y; j++) {
      // Aggiungere alla riga attuale un valore che rappresenta l'indice dell'elemento. La stringa è formata dalla concatenazione dei valori di i e j convertiti in stringhe.
      row.push(`${i}${j}`);
    }
    // Aggiungere la riga corrente alla matrice
    matrix.push(row);
  }
  // Restituire la matrice
  return matrix;
}








!!!!!!!!!!!!!!!!`${i}${j}` spiegazione

${i}${j} è una stringa costruita con l'operatore di template di stringa di JavaScript. È un modo conveniente per concatenare due valori e trasformarli in una stringa.

i e j sono due variabili che rappresentano gli indici del ciclo for. Ad esempio, se i = 1 e j = 2, allora ${i}${j} sarà uguale a "12". Questa stringa viene quindi inserita nella riga corrente della matrice.

L'operatore di template di stringa è delimitato da due graffe ${} e permette di inserire il valore di una variabile all'interno di una stringa.*/

