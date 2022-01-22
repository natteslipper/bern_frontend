// JavaScript Document

var hamMenu = document.querySelector("main section:first-of-type");

var hamButton = document.querySelector(".menuKnop");

hamButton.addEventListener("click", toggleHamburgermenu);

function toggleHamburgermenu() {
    document.body.classList.toggle("menuOverlay");
}

// maak textvlak groter in de gebarentaal pagina

var zichtbaarheid = document.querySelector("main section:nth-of-type(3) article");

var textBlok = document.querySelector("main section:nth-of-type(3) p:nth-of-type(2)");

var uitklapKnop = document.querySelector("uitklapInfo");

textBlok.addEventListener("click", toggleInfo);

textBlok.addEventListener("keydown", handelKeydown);

function handelKeydown(event) {
    console.log("toets")

    if (event.code == "Enter") {
        toggleInfo();
    }
}

function toggleInfo() {
    zichtbaarheid.classList.toggle("tekstZichtbaar");
}

var increase = document.querySelector('button:first-of-type');
var decrease = document.querySelector('button:last-of-type');
var body = document.querySelector('body');
var h2 = document.querySelector('h2');

function fontGroter() {
  body.classList.add('allfontLarger');
  h2.classList.add('fontLarger');
}

function fontKleiner() {
    body.classList.remove('allfontLarger');
  h2.classList.remove('fontLarger');
}

increase.addEventListener('click', fontGroter);
decrease.addEventListener('click', fontKleiner);
