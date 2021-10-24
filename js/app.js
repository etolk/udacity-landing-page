/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("[id*='section']")
const fragment = document.createDocumentFragment();
const navMenu = document.getElementById('navbar__list')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let i = 0; i < sections.length; i++) {
    const navElement = document.createElement('li');
    navElement.innerText = sections[i].querySelector('h2').textContent;
    fragment.appendChild(navElement);
};

navMenu.appendChild(fragment);

// style the nav
navMenu.style.cssText = 'display: flex; justify-content: space-evenly; flex-wrap: wrap; font-size: 1.5em;';

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


