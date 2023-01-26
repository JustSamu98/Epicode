/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

function esercizio1(){
    const me = {
        name: 'Joh',
        lastName: 'Doe',
        skills: ['javascript', 'html', 'css'],
    }
    me.skills.pop(); // rimuove l'ultimo elemento di skills dentro l'array
    console.log(me);
    //document.write(me.skills);
}

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */

function esercizio2(){
    const arr = [];
    let x = 0; // variabile per scorrere l'array

    for(let i=1; i<100; i++){
        if(i%2!==0){
            //arr.push(i); 
            arr[x]=i;
            x++;
        }
    }
    console.log(arr);
    //document.write(arr);
}


/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

function esercizio3(){
    const arr = [];
    let num = 0;

    for(let i=0; i<10; i++){
        num = Math.round(Math.random() * 100); // codice per il random
        arr[i]=num;
    }
    console.log(arr);
    //document.write(arr);
}


/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

function esercizio4(){
    const arr = [1,4,6,9,14,54,3,23,6,7];

    for(let i=1; i<arr.length; i++){
        if(arr[i] %2===0){
            arr.push(arr[i]);
            //document.write(arr[i]+" ");
        }
    } 
    console.log(arr);
}



/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */

function esercizio5(){
    const arr = [5,10,5];
    let somma = 0;

    for(let i=0; i<arr.length; i++){
        somma = somma + arr[i];
    }
    console.log(somma);
    //document.write(somma);
}


/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/

function esercizio6(){
    const arr = [5,10,5,"luca"];

    for(let i=0; i<arr.length; i++){
        if(typeof arr[i]==='number'){ //typeof controlla se il valore è un numero
            arr[i]=arr[i]+1;
        }
    }
    console.log(arr);
    //document.write(arr);
}


/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/

function esercizio7(){
    const arr = [1,4,6,9,14,54,3,23,6,7];

    for(let i=0; i<arr.length; i++){
        if(arr[i] %2===0){
            arr.splice(i--,1); // splice consente di rimuovere
            /*La quarta riga utilizza il metodo "splice()" per rimuovere 
            l'elemento pari "arr[i]" dall'array. Il metodo splice prende
            come argomenti l'indice dell'elemento da rimuovere e il numero
            di elementi da rimuovere. Utilizziamo anche l'operatore -- 
            per decrementare l'indice "i" così l'indice successivo non salta
            quando un elemento viene rimosso dall'array.*/
        }
    }
    console.log(arr);
    //document.write(arr);
}


//EXSTRA SPIEGAZIONE METODO SPICE
//Il metodo "splice()" è un metodo JavaScript che modifica il contenuto di un array rimuovendo o aggiungendo elementi.

Esempio: 


let arr = [1, 2, 3, 4, 5];

// Rimuovi l'elemento all'indice 1
let removed = arr.splice(1, 1); // restituisce [2]
console.log(arr); // [1, 3, 4, 5]
console.log(removed); // [2]

// Aggiungi l'elemento 6 all'indice 2
arr.splice(2, 0, 6);
console.log(arr); // [1, 3, 6, 4, 5]


/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

function esercizio8(){
    const arr = [];
    let num = 0;

    while(arr.length<10){
        num = Math.round(Math.random() * 10);
            
        if(!arr.includes(num)){ // controlla se non è già presente
            arr.push(num);
        }
    }
    console.log(arr);
    //document.write(arr);
}


/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function esercizio9(){
    let arr=["EPICODE", "is", "great", 5];
    let arr2=[];
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]==="string"){
            arr2.push(arr[i].length);
        }else if(typeof arr[i]==="number"){
            arr2.push("It's a number!");
        }
    }   
    //document.write(arr2);
    console.log(arr2);
}

/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

/*function esercizio10(){    //Primo Metodo
    let arr=[1,2,4,8];
    let arr2=[];
    for(let i=arr.length-1;i>=0;i--){
        arr2.push(arr[i]);
    }   
    document.write(arr2);
}*/

function esercizio10(){
    let arr=[1,2,4,8];
    let arr2=arr.reverse();
    //document.write(arr2);
    console.log(arr2);
}

/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/

function esercizio11(){
    let arr=[1,2,4,8,98,6];
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max =arr[i];
        }
    }
    console.log(max);
    //document.write(max);
}

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Year: '2001',
      imdbID: 'tt0120737',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Return of the King',
      Year: '2003',
      imdbID: 'tt0167260',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Two Towers',
      Year: '2002',
      imdbID: 'tt0167261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of War',
      Year: '2005',
      imdbID: 'tt0399295',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'Lords of Dogtown',
      Year: '2005',
      imdbID: 'tt0355702',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings',
      Year: '1978',
      imdbID: 'tt0077869',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1990',
      imdbID: 'tt0100054',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
      Title: 'The Lords of Salem',
      Year: '2012',
      imdbID: 'tt1731697',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
      Year: '1984',
      imdbID: 'tt0087365',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1963',
      imdbID: 'tt0057261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
      Title: 'The Avengers',
      Year: '2012',
      imdbID: 'tt0848228',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Age of Ultron',
      Year: '2015',
      imdbID: 'tt2395427',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Endgame',
      Year: '2019',
      imdbID: 'tt4154796',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
  ]
  
  /* ESERCIZIO 12
    Scrivi del codice per trovare il film più vecchio nell'array fornito.
  */

function esercizio12(){
    let year = parseInt(movies[0].Year);
    let oldestMovie = 0;
    for(let i=0;i<movies.length;i++){
        oldestMovie = parseInt(movies[i].Year);
        if(oldestMovie<year){
            year=oldestMovie;
        }
    }
    console.log(year);
    //document.write(year);
}
    
/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

function esercizio13(){
    const totale = movies.length;
    console.log(totale);
    //document.write(totale);
}

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function esercizio14(){
    const titoli = [];
    for (let i = 0; i < movies.length; i++){
        titoli.push(movies[i].Title)
    }
    console.log(titoli);
    //document.write(titoli);
}

/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function esercizio15(){
    const titoli = [];
    for (let i = 0; i < movies.length; i++){
        if(parseInt(movies[i].Year)>2000){
            titoli.push(movies[i].Title);
        }
    }
    console.log(titoli);
    //document.write(titoli);
}

/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/

function esercizio16(){
    const id = 'tt0355702';
    let movieId;
    for (let i = 0; i < movies.length; i++){
        if (movies[i].imdbID === id){
            movieId = movies[i];
            break;
        }
    }
    console.log(movieId);
    //document.write(moviedId);
}

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function esercizio17(){
    let somma;
    for (let i = 0; i < movies.length; i++){
        somma = somma + parseInt(movies[i].Year);
    }
    console.log(somma);
    //document.write(somma);
}

/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

function esercizio18(){
    const word='Avengers';
    const arr=[];
    for (let i = 0; i < movies.length; i++){
        if(movies[i].Title.includes(word)){ // metodo includes, controllare se la parola è inclusa
            arr.push(arr[i]);
        }
    }
    console.log(arr);
    //document.write(arr);
}
