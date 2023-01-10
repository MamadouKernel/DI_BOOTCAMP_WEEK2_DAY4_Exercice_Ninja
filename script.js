
/* ***************** Exercice 1 : Random Numebr ****************** */

// 1 - Get a random number between 1 and 100.

function randomNumber() {

    /**
     * @description : cette fonction permet d'afficher les nombres de 0 à un nombres 
     * qui est généré par la maachine
     * @param : rdnNumber -> nombre généré
     */
    
    let rdmNumber = Math.floor(Math.random(1) * 100);
    console.log(rdmNumber);

    // 2 - Console.log all even numebrs from 0 to the random number

    for(let i = 0; i < rdmNumber; i++) {

        console.log(i);

    }
}

randomNumber();

/* **************** End Exercice 1 ************************ */

/* ********************* Exercice 2 : Capitalized Letters ***************** */

// 1 - create a function that takes a string as an argument

function capitalize(character) {

    /**
     * @description : cette fonction permet de mettre les lettres une chaine de
     * caractère en majuscules en fonction de l'indices des caractères et retourne
     * un tableau des 2 possibles combinaison (les indices paires en majuscules dans le premiers
     * élément du tableau et les indices impaires en miniscules dans le second élément du
     * tableau)
     * @param character -> chaine à traiter
     * @param  newWord1 -> chaine transformé
     * @param newWord -> chaine transformé
     * @returns capitalizedTable;
     */

    let capitalizedTable = [];
    let newWord = "";
    let newWord1 = "";

    if(character.split(" ").length > 1) {

        console.log("character should'nt have space");
        return;

    }

    for(let i = 0; i < character.length; i++) {

        if(i % 2 == 0) {
            newWord += character.charAt(i).toUpperCase();
            newWord1 += character.charAt(i)
        }
        else {
            newWord += character.charAt(i)
            newWord1 += character.charAt(i).toUpperCase();
        }
    }

    capitalizedTable.push(newWord);
    capitalizedTable.push(newWord1);

    return capitalizedTable;

}

capitalize("abcdef");

/* ****************** End Exercice 2 ********************* */

/* ****************** Exercice 3 : Is Palindrome *********************** */

// 1 - Write a javascript function that checks whether a string is a palindrome or not

function isPalindrome(character) {

    /**
     * @description : cette fonction permet de vérifier si une chaine de caractère
     * est un palindrome, elle se base sur la parité du nombre de caratère de cette chaine
     * afin de savoir quel  traitement éffectué sur la chaine pour déterminer si
     * c'est un palindrome ou non.
     * @param middleOfCharacter
     * @param firstPartString
     * @param lastPartString
     * @param lastPartStringReverse
     * @returns booelan, if is true it mean that charcters in a palindrome else not
     */

    let middleOfCharacter = character.length / 2;
    let firstPartString = character.toLowerCase().slice(0, middleOfCharacter);
    let lastPartString = character.toLowerCase().slice((character.length % 2 == 0) ? middleOfCharacter : middleOfCharacter + 1);
    let lastPartStringReverse = lastPartString.split("").reverse().join("");

    if(firstPartString == lastPartStringReverse) {

        console.log("The entry is a palindrome");
        return true;

    }
    return false;
}

isPalindrome("madam");

/* ******************* End Exercice 3 ********************** */

/* ******************* Exercice 4 : Biggest Number ************** */

// 1 - create function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number

function biggestNumberInArray(arrayNumber) {

    /**
     * @description : cette fonction permet trouver la plus grande valeur dans un tableau
     * et la retourne
     * @param arrayNumber -> le tableau à trier
     * @param biggestNumber -> 
     */

    if(arrayNumber.length > 0) {

        let biggestNumber = 0;

        for(let i of arrayNumber) {

            if(i > biggestNumber) {

                biggestNumber = i;

            }
        }
        return biggestNumber;
    }
    return 0;

}

biggestNumberInArray(['a', 3, 4, 2]);

/* ***************** End Exercice 4 ************** */

/* ***************** Exercice 5 ************** */

// Write a JS function that takes an array and returns a new array with only unique elements

function uniqueElements(array) {

    /**
     * @description cette fonction permet de supprimer les doublons dans une liste
     */

    let uniqueElementsList = array.filter((x, i) => array.indexOf(x) === i);
    return uniqueElementsList;

}

uniqueElements([1,2,3,3,3,3,4,5]);

/* *************** End Exercice 5 *************** */

/**
 * @author : Konate Mamadou
 */
