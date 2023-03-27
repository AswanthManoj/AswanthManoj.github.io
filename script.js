
function aboutTransform() {
  const $ = document.querySelector.bind(document);
  const letters = $("#about .letters-left-to-right");
  const scroll = window.scrollY;
  letters.style.transform = `translateX(${0.8*scroll}px)`;
}

function projectsTransform() {
  const $ = document.querySelector.bind(document);
  const letters = $("#projects .letters-right-to-left");
  const scroll = window.scrollY;
  letters.style.transform = `translateX(${-0.8*scroll}px)`;
}

function skillsTransform() {
  const $ = document.querySelector.bind(document);
  const letters = $("#skills .letters-left-to-right");
  const scroll = window.scrollY;
  letters.style.transform = `translateX(${0.8*scroll}px)`;
}

function educationTransform() {
  const $ = document.querySelector.bind(document);
  const letters = $("#education .letters-right-to-left");
  const scroll = window.scrollY;
  letters.style.transform = `translateX(${-0.8*scroll}px)`;
}

function contactsTransform() {
  const $ = document.querySelector.bind(document);
  const letters = $("#contacts .letters-left-to-right");
  const scroll = window.scrollY;
  letters.style.transform = `translateX(${0.8*scroll}px)`;
}

window.addEventListener("scroll", aboutTransform);
window.addEventListener("scroll", projectsTransform);
window.addEventListener("scroll", skillsTransform);
window.addEventListener("scroll", educationTransform);
window.addEventListener("scroll", contactsTransform);


