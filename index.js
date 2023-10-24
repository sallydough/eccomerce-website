// Grab HTML element with id of'bar'
const bar = document.getElementById('bar');
//Grab HTML element with id of 'navbar'
const nav = document.getElementById('navbar');

//1. Check if Navbar is already opened or not
// if navbar not open - then if hamburger menu clicked, open nav bar
//if navbar is opened - then if hamburger menu clicked, close/hide nav bar

//add event listener to listen for if the hamburger menu is clicked
//if anyone clicked on the bar/burger menu - it will become active

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add("active");
  })
}