// Fonction qui s'exécute lors du click sur le canvas #Masterpiece
function onClickOnCanvas(e) {
  // la position x et y récupéré dans l'évènement est la position de la souris par rapport à la fenetre. on veut la position par rapport au canvas.
  //this correspond au Canvas
  var canvasSize = this.getBoundingClientRect();  // on commence par récupérer la position du canvas
  // on soustrait la position de la souris à la position du canvas (on enlève aussi la largeur du cadre)
  var x = e.clientX - canvasSize.left - 10;
  var y = e.clientY - canvasSize.top - 10;
  // x et y sont les coordonnées de la souris par rapport au canvas

  // initialisation du canvas
  var c = document.getElementById("masterpiece");
  var ctx = c.getContext("2d");

  // on va récupérer la forme qu'on désire dessiner dans le sessionStorage
  var shape = window.sessionStorage.getItem("shape")

  // en fonction de la forme choisie, on va effectuer des instruction de dessin différentes
  // si aucune forme n'est choisie, par défaut, on dessine un cercle
  switch (shape) {
    // DESSINER UN CARRÉ
    case 'square':
      var size = randomIntNumber(5, 140); // taille du carré aléatoire
      var angle = Math.random() * Math.PI; // angle de rotation en rad
      ctx.fillStyle = randomRGBAColor(); // couleur aléatoire de remplissage
      // Gestion de la rotation du carré :
      ctx.translate(x + size/2, y + size/2);
      ctx.rotate(angle);
      ctx.fillRect((-1)*size/2, (-1)*size/2, size, size); //fillRect(startx, starty, largeur, hauteur)
      ctx.rotate((-1) * angle);
      ctx.translate((-1)*(x + size/2), (-1)*(y + size/2));
      break;

    // DESSINER UN EMOJI
    case 'emoji':
      var size = randomIntNumber(5, 70);

      // le visage
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI*2, true);
      ctx.fillStyle = randomRGBAColor();
      ctx.fill();
      // la Bouche
      ctx.beginPath();
      ctx.arc(x, y + size/4, size/2, 0, Math.PI,false);
      ctx.fill();
      // oeil droit
      ctx.beginPath();
      ctx.arc(x + size/3, y - size/4, size/6, 0, Math.PI*2,false);
      ctx.fill();
      // oeil gauche
      ctx.beginPath();
      ctx.arc(x - size/3, y - size/4, size/6, 0, Math.PI*2,false);
      ctx.fill();


      break;

    // DESSINER UN CERCLE
    case 'circle':
    default:
      ctx.beginPath();
      ctx.arc(x,y,randomIntNumber(5, 70),0,Math.PI*2,true);  // arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
      ctx.fillStyle = randomRGBAColor();
      ctx.fill();
  }
}


// Fonction exécutée lors du click sur l'un des boutons de sélection
function onClickOnButton() {
  // On stocke la forme qu'on veut dessiner dans le sessionStorage
  window.sessionStorage.setItem('shape', $(this).data('shape'))
}