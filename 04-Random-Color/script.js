'use strict';   // Mode strict du JavaScript

// Déclaration des variables & constantes
var answer;
var red;
var green;
var blue;
const HEXA = 1;
const RGB = 2;

// Fonction qui renvoie un nombre entier aléatoire entre [min; max]
function randomIntNumber(min, max) {
  var range = max - min;
  return min + Math.round(Math.random()*range);
};

// Fonction qui convertit en hexadécimal
function convertToHexa(number) {
  if (number < 16) {
    return 0 + number.toString(16);
  } else {
    return number.toString(16);
  }
}


// Attribution d'une valeur aléatoire entre [0, 255] à rouge, vert, et bleu
red = randomIntNumber(0, 255);
green = randomIntNumber(0, 255);
blue = randomIntNumber(0, 255);



// // OPTION 1 : l'utilisateur peut choisir entre HEXA ou RGB
// // demander à l'utilisateur s'il veut la couleur en hexa ou en rgb
// do {
//   answer = parseInt(window.prompt("Voulez-vous la couleur en hexadécimal ou en rgb ? 1 = hexa ; 2 = rgb"));
// } while (isNaN(answer) || answer < 1 || answer > 2);
//
// // affichage de la couleur en texte
// switch (answer) {
//   case HEXA:
//     document.write('<p>Code couleur en HEXA : #' + convertToHexa(red) + convertToHexa(green) + convertToHexa(blue) + ';</p>');
//     break;
//   case RGB:
//     document.write('<p>Code couleur en RGB : rgb(' + red + ', ' + green + ', ' + blue + ');</p>');
//     break;
// }


// OPTION 2 : On affiche affiche l'HEXA et le RGB à chaque fois !
document.write('<p>Code couleur en HEXA : #' + convertToHexa(red) + convertToHexa(green) + convertToHexa(blue) + ';</p>');
document.write('<p>Code couleur en RGB : rgb(' + red + ', ' + green + ', ' + blue + ');</p>');



// affichage de l'apperçu de la couleur
document.write('<div style="background-color: rgb(' + red + ', ' + green + ', ' + blue + '); height: 50px; width: 200px;"></div>')
