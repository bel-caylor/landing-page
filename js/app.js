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
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
const navBar = document.querySelector('ul#navbar__list');
let activeClass = "section1";
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
function htmlTextToAdd() {
  let navList = ""
  sections.forEach(function(sections) {
  navList = navList + "<a href=\"\#" + sections.id + "\">"
  navList = navList + "<li data-id=\"" + sections.id + "\">" + sections.dataset.nav + "</li></a>";});
  return navList;
}



// Add class 'active' to section when near top of viewport
function changeActive(newSection) {
  let removeClass = document.getElementById(activeClass);
  removeClass.classList.remove("your-active-class");
  let addClass = document.getElementById(newSection);
  addClass.classList.add("your-active-class");
  activeClass = newSection;
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu with anchor link
navBar.insertAdjacentHTML('afterbegin', htmlTextToAdd());
//Listen for click on navigation bar and change active class.
navBar.addEventListener('click', function () {changeActive(event.target.dataset.id)});
