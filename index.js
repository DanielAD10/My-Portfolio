import workcards from './works-data.js';
import aboutcards from './about-data.js';

// itirate through the worksdata
// for each card in workscards  loop and access the objects values
// itirate through the aboutdata
// for each card in aboutcards loop and access the objects values
const openMobileMenu = function openMobileMenuHandler() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.style.display = 'flex'; // Show the mobile menu
};

const closeMobileMenu = function closeMobileMenuHandler() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.style.display = 'none'; // Hide the mobile menu
};

document.getElementById('nav-btn').addEventListener('click', openMobileMenu);
document.getElementById('close-btn').addEventListener('click', closeMobileMenu);
