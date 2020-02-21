'use strict';   // Mode strict du JavaScript

/* ---------------------------------------- *|
  VARIABLES et CONSTANTES
|* ---------------------------------------- */
// variable indiquant quel contact est actuellement affiché (null, si rien n'est affiché)
var currentContactDisplayed = null;
// variable indiquant si on veut éditer (sinon, on va ajouter un nouveau contact)
var editRequested = false;
// Constantes pour le titre
const MME = 1;
const MLLE = 2;
const MR = 3;


// Récupération du tableau de contacts (s'il existe). Penser à utiliser les fonctions de JSON
// Si j'ai quelque chose dans le localStorage alors addressBook = localStorage
// Sinon c'est un tableau vide
var addressBook;
if (window.localStorage.getItem("ADDRESS_BOOK") === null) { // Si le localStorage est vide
  addressBook = []; // On crée un tableau vide
} else { // Sinon
  addressBook = JSON.parse(window.localStorage.getItem("ADDRESS_BOOK")); // on récupère le localStorage
}



/* ---------------------------------------- *|
  FONCTIONS
|* ---------------------------------------- */

/*
 *  FONCTION POUR AFFICHER LA LISTE DE TOUS LES CONTACTS
 */
function displayContacts() {
  // Suppression de tous les <li> déjà affichés
  $('#address-book ul li').remove();

  // Boucle sur le nombre d'élément de ce Tableau
  for (var i = 0; i < addressBook.length; i++) {
    $('#address-book ul').append('<li>' + addressBook[i]['firstName'] + ' ' + addressBook[i]['lastName'] + '</li>');
    // AUTRE METHODE qui permet, lorsqu'on clique sur un élément <li>, d'envoyer l'index : on peut utiliser l'attribut data-*
    //$('#address-book ul').append('<li data-index="' + i + '">' + addressBook[i]['firstName'] + ' ' + addressBook[i]['lastName'] + '</li>');
  }

}



/*
 *  FONCTION POUR AFFICHER / MASQUER LA SECTION addContact
 */
function onToggleAddContact() {
  // Si on clique sur 'ajouter', on ne veut pas éditer !
  editRequested = false;
  // au cas où, on masque le détail contact, s'il est affiché
  //$('#contact-details').addClass('hidden');
  $('#contact-details').slideUp();
  currentContactDisplayed = null;
  // "nettoyer" les champs du formulaire
  $('#contactForm form').trigger('reset');

  // Si les 2 sections contactForm et contact-details sont visibles, càd, on est en train d'éditer un contact, alors on masque,
  if ($('#contactForm').is(":visible") && $('#contact-details').is(":visible")) {
    $('#contactForm').slideToggle();
  }
  // on toggle la classe 'hidden' de la section formulaire
  $('#contactForm').slideToggle();
}

/*
 *  FONCTION POUR SUPPRIMER TOUS LES CONTACTS
 */
function onClearButtonClicked() {
  // !! EVITER de faire un clear sur le localStorage! C'est trop violent, et s'il y a d'autres applications sur le site, ça va tout effacer sans distinctions !
  // on efface la variable globale
  addressBook = [];
  // Enregistrer le tableau dans le localStorage (penser à JSON)
  window.localStorage.setItem('ADDRESS_BOOK', JSON.stringify(addressBook));
  // Afficher la liste de contacts (maintenant vide !)
  displayContacts();
  // au cas où, on masque les sections, si elles sont affichées
  $('#contact-details').slideUp();
  currentContactDisplayed = null;
  $('#contactForm').slideUp();
}


/*
 *  FONCTION POUR AJOUTER UN CONTACT
 */
function onFormSubmitted(event) {
  // Empeche d'envoyer le formulaire :
  event.preventDefault();

  // Récupération des infos du formulaire dans des variables, et création de l'objet qui représente le contact
  var contact = {
    'title' : $('#title').val(),
    'lastName' : $('#lastName').val(),
    'firstName' : $('#firstName').val(),
    'phone' : $('#phone').val()
  };

  if (editRequested === true) {  // si on veut éditer
    // on update le tableau addressBook
    addressBook[currentContactDisplayed] = contact;
    // on stoppe la fonctionnalité d'édition pour repartir sur une fonctionnalité d'ajout de new contact
    editRequested === false;
  } else {  // sinon, on veut créer un nouveau contact
    // Ajouter l'objet du nouveau contact dans le tableau
    addressBook.push(contact);
  }

  // Enregistrer le tableau dans le localStorage (penser à JSON)
  window.localStorage.setItem('ADDRESS_BOOK', JSON.stringify(addressBook));

  // Cacher le formulaire d'ajout de contact
  onToggleAddContact();

  // Afficher la liste de contacts
  displayContacts();
}


