document.addEventListener('DOMContentLoaded', function() {

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const nav = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    if (window.scrollY > 200) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});

});