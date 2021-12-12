// JavaScript Document

var hamMenu = document.querySelector("main section:first-of-type");

var hamButton = document.querySelector(".menuKnop");

hamButton.addEventListener("click", toggleHamburgermenu);

function toggleHamburgermenu() {
    document.body.classList.toggle("menuOverlay");
}

// maak textvlak groter in de gebarentaal pagina

var zichtbaarheid = document.querySelector("main section:nth-of-type(3) article");

var textBlok = document.querySelector("main section:nth-of-type(3)");

var uitklapKnop = document.querySelector("uitklapInfo");

textBlok.addEventListener("click", toggleDropdown);

textBlok.addEventListener("click", togglekleur);

function toggleDropdown() {
    textBlok.classList.toggle("infoGebaren");
}

function togglekleur() {
    zichtbaarheid.classList.toggle("tekstZichtbaar");
}

