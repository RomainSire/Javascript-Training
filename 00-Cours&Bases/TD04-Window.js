"use strict";

/**
 * Nouvel élément : window !
 */
console.log(window);
console.log(window.innerWidth);

/**
 * Attention toutes les variables déclarées sont stockées dans window
 */
var a = "salut";
console.log(window.a);
// Donc attention lorsqu'on a 2 fichiers JS, avec des variables de même noms, ces variables vont se télescoper dans window !

// Pour remédier à ce problème, en général on englobe tout le code du fichier JS dans une fonction qui s'auto exécute:
// Dans ce cas ma variable reste stockée dans la fonction et non pas dans window

(function () {
    var b = "demo";
    console.log(b);
})();
console.log(window.b);



/**
 * Quelques méthodes utiles de window : ALERT, PROMPT, CONFIRM
 */
window.alert("salut tout le monde");

var nbTrucs = window.prompt("combien de trucs ?");
console.log(nbTrucs + " trucs");

var certain = window.confirm("are you SURE ?");
console.log(certain);

