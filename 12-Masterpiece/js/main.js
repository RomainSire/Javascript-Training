'use strict';

/* ----------------------------------------------------------- *|
  CODE PRINCIPAL (exécuté lorsque l'arbre html est chargé)
|* ----------------------------------------------------------- */
$(function() {

  // Gestionnaires d'évennements
  // Evenement click sur le canvas #masterpiece
  $('#masterpiece').on('click', onClickOnCanvas);
  // Evenement sur le click des boutons
  $('button').on('click', onClickOnButton);
});















