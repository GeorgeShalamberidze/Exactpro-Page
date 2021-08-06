// Toggle active links - middle section menu
const navLinks = document.querySelectorAll(".menu__item");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// Toggle side menu - main nav MENU link
const menu = document.getElementById("toggle");
const rightSidebar = document.getElementById("right-sidebar");
const close = document.getElementById("close");
const sidemenu = document.querySelector(".sidemenu");

const body = document.querySelector("body");
body.addEventListener("click", (e) => {
  if (e.target == sidemenu) {
    rightSidebar.classList.remove("hidden__sidebar");
    sidemenu.classList.remove("pseudo");
  }
});
menu.addEventListener("click", () => {
  rightSidebar.classList.toggle("hidden__sidebar");
  sidemenu.classList.add("pseudo");
});

close.addEventListener("click", () => {
  rightSidebar.classList.remove("hidden__sidebar");
  sidemenu.classList.remove("pseudo");
});

// Scroll Up Functionality

window.addEventListener("scroll", () => {
  const scroll = document.getElementById("scroll-up");
  if (window.scrollY >= 150) {
    scroll.classList.add("scroll-visible");
  } else {
    scroll.classList.remove("scroll-visible");
  }
});

// Sroll Reveal
const scroll = ScrollReveal({
  distance: "50px",
  duration: 2800,
});

scroll.reveal(
  ".mission, .testing__section, .contact__container .middle__section, .wrapper",
  {
    origin: "top",
    interval: 100,
  }
);

scroll.reveal(".whatwedo__top, .left__section", {
  origin: "left",
  interval: 100,
});

scroll.reveal(".content__container, .aboutUs, .right__section", {
  origin: "bottom",
  interval: 100,
});
