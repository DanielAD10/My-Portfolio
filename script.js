const openMobileMenu = function openMobileMenuHandler() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'block'; // Show the mobile menu
};

const closeMobileMenu = function closeMobileMenuHandler() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'none'; // Hide the mobile menu
};

const openDetailView = function openDetailHandler() {
  const detailView = document.querySelector('.detail');
  const overlay = document.createElement('div');
  detailView.style.display = 'block';
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);
};

document.getElementById('nav-btn').addEventListener('click', openMobileMenu);
document.getElementById('close-btn').addEventListener('click', closeMobileMenu);
document.querySelector('#card-btn').addEventListener('click', openDetailView);
