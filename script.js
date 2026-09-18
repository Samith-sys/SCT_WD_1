const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ==========================
// ACTIVE NAVIGATION
// ==========================

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ==========================
// MOBILE MENU
// ==========================

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


// Close mobile menu after clicking a link

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


// ==========================
// SMOOTH NAVIGATION
// ==========================

navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
