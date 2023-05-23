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
  detailView.style.display = 'block'; // Show the mobile detail view
};

const closeDetailView = function closeDetailHandler() {
  const detailView = document.querySelector('.detail');
  detailView.style.display = 'none'; // Hide the mobile menu
};

document.getElementById('nav-btn').addEventListener('click', openMobileMenu);
document.getElementById('close-btn').addEventListener('click', closeMobileMenu);
document.getElementById('card-btn').addEventListener('click', openDetailView);
document.getElementById('close-card').addEventListener('click', closeDetailView);
