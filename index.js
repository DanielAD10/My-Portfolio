const openMobileMenu = function openMobileMenuHandler() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'block'; // Show the mobile menu
};

const closeMobileMenu = function closeMobileMenuHandler() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'none'; // Hide the mobile menu
};

document.getElementById('nav-btn').addEventListener('click', openMobileMenu);
document.getElementById('close-btn').addEventListener('click', closeMobileMenu);
