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

// Validate Contact Form
const form = document.querySelector('.contact-form');
const emailInput = document.querySelector('#email');
const errorContainer = document.querySelector('#error');
const errorMessage = '** Please write your email address in lowercase **';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userEmail = emailInput.value;
  if (userEmail !== userEmail.toLowerCase()) {
    errorContainer.style.display = 'block';
    errorContainer.innerHTML = errorMessage;
  } else {
    errorContainer.innerHTML = '';
    form.submit();
  }
});
