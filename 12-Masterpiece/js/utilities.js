// Fonction qui renvoie un nombre entier aléatoire entre [min; max]
function randomIntNumber(min, max) {
  var range = max - min;
  return min + Math.round(Math.random()*range);
};


function randomRGBAColor() {
  // Déclaration des variables & constantes
  var red;
  var green;
  var blue;
  var alpha;

  // Attribution d'une valeur aléatoire entre [0, 255] à rouge, vert, et bleu
  red = randomIntNumber(0, 255);
  green = randomIntNumber(0, 255);
  blue = randomIntNumber(0, 255);
  alpha = (Math.random() * 0.8) + 0.1;

  return 'rgb(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
}
