"use strict";

/**
Je veux construire sur ma page une interface qui represente une horloge
et afficher l'heure les minutes et les secondes
HH:mm:ss
- Travailler avec l'objet Date
- Utiliser la fonction d'Intervalle
- Changer le texte d'un élément
*/

/*  ------------  VARIABLES ----------- */
// dans now est stocké la date et l'heure actuelle
var now;
// dans clock est stocké l'heure actuelle mise en forme
var clock;
// dans h1, est sélectionné le paraphe de la page html
var h1 = document.querySelector('h1');

/*  ------------ FONCTIONS ------------ */

// fonction qui rajoute un '0' devant pour les chiffres < 10
function displayFix(numero) {
  if (numero < 10) {
    return "0" + numero;
  } else {
    return numero;
  }
}

// fonction exécutée à chaque intervale
function on1SecInterval() {
  // rafraichit l'heure
  now = new Date();
  // récupère l'heure
  clock = displayFix(now.getHours()) + ":" + displayFix(now.getMinutes()) + ":" + displayFix(now.getSeconds());
  // on affiche l'heure dans le titre de la page
  h1.textContent = clock;
}


/* ------------- PRINCIPAL ------------ */
// on exécute la fonction, chaque 1 seconde (1000 ms)
window.setInterval(on1SecInterval, 1000);



/***********************************************************************/
/**********   Possibilité plus simple: le DateTimeFormat !   ***********/
/***********************************************************************/
/*
function displayDate() {
    date = new Date();
    var options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    document.querySelector('#clock').textContent = Intl.DateTimeFormat('fr', options).format(date);
}

window.setInterval(displayDate, 1000);
*/
