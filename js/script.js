/*PALINDROMA 
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/



// function palindrome(word){
    
//     let array = word.split('');
//     array.reverse();

//     let testPalindrome = '';

//     for(let i = 0; i < array.length; i++){
//         testPalindrome += array[i];
//     }
    
//     if(testPalindrome == word){
//         return true;
//     }
//     return false;
// }

let btnPalindrome = document.getElementById('palindrome');
btnPalindrome.addEventListener('click', function(){
    let word = prompt('Iserisci una parola');
    
    let array = word.split('');
    array.reverse();

    let testPalindrome = '';

    for(let i = 0; i < array.length; i++){
        testPalindrome += array[i];
    }
    
    if(testPalindrome == word){
       alert(`La parola "${word}" è palindroma`)
    } else{
        alert(`La parola "${word}" non è palindroma`)
    }

});




/*PARI E DISPARI
 L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
 Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */