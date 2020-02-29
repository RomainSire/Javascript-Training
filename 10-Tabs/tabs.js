(function () {

    /** 
     * Système d'onglets :
     */

    var afficherOnglet = function(a) {
        // Création de variables utiles :
        var li = a.parentElement; // li cliqué
        var div = a.parentElement.parentElement.parentElement; // div racine

        // Si on a cliqué sur l'élément déjà actif on ne fait rien = on arrête la fonction 
        if (li.classList.contains('active')) {
            return false;
        }

        // on enlève la classe active au tab actuel
        div.querySelector('.tabs .active').classList.remove('active');

        // on ajoute la classe active sur le li cliqué
        li.classList.add('active');

        /**
         * 1ere methode : plus simple, sans transitions
         */
        // on enlève la classe active du tab-content actuel
        //div.querySelector('.tabs-content .active').classList.remove('active');

        // on ajoute la classe active au tab content correspondant à la teb cliquiée
        //var href = a.getAttribute('href');
        //div.querySelector(href).classList.add('active');
        /**
         * 2eme methode : on veut un système de transition en utilisant les classes css .fade et .in
         */
        // Tout d'abord les variables utiles
        var activeTab = div.querySelector('.tabs-content .active');
        var aAfficher = div.querySelector(a.getAttribute('href'));
        // on ajoute la classe fade sur l'élément actif
        activeTab.classList.add("fade");
        activeTab.classList.remove("in");
        // à la fin de l'animation, on retire la classe fade et active
        activeTab.addEventListener('transitionend', function() {
            this.classList.remove('fade');
            this.classList.remove('active');
            // on ajoute la classe .active et .fade à l'élément à afficher
            aAfficher.classList.add('active');
            aAfficher.classList.add('fade');
            // on ajoute la classe .in à l'élément à afficher plus tard pour garder l'effet d'animation. sinon on passe d'un display à un autre et ça fait foirer les transitions
            aAfficher.offsetWidth; // on demande de calculer la largeur.. on n'en a pas besoin, mais du coup ça force le navigateur à appliquer les classes .active et .fade dans un premier temps
            aAfficher.classList.add('in');
        })
    }


    var tabs = document.querySelectorAll(".tabs a");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function(e) {
            afficherOnglet(this);
        });
        
    }

    /** 
     * Pour aller directement sur le bon onglet grâce au lien hypertexte
     */
    // On récupère le hash du lien
    var hash = window.location.hash;
    var a = document.querySelector('a[href="' + hash + '"]');
    // si le hash correspond bien à un élément de ma page, et que cet élément n'a pas déjà la classe active :
    if (a !== null && !a.classList.contains('active')) {
        afficherOnglet(a);
    }



}) ()