'use strict';   // Mode strict du JavaScript


/* ********************** DONNEES ************************* */
// Tableau qui permet de sélectionner tous les éléments de type li de la #photo-list
var photo = document.querySelectorAll('#photo-list li');


/* ********************* FONCTIONS ************************ */
// Fonction exécutée lorsqu'on clique sur une photo
function photoClicked () {

  // 1/ On toggle la classe .selected sur l'élément HTML
  this.classList.toggle('selected');
  // Le mot-clé "THIS" dans une fonction liée à un gestionnaire fait référence à l'élément HTML d'où est parti l'événement

  // 2/ On compte le nombre d'élément sélectionnés (avec la classe .selected)
  var selectedCounter = document.querySelectorAll('#photo-list .selected').length;

  // 3/ On affiche le nombre d'éléments sélectionnés directement dans le html
  document.querySelector('.nb-photos-selected').textContent = selectedCounter;

  // 4/ Si il y a plus de 1 photo, On rajoute un "s" à photo
  if (selectedCounter > 1) {  // si le nb est > 1 : on ajoute le s
    document.querySelector('.le-fameux-s').textContent = "s";
  } else { // sinon : on enlève le s
    document.querySelector('.le-fameux-s').textContent = "";
  }

}

/* ******************* CODE PRINCIPAL ********************** */
// EVENEMENT : lorsqu'on clique sur la photo[i], on va appeler la fonction photoClicked
for (var i = 0; i < photo.length; i++) {
  photo[i].addEventListener('click', photoClicked);
}


// *****************  COURS **************** //
// Pour modifier du texte dans une balise HTML, via le JavaScript
// 3 choix possibles :
// - innerHTML  : possible, mais c'est plutot pour mettre du html dans le container sélectionné... possible, mais pas top. Utile pour rajouter d'autres balises par contre !
// - innerText : Fait pour rajouter du texte, mais spécialement développé pour les vieux internet explorer, donc à éviter !
// - textContent : C'est fait pour !


