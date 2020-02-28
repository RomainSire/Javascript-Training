"use strict";
(function () {  // fonction qui s'auto-appelle pour tout ne pas avoir de variable globale

  /**
   * Principe : lorsqu'on clique sur le bouton "afficher le spoiler", alors le spoiler masqué par défaut devient visible (càd, la classe .visible est ajouté au Spoiler
   */

  var elements = document.querySelectorAll(".spoiler");

  var createSpoilerButton = function (element) {
    // On crée une span avec le texte du spoiler
    var span = document.createElement('span');
    span.className = "spoiler-content";
    span.innerHTML =element.innerHTML;

    // On crée le bouton
    var button = document.createElement('button');
    button.className = "spoiler-btn";
    button.textContent = "Afficher le spoiler";

    // on nettoie ce qu'il y a dans l'élément avec la classe .spoiler
    element.innerHTML = "";
    // on ajoute la span et le bouton au DOM dans l'element parent (celui qui a la calsse .spoiler)
    element.appendChild(button);
    element.appendChild(span);

    // On crée ensuite l'écouteur d'element comme tout à l'heure :
    button.addEventListener('click', function () {
      button.parentNode.removeChild(button);
      span.classList.add("visible");
    })

  }

  for (var i = 0; i < elements.length; i++) {
    createSpoilerButton(elements[i]);

  }



})()
