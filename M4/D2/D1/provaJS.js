/*# Esercizi extra

NOTA: tutti gli esercizi devono essere svolti usando le funzioni

1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.
2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.
3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].
4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.
5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981
6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
Es.
X = 2
`’# ‘
‘##’`
X = 3
`’# ‘
‘## ‘`
`’###’`
7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”
8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]
9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
Es.
X = 3
`’ # ‘
‘ ### ‘
‘#####’`
10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:

Es. N = 2

`[[1, 2],[4, 3]]`

N = 3

`[[1, 2, 3],[8, 9, 4],[7, 6, 5]]`

N = 4

`[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]`
*/

/*1. Crea una funziona che calcoli e ritorni la somma di due numeri interi. Se i due valori sono uguali, ritorna il triplo della somma.*/
function somma(num1, num2){
    let sum = num1+num2;
    let triplo = 0;

    if(num1===num2){
        triplo = sum*3;
    }
    return triplo;
}
console.log(somma(5,5));

/*2. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.*/
function controlla(num1, num2){
    let sum = num1+num2;
    if(num1 === 50 || num2 === 50 || sum === 50){
        return true;
    }else{
        return false;
    }
}
console.log(controlla(48, 2));

/*3. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.*/
function rimuoviCarattere(str, pos){
    let newStr;
    newStr = str.slice(0, pos-1) + str.slice(pos, str.length);
    return newStr;
}
console.log(rimuoviCarattere("ciao", 2));

/*4. Crea una funzione che ritorni il valore più alto tra tre numeri interi.*/
function valorePiuAlto(num1, num2, num3){
    let arr = [num1, num2, num3];
    let big = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i]>big){
            big = arr[i];
        }
    }
    return big;
}
console.log(valorePiuAlto(3,8,1));

/*5. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.*/
function compresi(num1, num2){
    if((num1>=40 && num1<=60 && num2>=40 && num2<=60) || (num1>=70 && num1<=100 && num2>=70 && num2<=100)){
        return true;
    }else{
        return false;
    }
}
console.log(compresi(45,650));

/*6. Crea una funzione che crei e ritorni una nuova stringa formata ripetendo un numero dato di volte una stringa data. Sia la stringa che il numero devono essere passate come parametri.*/
function stringaRipetuta(str, n){
    let newStr=str;
    for(let i=0; i<n-1; i++){
        newStr +=str;
    }
    return newStr;
}

//oppure con metodo
/*function stringaRipetuta(str, n){
    return str.repeat(n);
};*/
console.log(stringaRipetuta("Ciao", 3));

/*7. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.*/
function nomeCitta(citta){
    if(citta.includes("Los",0) || citta.includes("New",0)){
        return true;
    }else{
        return false;
    }
}
console.log(nomeCitta("Los Angeles"));

/*8. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array con tre elementi. L’array deve essere passato come parametro.*/
const arr8 = [2, 5, 3];
function ritornaSomma(arr){
    let somma = 0;
    for(let i=0; i<arr.length; i++){
        somma += arr[i];
    }
    return somma;
}
console.log(ritornaSomma(arr8));

/*9. Crea una funzione che controlli se un array di due elementi contiene il numero 1 o il numero 3. Se li contiene, ritorna `true`, altrimenti ritorna `false`.*/
const arr9 = [3, 2];
function controllaArray(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 1 || arr[i] === 3){
            return true;
        }else{
            return false;
        }
    }
}
console.log(controllaArray(arr9));

/*10. Crea una funzione che controlli che un array di due elementi NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.*/
const arr10 = [2, 5];
function controllaArray2(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===1 || arr[i]===3){
            return false;
        }else{
            return true;
        }
    }
}
console.log(controllaArray2(arr10));

/*11. Crea una funzione per trovare la stringa più lunga in un array di stringhe. Passa l’array come parametro e tritorna la stringa più lunga.*/
const arr11 = [
    "ciaoo",
    "ciao",
    "ciaoooooo",
    "ciaooo"
];

function stringaLunga(arr){
    let lunga = arr[0];
    for(let  i=0; i<arr.length; i++){
        if(arr[i]>lunga){
            lunga = arr[i];
        }
    }
    return lunga;
}
console.log(stringaLunga(arr11));


