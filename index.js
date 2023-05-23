const openMobileMenu = function openMobileMenuHandler() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.style.display = 'flex'; // Show the mobile menu
};

const closeMobileMenu = function closeMobileMenuHandler() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.style.display = 'none'; // Hide the mobile menu
};

const openDetailView = function openDetailHandler() {
  const detailView = document.getElementById('detail-container');
  detailView.style.display = 'flex'; // Show the mobile detail view
};

document.getElementById('nav-btn').addEventListener('click', openMobileMenu);
document.getElementById('close-btn').addEventListener('click', closeMobileMenu);
document.getElementById('card-btn').addEventListener('click', openDetailView);