/*
 *  FONCTION POUR AFFICHER LES DÉTAILS D'UN CONTACT
 */
function onContactClicked(event) {
  // Empeche de suivre le lien cliqué
  event.preventDefault();
  // On récupère l'index du contact à afficher.
  var index = $(this).index('li');

  // au cas où, on masque les sections contactForm & contact-details
  $('#contactForm').slideUp();

  // si cet index correspond au contact actuellement affiché, on masque la section 'contact-detail' et on arrête la fonction
  if (index == currentContactDisplayed) {
    $('#contact-details').slideUp();
    currentContactDisplayed = null;
    return;
  }

  $('#contact-details').slideUp(function() {
  // On met tout ce qui suit dans une fonction anonyme pour que le reste du code soit exécuté à la fin du slideUp, sinon c'est moche

        // On met à jour notre variable 'currentContactDisplayed'
        currentContactDisplayed = index;

        // On rajoute dans une nouvelle variable le titre (mr, mme, mlle)
        var title;
        switch (parseInt(addressBook[currentContactDisplayed]['title'])) {
          case MME:
            title = "Mme."
            break;
          case MLLE:
            title = "Mlle."
            break;
          case MR:
            title = "M."
            break;
        }
        // Suppression des détails de contacts déjà affichés
        $('#contact-details p').remove();
        // On affiche les détails dans la section contact-details
        $('#contact-details').append(
          '<p class="name">' +
          title + ' ' +
          addressBook[currentContactDisplayed]['firstName'] + ' ' +
          addressBook[currentContactDisplayed]['lastName'] +
          '</p>');
        $('#contact-details').append('<p>' + addressBook[currentContactDisplayed]['phone'] + '</p>');
        $('#contact-details').append('<p><a href="#">Editer ce contact</a></p>');
        $('#contact-details').append('<button type="button"><i class="fas fa-user-minus"></i> Suppr.</button>');

        // On affiche la section contact-details
        $('#contact-details').slideDown();

        // On écoute le click sur le lien d'édition du contact
        $('#contact-details a').on('click', onEditContactClicked);

        // On écoute le click sur le bouton supprimer contact
        $('#contact-details button').on('click', onDeleteContact);
  });

}

/*
 *  FONCTION POUR EDITER LES DÉTAILS D'UN CONTACT
 */
function onEditContactClicked(event) {
  // Empeche de suivre le lien cliqué
  event.preventDefault();

  // NB : ici j'ai utilisé une variable globale pour faire ça, mais autant que possible, éviter de le faire !!!
  // on aurait pu faire transiter l'info avec les attributs data-*

  // On complète le formulaire avec les bonnes infos du contact
  $('form input[name="lastName"]').val(addressBook[currentContactDisplayed]['lastName']);
  $('form input[name="firstName"]').val(addressBook[currentContactDisplayed]['firstName']);
  $('form input[name="phone"]').val(addressBook[currentContactDisplayed]['phone']);
  // Pour le titre c'est plus la merde, il faut d'abord enlever l'attribut selected sur toutes les options, puis rajouter cet attribut sur la bonen option
  $('form option').attr('selected', false);
  $('form option[value="' + addressBook[currentContactDisplayed]['title'] + '"]').attr('selected', true);

  // Afficher la section contactForm, avec les bonnes infos.
  $('#contactForm').slideToggle();

  // on dit qu'on veut éditer plutot qu'ajouter un nouveau contact
  editRequested = true;

}

/*
 *  FONCTION POUR SUPPRIMER UN CONTACT
 */
function onDeleteContact() {
  // on enlève le contact affiché de la variable tableau
  addressBook.splice(currentContactDisplayed, 1);
  // Enregistrer le tableau dans le localStorage (penser à JSON)
  window.localStorage.setItem('ADDRESS_BOOK', JSON.stringify(addressBook));
  // on masque le contact details
  $('#contact-details').slideUp();
  currentContactDisplayed = null;
  // on affiche la nouvelle liste
  displayContacts();
}



/* ---------------------------------------- *|
  Code principal
|* ---------------------------------------- */

// Au chargement de la page : on affiche les contacts enregistrés
displayContacts();

// On écoute l'envoi du formulaire :
$('form').on('submit', onFormSubmitted);

// BOUTON : Afficher / Masquer la section addContact
$('#add-contact').on('click', onToggleAddContact);

// BOUTON : Supprimer tous les contacts
$('#clear-address-book').on('click', onClearButtonClicked);

// On écoute le click sur les noms de la liste de contact
// !! on utilise les évènements délégués, car les <li> ne sont pas encore créés au chargement de la page !
$('#address-book ul').on('click', 'li', onContactClicked);
