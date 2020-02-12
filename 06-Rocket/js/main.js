'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

// création d'un objet qui contient touts les sélecteurs html utiles :
var body = {
  'firingButton': document.querySelector('#firingButton'),
  'secDisplay': document.querySelector('#billboard span'),
  'rocket': document.querySelector('#rocket'),
  'cancelButton': document.querySelector('#cancelButton'),
  'resetButton': document.querySelector('#resetButton')
}

// variable qui contient les secondes restantes avant la mise à feu
var secondsLeft = 10;

// variable dans laquelle est stocké l'intervele du countdown
var timer;
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

// Fonction de gestion du compteur :
function countdown() {
  // affiche les secondes à l'écran
  body.secDisplay.textContent = secondsLeft;
  // décrémente le compteur de secondes
  secondsLeft--;
  // quand on arrive à 0 plusieurs choses se produisent :
  if (secondsLeft < 0) {
    // si on arrive à 0, le countdown s'arrête
    window.clearInterval(timer);
    // on attribue la classe 'tookOff' à la fusée (= la fusée décolle)
    body.rocket.classList.add('tookOff');
    // on remplace l'image la fusée qui démarre par la fusée en vol :
    body.rocket.setAttribute('src', 'images/rocket3.gif');
    // on arrête d'écouter le bouton cancel :
    body.cancelButton.removeEventListener('click', onCancelButtonClick);
  }

}

// fonction exécutée lorsqu'on clique sur le boutton de mise à feu :
function onFiringButtonClick() {
  // on supprime le EventListener du boutton Fire
  body.firingButton.removeEventListener('click', onFiringButtonClick);
  // On ajoute l'évènement click sur le bouton Cancel :
  body.cancelButton.addEventListener('click', onCancelButtonClick);
  // on remplace la fusée statique, par le gif de la fusée qui démarre :
  body.rocket.setAttribute('src', 'images/rocket2.gif');

  countdown()  // on appelle une première fois la fonction Countdown
  // On lance la fonction 'countdown', chaque seconde (save dans une variable)
  timer = window.setInterval(countdown, 1000);
}



function onCancelButtonClick() {
  // Le countdown s'arrête :
  window.clearInterval(timer);
  // La fusée reprend son apparence normale :
  body.rocket.setAttribute('src', 'images/rocket1.png');
  // de nouveau on écoute le bouton fire :
  body.firingButton.addEventListener('click', onFiringButtonClick);
}

function onResetButtonClick() {
  // on remet le compteur à 0
  secondsLeft = 10;
  body.secDisplay.textContent = secondsLeft;
  // Le countdown s'arrête (au cas où il serait déjà en fonctionnement) :
  window.clearInterval(timer);
  // on remet la fusée en place :
  body.rocket.classList.remove('tookOff');
  // de nouveau on écoute le bouton fire :
  body.firingButton.addEventListener('click', onFiringButtonClick);
  // La fusée reprend son apparence normale :
  body.rocket.setAttribute('src', 'images/rocket1.png');
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

body.secDisplay.textContent = secondsLeft;

// Evennement : click sur le boutton de mise à feu :
body.firingButton.addEventListener('click', onFiringButtonClick);

// Evennement : click sur le bouton Reset :
body.resetButton.addEventListener('click', onResetButtonClick);