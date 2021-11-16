/*PALINDROMA 
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/

let word = 'ingegni';
let notPal = 'ciao';

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


/*PARI E DISPARI
 L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
 Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */