'use strict';

/**
 * add event on multiple elements
 */
const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0; len = elements.length; i < len; i++) {
        elements[i].addEventListener (eventType, callback);
    }
}

/**
 * MOBILE NAVBAR
 * navbar will show after clicking menu button
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNav);

navToggler.addEventListener("click", toggleNav);

const navClose = () => {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
} 

addEventOnElements(navLinks, "click", navClose);