/*12. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
Angolo acuto: meno di 90° ⇒ ritorna “acuto”
Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
Angolo retto: 90° ⇒ ritorna “retto”
Angolo piatto: 180° ⇒ ritorna “piatto”*/
function tipoAngolo(angolo){
    if(angolo<90 && angolo>0){
        return "acuto";
    }else if(angolo>90 && angolo<180){
        return "ottuso";
    }else if(angolo === 90){
        return "retto";
    }else if(angolo === 180){
        return "angolo piatto";
    }else{
        return "Errore";
    }
}
console.log(tipoAngolo(89));

/*13. Crea una funzione che trovi e ritorni **l’indice** del numero più alto in un array passato come parametro.*/
const arr13 = [2, 5, 8, 1];
function indice(arr){
    let big = arr[0];
    arr.forEach(num => {
        if(num>big){
            big = num;
        }
    });
    return big;
}
console.log(indice(arr13));

/*14. Crea una funzione per trovare e ritornare il numero PARI più alto in un array di numeri passato come parametro.*/
const arr14 = [1, 5, 8, 1, 6];
function pari(arr){
    let big = arr[0];
    arr.forEach(element => {
        if(element % 2 === 0){
            if(element>big){
                big = element;
            }
        }
    });
    return big;
}
console.log(pari(arr14));

/*15. Crea una funzione per controllare che due numeri (passati come parametri) siano uno positivo e uno negativo. Ritorna `true` se la condizione è applicata, `false` se non lo è.*/
function posNeg(num1, num2){
    if((num1>0 && num2<0) || (num2>0 && num1<0)){
        return true;
    }else{
        return false;
    }
}
console.log(posNeg(-2,-2));

/*16. Crea una funzione per creare e ritornare una nuova stringa che abbia i primi tre caratteri in minuscolo e gli altri in maiuscolo. 
Se la stringa è più corta di tre caratteri, tutta la stringa deve essere in maiuscolo. La stringa originale deve essere passata come parametro.*/
//FARE
function treCaratteri(str){ 
    let stringaFinale = "";
    stringaFinale = str.toUpperCase().substring(0,3) + str.toLowerCase().substring(3);
    return stringaFinale;
}
console.log(treCaratteri("ciaone"));

/*17. Crea una funzione che calcoli la somma di due numeri passati come parametri. Se la loro somma è compresa tra 50 e 80, ritorna `65`, altrimenti ritorna `80`.*/

function calcolaSomma(num1, num2) {
    let somma = num1 + num2;
    let ritorno = 0;
    if (somma >= 50 && somma <= 80){
      ritorno = 65;
    } else {
      ritorno = 80;
    }
    return ritorno;
}
calcolaSomma(20, 40);

/*18. Crea una funzione per convertire un numero (passato come parametro) in una stringa basandoti su questi criteri:
Il numero è divisibile per 3 ⇒ ritorna “Diego”
Il numero è divisibile per 5 ⇒ ritorna “Riccardo”
Il numero è divisibile per 7 ⇒ ritorna “Stefano”
Se il numero non ha 3, 5 o 7 come divisore, ritorna il numero originale.
⚠️ Se il numero è divisibile per più di una di queste opzioni, ritorna l’unione delle due stringhe. Es. 15 è divisibile per 3 e per 5, quindi il valore ritornato sarebbe “DiegoRiccardo”.*/
function converti(num){
    let ris = "";
    if(num %3 === 0){
        ris += "Diego";
    }if(num %5 === 0){
        ris += "Riccardo";
    }if(num %7 === 0){
        ris += "Stefano";
    }if(ris === ""){
        return num.toString();
    }else{
        return ris;
    }
}
console.log(converti("35"));

/*19. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.*/
function acronimo(str) {
    let parole = str.split(" "); //divido la frase in array di parole delimitate da spazi
    let acronimo = "";
    console.log(parole);

    for (let i = 0; i < parole.length; i++){

        acronimo = acronimo + parole[i][0]; //prendo prima lettera di ogni parola
    }
    return acronimo;
}
console.log(acronimo("Fabbrica Italiana Automobili Torino"));