//BURGER BUTTON
const humb = document.querySelector(".burger");
const burgerMenu = document.querySelector(".active-menu");

humb.addEventListener("click", humbHandler);

function humbHandler(e) {
    e.preventDefault();
    burgerMenu.classList.toggle('open');
}
