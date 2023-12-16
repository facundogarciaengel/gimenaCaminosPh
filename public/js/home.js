window.addEventListener('load', function() {

    let hamburger = document.querySelector('.hamburger-button');
    let menu = document.querySelector('#menu');
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('mostrar');
    });
    let main = document.querySelector('#main');
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            // Si el clic fue fuera del menú y del botón hamburguesa, oculta el menú
            menu.classList.remove('mostrar');
        }
    });
    
    });
