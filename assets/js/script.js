document.addEventListener('DOMContentLoaded', function() {
//Evento tooltip para botón de envío formulario
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Evento de scroll que modifica la barra de navegación
const nav = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    if (window.scrollY > 200) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});

});