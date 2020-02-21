"use strict";

/**
 * Test Nombre premier
 */

var nombre = 91
var estPasPremier = false
for (let i = 2; i < nombre; i++) {
    if (nombre % i === 0) {
        console.log(nombre + " est divisible par " + i)
        estPasPremier = true
    }    
}
if (estPasPremier) {
    console.log("Donc le nombre " + nombre + " n'est pas premier")
} else {
    console.log("Félicitations, le nombre " + nombre + " est premier !")
}



/**
 * Détection des mauvais élèves
 */
var eleves = [
    {
        nom: "Marc",
        moyenne: 15
    },
    {
        nom: "Marion",
        moyenne: 10
    },
    {
        nom: "FanJo",
        moyenne: 8
    },
    {
        nom: "Toto",
        moyenne: 4
    }
]

console.log("les cancres sont : ")
for (let i = 0; i < eleves.length; i++) {
    const eleve = eleves[i];
    if (eleve.moyenne <10) {
        console.log("   - " + eleve.nom)
    }
}
