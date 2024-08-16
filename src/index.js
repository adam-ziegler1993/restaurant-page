import "./CSS/home.css";
import "./CSS/about.css";
import "./CSS/menu.css";
import "./CSS/contact.css";
import "./CSS/table.css"

import { home } from './js/home.js';
import { menu } from './js/menu.js';
import { contact } from './js/contact.js';
import { about } from './js/about.js';
import { table } from './js/table.js';


function initNavigation() {
    const homeLink = document.querySelector('a[href="#home"]');
    const menuLink = document.querySelector('a[href="#menu"]');
    const aboutLink = document.querySelector('a[href="#about"]');
    const contactLink = document.querySelector('a[href="#contact"]');
    const tableLink = document.querySelector('a[href="#table"]');

    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        home();
    });

    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        menu();
    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        contact();
    });

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        about();
    });

    tableLink.addEventListener('click', (event) => {
        event.preventDefault();
        table();
    });
    // Default home page
    home();
}

document.addEventListener('DOMContentLoaded', initNavigation);

