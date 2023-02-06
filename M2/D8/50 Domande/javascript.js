//Es 21
let x = 'John';
let y = 'Doe';
console.log(x + "<>" + y)

//Es 22
const ogg = {
    name: 'Samuele',
    surname: 'Pieretto',
    email: 'email@.com'
};
//console.log(ogg)

//Es 23
delete ogg.email
//console.log(ogg)

//Es 24
const arr = [
    "uno",
    "due",
    "tre",
    "quattro",
    "cinque",
    "sei",
    "sette",
    "otto",
    "nove",
    "dieci"
];
//Es 25
console.log(arr)

//Es 26
const arr = [];
let num = 0;

for(let i=0; i<100; i++){
    num = Math.round(Math.random() * 100)
    arr[i]=num
}
console.log(arr)

//Es 27
function es27(arr){
    max = arr[0];
    min = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }else if(arr[i] < min){
            min = arr[i]
        }
    }
    console.log("Valore massimo: "+ max + " Valore minimo: " + min)
}
es27(arr)

//Es 28 
let arrPadre = [];
const arrFiglio = [];

for(let x=0; x<3; x++){
    for(let i=0; i<10; i++){
        arrFiglio[i] = Math.round(Math.random() * 10); 
    }
    arrPadre[x] = arrFiglio
}
console.log(arrPadre)

//Es 29
arr1 = [1, 4, 6, 8, 34, 67, 2, 4]
arr2 = [1, 2, 9, 2, 8, 19]
function es29(arr1, arr2){
    if(arr1.length > arr2.length){
        return arr1
        //console.log(arr1)
    }else{
        return arr2
        //console.log(arr2)
    }
}
es29(arr1, arr2)

//Es30
arr1 = [1, 4, 6, 1, 1, 1, 1, 2, 3]
arr2 = [1, 2, 9, 2, 8, 19]
function es30(arr1, arr2){
    let sum1 = 0
    let sum2 = 0
    for(let i=0; i<arr1.length; i++){
        sum1 += arr1[i]
    }
    for(let x=0; x<arr2.length; x++){
        sum2 += arr2[x]
    }

    if(sum1 > sum2){
        return arr1
        //console.log(arr1)
    }else{
        return arr2
        //console.log(arr2)
    }
}
es30(arr1, arr2)



