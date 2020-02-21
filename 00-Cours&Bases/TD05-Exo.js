"use strict";
/** 
 * Petit exercice : Faire deviner un chiffre à l'utilisateur, 3 essais !
 */
(function() {
    
    var aDeviner = Math.ceil(Math.random()*10);
    var guess;
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            guess = window.prompt("devinez le nombre entre 1 et 10");
        } else {
            guess = window.prompt("retentez votre chance");
        }
        guess = parseInt(guess, 10);

        if (guess == aDeviner) {
            break
        } else if (guess > aDeviner) {
            window.alert("Trop haut");
        } else {
            window.alert("Trop bas");
        }
    }
    if (guess === aDeviner) {
        window.alert("Bravo !")
    } else {
        window.alert("Perdu !")
    }

})()

