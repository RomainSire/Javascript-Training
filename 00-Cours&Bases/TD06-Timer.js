"use strict";
(function () {

    /**
     * Intervales
     */
    // 1ere solution : on crée une fonction séparée, et on l'appelle
    var demo = function () {
        console.log("coucou");
    }
    var timer1 = window.setInterval(demo, 1000);
    // je sauvegarde l'ID du timer dans une variable : timer1

    // 2ème solution : on crée une fonction directement appelée (= un callback)

    var timer2 = window.setInterval(function() {
        console.log("2 sec");
    }, 2000)
    // je sauvegarde l'ID du timer dans une variable : timer2

    /**
     * TIMEOUT : exécuter la fonction après un certain temps
     */
    window.setTimeout(function() {
        console.log("3 secondes !!! 1 seule fois !");
    }, 3000)


    /**
     * CLEARTIMEOUT et CLEARINTERVAL : permet de clear un interval ou timeout
     */
    // on va arrêter tous les intervales après 10 secondes :
    window.setTimeout(function() {
        window.clearInterval(timer1);
        window.clearInterval(timer2);
    },10000)
    


}) ()



