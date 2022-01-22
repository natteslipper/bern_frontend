// JavaScript Document

var hamMenu = document.querySelector("main section:first-of-type");

var hamButton = document.querySelector(".menuKnop");

hamButton.addEventListener("click", toggleHamburgermenu);

function toggleHamburgermenu() {
    document.body.classList.toggle("menuOverlay");
}

// Kerstthema

var logo = document.querySelector('#logoKerst');
var knop = document.querySelector('header nav:first-of-type ul:last-of-type li:last-of-type');

var tickets = document.querySelector('header nav:first-of-type  ul:last-of-type li:nth-of-type(4) a');

function veranderTickets() {
    tickets.classList.toggle('kerst')
}

function veranderLogo() {
    logo.classList.toggle('logoNormaal');
}


knop.addEventListener('click', veranderLogo);
knop.addEventListener('click', veranderTickets);


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