// JavaScript Document

var hamMenu = document.querySelector("main section:first-of-type");

var hamButton = document.querySelector(".menuKnop");

hamButton.addEventListener("click", toggleHamburgermenu);

function toggleHamburgermenu() {
    hamMenu.classList.toggle("menuOverlay");
}
