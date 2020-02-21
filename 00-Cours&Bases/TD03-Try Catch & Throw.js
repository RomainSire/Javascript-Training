"use strict";

/**
 * Création d'une erreur, et récupération de l'erreur
 */

var a = {}

try {  
    a.maMathode(); // méthode n'existe pas ! donc erreur
} catch (error) {
    console.log("erreur : " + error + " - à l'endroit : " + error.stack)
}
// L'erreur est récupérée, et le code qui suit continue d'être exécuté
console.log("Salut")


/**
 * On peut aussi envoyer une erreur "crééée" nous même
 */
var demo = function (nombre) {
    if (nombre < 0) {
        throw new Error("le nombre doit être positif!!")
    }
    return nombre * 2
}

console.log(demo(5))
console.log(demo(10))
// console.log(demo(-5))   // Bloque le code qui suit

// On peut capturer cette erreur "créée" dans un try catch
try {
    console.log(demo(-5))
} catch (error) {
    window.alert(error)
}
