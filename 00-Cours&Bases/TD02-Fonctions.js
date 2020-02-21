"use strict";
/**
 * Fonction qui détermine si un nombre est premier
 */
var estPremier = function(nombre) {
    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            return false
        }    
    }
    return true;
}

// TEST :
console.log(estPremier(91))
console.log(estPremier(31))



/**
 * Fonction qui affiche qui a la moyenne
 */
var quiALaMoyenne = function(eleves) {
    var bonsEleves = [];
    for (let i = 0; i < eleves.length; i++) {
        const eleve = eleves[i];
        if (eleve.moyenne >= 10) {
            bonsEleves.push(eleve.nom)
        }
    }
    return bonsEleves
}

// TEST
var classeA = [
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

var classeB = [
    {
        nom: "Pierre",
        moyenne: 12
    },
    {
        nom: "Paul",
        moyenne: 10
    },
    {
        nom: "Jacques",
        moyenne: 8
    },
    {
        nom: "Maude Zarella",
        moyenne: 15
    }
]

console.log(quiALaMoyenne(classeA))
console.log(quiALaMoyenne(classeB))