/*PALINDROMA 
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/



function palindrome(word){
    
    let array = word.split('');
    array.reverse();

    let testPalindrome = '';

    for(let i = 0; i < array.length; i++){
        testPalindrome += array[i];
    }
    
    if(testPalindrome == word){
        return true;
    }
    return false;
}

let btnPalindrome = document.getElementById('palindrome');

btnPalindrome.addEventListener('click', function(){

    let word = prompt('Iserisci una parola');

    if (palindrome(word) == true){
        alert(`La parola ${word} è palindroma`)
    } else{
        alert(`La parola ${word} non è palindroma`)
    }
});




/*PARI E DISPARI
 L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
 Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

 function numRandom(min, max) {
     return Math.floor(Math.random() * (parseInt(max)- parseInt(min) + 1) + parseInt(min))
 }

 let btnPariDispari = document.getElementById('pariDispari');

 btnPariDispari.addEventListener('click', function(){
    let PariDispari = prompt('Scegli Pari o Dispari');
    let numb = parseInt(prompt('Scegli un numero da uno a cinque'));
    
    let sum = numb + numRandom(1, 5);


    if(sum % 2 == 0 && PariDispari == 'pari'){
       alert(`Hai vinto ${sum}`);
    } else if (sum % 2 != 0 && PariDispari == 'dispari'){
        alert(`Hai vinto ${sum}`);
    }else{
        alert(`Hai perso ${sum}`);
    }

});
