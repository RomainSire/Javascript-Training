//----------  TABLE DE MULTIPLICATION  ----------//
// affichage du titre de la page
document.write("<h1>Table des multiplications</h1>");

// déclaration des variables
var tailleTable;

// Demander à l'utilisateur quelle sera la taille de la table de multiplication
do {
  tailleTable = parseInt(window.prompt("Entrez la taille de la table de multiplication"));
} while (isNaN(tailleTable));

// Début du tableau
document.write("<table>");
  // Boucle sur les lignes
  for (var i = 1; i < (tailleTable + 1); i++) {
    document.write("<tr>");
      // Boucle sur les colonnes
      for (var j = 1; j < (tailleTable + 1); j++) {
        // Si on se trouve sur la diagonale, on applique la classe "color" sur la cellule
        if (i == j) {
          document.write('<td class="color">' + (i * j) + "</td>")
        }else {
          document.write("<td>" + (i * j) + "</td>")
        }
      }
    document.write("</tr>");
  }
document.write("</table>");
