"use strict";

// Déclaration des variables
var responsePlayer;
var random;
var responseComputer;
var choices;
var numberOfGames;
var scorePlayer;
var scoreComputer;

// ititialisation des variables
numberOfGames = 0;
scorePlayer = 0;
scoreComputer = 0;


// Affichage du titre du jeu
document.write("<h1>Battle de Chifoumi</h1>");


// La partie se gagne avec "numberOfGames" points, défini par l'utilisateur
while (numberOfGames == 0 || isNaN(numberOfGames)) {
  numberOfGames = window.prompt("Combien de points faut-il pour gagner ?")
}

// Boucle jusqu'à ce que l'un des joueur atteigne le score nécessaire pour gagner ("numberOfGames")
while (scorePlayer < numberOfGames && scoreComputer < numberOfGames) {


  // Demander au joueur quelle possibilité il veut choisir
  responsePlayer = window.prompt("pierre, feuille ou ciseau ?");
  // Transformer ce qu'a tapé l'utilisateur en minuscules pour pouvoir comparer plus facilement
  responsePlayer = responsePlayer.toLowerCase();


  // Attribuer une réponse alétoire à l'ordinateur
  random = parseInt(Math.random()*3);
        // renvoie 0, 1, ou 2
        // autre possibilité : utiliser Math.floor() à la place de parseInt
  // Définition d'un tableau avec toutes les réponses possibles, et déduction de la réponse de l'ordinateur
  choices = [
    "pierre",
    "feuille",
    "ciseau"
  ];
  responseComputer = choices[random];


  // Affichage des réponses
  document.write('<div class="partie"><p>Vous avez choisi : ' + responsePlayer + "<br>");
  document.write("L'ordinateur a choisi : " + responseComputer + "</p>");


  // Tests pour savoir qui gagne et affichage du résultat

  if (responsePlayer == responseComputer) {                                   // cas : égalité
    document.write("<p>Egalité !</p>");
  } else if ((responsePlayer == "pierre" && responseComputer == "feuille")    // cas : Gagné
          || (responsePlayer == "feuille" && responseComputer == "ciseau")
          || (responsePlayer == "ciseau" && responseComputer == "pierre")) {
    document.write("<p>Perdu !</p>");
    scoreComputer++;
  } else if ((responsePlayer == "pierre" && responseComputer == "ciseau")     // cas : Perdu
          || (responsePlayer == "feuille" && responseComputer == "pierre")
          || (responsePlayer == "ciseau" && responseComputer == "feuille")) {
    document.write("<p>Gagné !</p>");
    scorePlayer++;
  } else {
    document.write("</p><strong>Vous avez fait une erreur de saisie.</strong><br>Les choix possibles sont : 'pierre', 'feuille' ou 'ciseau'</p>");
  }

  // Affichage du score
  document.write("<p><strong>Score :</strong> Joueur : " + scorePlayer + " | Computer : " + scoreComputer + "</p></div>");
}


// Affichage du message gagné / perdu
document.write('<div class="center">')

if (scorePlayer > scoreComputer) {
  document.write('<h2>Vous avez Gagné</h2>');
  document.write('<img src="img/win.png" alt="Gangé !">');
  document.write("<h3>Appuyez sur F5 pour rejouer</h3>");
} else if (scorePlayer < scoreComputer) {
  document.write("<h2>Vous avez Perdu</h2>");
  document.write('<img src="img/fail.png" alt="Perdu">');
  document.write("<h3>Appuyez sur F5 pour rejouer</h3>")
} else {
  document.write("<h3>Appuyez sur F5 pour rejouer</h3>")
}

document.write('</div>')


