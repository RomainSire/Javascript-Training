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

// méthodes plus générales, avec des sélecteurs CSS : querrySelector et querrySelectorAll
// pour le premier élément rencontré :
console.log(document.querySelector('p'));
// pour TOUS les éléments rencontrés (sous forme de tableau)
console.log(document.querySelectorAll('p'));

// Pour sélectionner le "body", c'est facile :
document.body


/**
 * Modifier les classes avec className et classList
 */

// pour récupérer une classe :
console.log(document.querySelector('#demo p').className);
// pour remplacer une classe :
document.querySelector("#demo p").className = "paragraphe blue";

// pour récupérer les classes sous forme de tableau (pas suporté par tous les navigateurs)
console.log(document.querySelector("#demo p").classList);
// On peut y appliquer plein de methodes super intéressantes : contains(), add(), remove(), replace(), toggle(), etc..check MDN ! exemple:
console.log(document.querySelector("#demo p").classList.contains("blue"));
// NB : il existe des "shim" pour pouvoir utiliser des nouvelles propriétés de type querrySelector ou classList, sur des navigateurs anciens.

/**
 * Récupérer le style d'un élément : avec .style
 */
console.log(document.querySelector("#demo p").style);
// et le modifier :
document.querySelector("#demo p").style.fontSize = "20px";



/**
 * pour avoir le CONTENU d'un élément HTML : 3 possibilités :
 */
// innerHTML
console.log(document.querySelector("#demo p").innerHTML)
// on peut aussi remplacer ce contenu, et ça tient compte des balises html :
document.querySelector("#demo p").innerHTML = "<strong>Le paragraphe</strong> a été remplacé !"
//innerText : donne le TEXTE uniquement (sans les balises) à l'intérieur d'un élément
// textContent (=LA SOLUTION OFFICIELLE, mais pas toujours supportée.. par IE8 notamment) sont possibles aussi pour modifier le texte d'un élément


/**
 * Petit exercice : faire clignotter en rouge les 2 paragraphes
 */
var demo = function () {

    var ps = document.querySelectorAll("p");

    for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.classList.toggle("red");
    }
}
window.setInterval(demo, 1000);


/**
 * Sélection plus fine des éléments
 */
// on définit une variable "ul" pour ne pas retaper à chaque fois
var ul = document.querySelector("ul");
// sélection des elements enfants: .children (renvoie un tableau)
console.log(ul.children);
// pour avoir TOUS les noeuds (et pas seulement les éléments) càd même les espaces et les sauts de lignes entre les éléments : .childNodes
console.log(ul.childNodes);
// pour compter les ELEMENTS enfants : .childElementCount
console.log(ul.childElementCount);
// pour le premier NOEUD enfant :
console.log(ul.firstChild);
// pour le premier ELEMENT enfant :
console.log(ul.firstElementChild);

// NB :  On peut aussi utiliser les querry selector (et autres) directement sur les éléments, et non pas seulement sur le document entier :
console.log(ul.querySelector("li.toto"));
console.log(ul.querySelector("li:nth-child(8)"));

// on définit une variable "ul" pour ne pas retaper à chaque fois
var li = ul.querySelector("li:nth-child(5)");
// pour sélectionner les éléments voisins :
console.log(li.previousElementSibling);
console.log(li.nextElementSibling.nextElementSibling); // on peut les enchainer

// pour choper le parent :
console.log(li.parentElement);


/**
 * MANIPULER les éléments (ajouter, supprimer, etc.)
 */
// supprimer un élément :
// ul.removeChild(li);

// Pour déplacer un élément :
//document.body.appendChild(li);

// pour créer une copie d'un élément :
var li2 = li.cloneNode(true); // true si on veut cloner le contenu, false sinon
ul.appendChild(li2);

// pour créer un nouvel élément à partir de rien :
var li3 = document.createElement("li");
li3.textContent = "élément li créé à partir de rien !"
ul.appendChild(li3);

// pour remplacer li8 par li9 :
var li8 = ul.querySelector("#li8");
var li9 = ul.querySelector("#li9");
ul.replaceChild(li9, li8);  // attention, ça supprime li8 du coup...

// pour append, mais au début plutôt qu'à la fin : on utilise .insertBefore plutot que appendChild : check la doc !