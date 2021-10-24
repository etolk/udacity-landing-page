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
*/
const sections = document.querySelectorAll("[id*='section']");
const fragment = document.createDocumentFragment();
const navMenu = document.getElementById('navbar__list');
/**
 * End Global Variables
 */

/**
 * Begin Main Functions
*/

// build the nav
let buildMenu = () => {
    for (let i = 0; i < sections.length; i++) {
        const navElement = document.createElement('li');
        const anchorElement = document.createElement('a');
        anchorElement.innerText = sections[i].querySelector('h2').textContent;
        anchorElement.setAttribute('class', 'menu__link');
        anchorElement.setAttribute('href', '#' + sections[i].id);
        navElement.appendChild(anchorElement);
        navElement.setAttribute('class', sections[i].id);
        fragment.appendChild(navElement);
    };
    navMenu.appendChild(fragment);
};
buildMenu();

// Add class 'active' to section when near top of viewport
let makeSectionActive = () => {
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            section.setAttribute('class', 'active');
            document.querySelector('.' + section.id).classList.add('active');
        } else {
            section.classList.remove('active');
            document.querySelector('.' + section.id).classList.remove('active');
        }
    }
}

/**
 * End Main Functions
 */

/**
 * Begin Events
*/

// Scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Set sections as active
document.addEventListener("scroll", function () {
    makeSectionActive();
});
/**
 * End Events
*/