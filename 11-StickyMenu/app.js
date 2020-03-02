(function() {
    /**
     * Utilities
     */
    // Fonction qui retourne le nombre de pixels la page actuellement défilés verticalement. (normalement on peut utiliser Window.scrollY, mais pas supporté sur tous les navigateurs, d'où cette fonction..)
    var scrollY = function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }


    var elements = document.querySelectorAll('[data-sticky]')
    for (let i = 0; i < elements.length; i++) {
        (function(element) {

            /**
             * Variables
             */
            var rect = element.getBoundingClientRect();
            var offset = element.getAttribute('data-offset');
            if (offset === null) {
                offset = 0;
            }
            offset = parseInt(offset, 10);
            var top = rect.top + scrollY();
            // On va créer un faux élément de la hauteur du menu pour éviter le décalage du main lorsque le menu passe en position fixed
            var fake = document.createElement("div");
            fake.style.width = rect.width + "px";
            fake.style.height = rect.height + "px";

            /**
             * Fonctions
             */
            var onScroll = function () {  
                var hasScrollClass = element.classList.contains('fixed');    
                if (scrollY() > (top - offset) && !hasScrollClass) {
                    element.classList.add('fixed');
                    element.style.top = offset + "px";
                    element.style.width = rect.width + "px";
                    element.parentNode.insertBefore(fake, element)
                } else if (scrollY() < (top - offset) && hasScrollClass) {
                    element.classList.remove('fixed');
                    element.parentNode.removeChild(fake);
                }
            }

            var onResize = function () {
                element.style.width = "auto";
                element.classList.remove('fixed');
                fake.style.display = "none";
                rect = element.getBoundingClientRect();
                top = rect.top + scrollY();
                fake.style.width = rect.width + "px";
                fake.style.height = rect.height + "px";
                fake.style.display = "block";
            }

            /**
             * Listeners
             */
            window.addEventListener('scroll', onScroll);
            window.addEventListener('resize', onResize);
        })(elements[i])  
    }

    

    
})()