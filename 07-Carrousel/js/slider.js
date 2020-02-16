'use strict';   // Mode strict du JavaScript

/***************************************************/
/* ******************* DONNEES ******************* */
/***************************************************/
// un Tableau qui regroupe un objet pour chaque photo
// chaqun de ces objets contient toutes les infos utiles pour cette photo (chemin d'accès, texte alternatif, et la légende de la photo)
var photos = [
  {
    'src': 'images/1.jpg',
    'alt': 'Photo de peinture rupestre',
    'figcaption': 'Photo 1 : Peinture rupestre'
  },
  {
    'src': 'images/2.jpg',
    'alt': 'Photo d\'un pont à sens unique',
    'figcaption': 'Photo 2 : Pont à sens unique'
  },
  {
    'src': 'images/3.jpg',
    'alt': 'Photo d\'un batiment moche',
    'figcaption': 'Photo 3 : Batiment moche'
  },
  {
    'src': 'images/4.jpg',
    'alt': 'Photo illustrant le concept d\'économie d\'énergie',
    'figcaption': 'Photo 4 : Economie d\'énergie'
  },
  {
    'src': 'images/5.jpg',
    'alt': 'Photo de la ville du turfu',
    'figcaption': 'Photo 5 : La ville du TurFu'
  },
  {
    'src': 'images/6.jpg',
    'alt': 'Photo de la tour Eiffel',
    'figcaption': 'Photo 6 : Tour Eiffel'
  }
];

// un objet qui regroupe tous les sélecteurs html qui seront utiles par la suite
var body = {
  'toolbarToggle': document.querySelector('#toolbar-toggle'),
  'toolbarToggleIcon': document.querySelector('#toolbar-toggle i'),
  'toolbar': document.querySelector("nav .toolbar"),
  'buttonPrevious': document.querySelector("#slider-previous"),
  'buttonPlay': document.querySelector("#slider-play"),
  'buttonNext': document.querySelector("#slider-next"),
  'buttonRandom': document.querySelector("#slider-random"),
  'sliderImage': document.querySelector('#slider img'),
  'sliderCaption': document.querySelector('#slider figcaption')
}

// une variable qui stocke le numéro de la photo actuelle
var currentPhoto;

// une variable booleen qui permet de savoir si le diaporama est en train d'être joué ou pas !
var CarrouselIsPlaying = false;
// variable qui contient le timer lorsqu'il est actif
var timer;

/***************************************************/
/* ****************** FONCTIONS ****************** */
/***************************************************/

// Fonction qui affiche la photo, son texte alternatif, et la légende
function displayPhoto(i) {
  // on affiche la photo sur la page
  body.sliderImage.setAttribute('src', photos[i].src);
  // on change le alt de la photos
  body.sliderImage.setAttribute('alt', photos[i].alt);
  // on change la légende
  body.sliderCaption.textContent = photos[i].figcaption;
}


// Fonction qui affiche ou masque le menu de navigation
function onDisplayToolbarClicked() {
  // ajoute la classe 'hidden'
  body.toolbar.classList.toggle('hidden');
  // on change l'icone juste avant le texte (on enlève une classe, et on affiche l'autre)
  body.toolbarToggleIcon.classList.toggle('fa-arrow-circle-right');
  body.toolbarToggleIcon.classList.toggle('fa-arrow-circle-down');
}



// Fonction qui permet de passer à la photo suivante
function onNextPhotoActivated() {
  // SI on arrive à la fin de la liste de photos, on repart au début
  if (currentPhoto == photos.length - 1) {
    currentPhoto = 0;
  } else {  // SINON on incrémente le compteur
    currentPhoto++;
  }
  // on lance ensuite la fonction qui affiche tout ce qu'il faut
  displayPhoto(currentPhoto);
}



// Fonction qui permet de passer à la photo précédente
function onPreviousPhotoActivated() {
  // SI on arrive au début, on repart de la fin
  if (currentPhoto == 0) {
    currentPhoto = photos.length - 1;
  } else {  // SINON on décrémente le compteur
    currentPhoto--;
  }
  // on lance ensuite la fonction qui affiche tout ce qu'il faut
  displayPhoto(currentPhoto);
}



// Fonction qui permet de lancer le diaporama
function onPlayActivated() {
  // SI le diaporama joue
  if (CarrouselIsPlaying) {
    // j'arrête le timer
    window.clearInterval(timer);
    // Je change l'icone du bouton
    body.buttonPlay.innerHTML = '<i class="fas fa-play"></i>';
    // je dis que le carrousel n'est pas en train de jouer
    CarrouselIsPlaying = false;
  } else {  // SINON, si le diaporama ne joue pas
    // Je change l'icone du bouton
    body.buttonPlay.innerHTML = '<i class="fas fa-pause"></i>'
    // au click, on envoie la photo suivante,
    onNextPhotoActivated();
    // ensuite on envoie le timer, qui affiche la photo suivante chaque XX secondes
    timer = window.setInterval(onNextPhotoActivated, 1000);
    // je dis que le carrousel est en train de jouer
    CarrouselIsPlaying = true;
  }
}


// Fonction qui renvoie un nombre entier aléatoire entre [min; max]
function randomIntNumber(min, max) {
  var range = max - min;
  return min + Math.round(Math.random()*range);
};


// Fonction qui permet d'afficher une photo au hazard (différente de la photo actuelle)
function onRandomPhotoActivated() {
  var choixRandom;
  // on attribue une nouvelle valeur aléatoire à ChoixRandom tant qu'il est égal à currentPhoto
  do {
    choixRandom = randomIntNumber(0, photos.length - 1);
  } while (choixRandom == currentPhoto);
  // Ensuite on affiche la photo Randon
  displayPhoto(choixRandom);
  // Puis on enregistre cette valeur comme étant la photo actuelle
  currentPhoto = choixRandom;
}


// Fonction qui gère le clavier
function onKeyboardPressed(event) {
  switch (event.key) {
    case "ArrowRight":
    case "ArrowDown":
      onNextPhotoActivated();
      break;
    case "ArrowLeft":
    case "ArrowUp":
      onPreviousPhotoActivated();
      break;
    case " ":
      onPlayActivated();
      break;
    case "r":
      onRandomPhotoActivated();
      break;
  }
}

/***************************************************/
/* *************** CODE PRINCIPAL **************** */
/***************************************************/

// On affiche la premère photo
currentPhoto = 0;
displayPhoto(currentPhoto);

// ECOUTE EVENEMENT : click sur "afficher la barre d'outils"
body.toolbarToggle.addEventListener('click', onDisplayToolbarClicked);

// ECOUTE EVENNEMENT : click sur "next"
body.buttonNext.addEventListener('click', onNextPhotoActivated);

// ECOUTE EVENNEMENT : click sur "Previous"
body.buttonPrevious.addEventListener('click', onPreviousPhotoActivated);

// ECOUTE EVENNEMENT : click sur "Play"
body.buttonPlay.addEventListener('click', onPlayActivated);

// ECOUTE EVENEMENT : click sur "Random"
body.buttonRandom.addEventListener('click', onRandomPhotoActivated);

// ECOUTE EVENEMENT : on tappe au clavier
document.addEventListener('keydown', onKeyboardPressed);
