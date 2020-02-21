"use strict";
/**
 * Pour sélectionner un élément de la page, on passe par "DOCUMENT"
 */
// sélectionner 1 seul élément avec son id : getElementById
console.log(document.getElementById('demo'));
// sélectionner plusieurs éléments avec leur classe : getElementsByClassName
console.log(document.getElementsByClassName('paragraphe'));
// sélectionner plusieurs éléments avec leur balise : getElementByTagNAme
console.log(document.getElementsByTagName("h1"));

// méthodes plus générales, avec des sélecteurs SCC : querrySelector et querrySelectorAll
// pour le premier élément rencontré :
console.log(document.querySelector('p'));
// pour TOUS les éléments rencontrés (sous forme de tableau)
console.log(document.querySelectorAll('p'));


/**
 * Modifier les classes avec 
 */

// pour récupérer une classe :
console.log(document.querySelector('#demo p').className);
// pour remplacer une classe :
document.querySelector("#demo p").className = "paragraphe blue";

// pour récupérer les classes sous forme de tableau (pas suporté par tous les navigateurs)
console.log(document.querySelector("#demo p").classList);
// On peut y appliquer plein de methodes super intéressantes : contains(), add(), remove(), etc..check MDN !

/**
 * InnerHTML : pour avoir le CONTENU d'un élément HTML
 */
console.log(document.querySelector("#demo p").innerHTML)
// on peut aussi remplacer ce contenu :
document.querySelector("#demo p").innerHTML = "Le paragraphe a été remplacé !"