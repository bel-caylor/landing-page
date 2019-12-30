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
// const navBar = document.getElementByID('navbar__list');
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
    // navList = sections.dataset.nav
  navList = navList + "<a href=\"\#" + sections.id + "\">"
  navList = navList + "<li data-id=\"" + sections.id + "\">" + sections.dataset.nav + "</li></a>";});
  // navList = navList + "<a href=\"\#" + sections.id + "\"><li>" + sections.dataset.nav + "</li></a>";});
  // navList = navList + "<a href=\"\#section3\"><li>" + sections.dataset.nav + "</li></a>";});
  // navList = navList + "<li><a href=\"\#section3\">Section 1</a></li>";});
  // navList = navList + "<li>" + sections.dataset.nav + "</li>";});
  // console.log navList;
  return navList;
  // return '<li>Section 1</li>';
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
// navBar.insertAdjacentHTML('afterbegin', htmlTextToAdd());
navBar.insertAdjacentHTML('afterbegin', htmlTextToAdd());

// Set sections as active
// navBar.addEventListener('click', changeActiveClass('test'));
// querySelector('#navbar__list').addEventListener('click', changeActiveClass());
// navBar.addEventListener('click', function changeActive() {
//   var removeClass = document.getElementById(activeClass);
//   removeClass.classList.remove("your-active-class");
//   var addClass = document.getElementById(event.target.dataset.id);
//   addClass.classList.add("your-active-class");
//   activeClass = event.target.dataset.id;
// });
navBar.addEventListener('click', function () {changeActive(event.target.dataset.id)});
