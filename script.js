const openMobileMenuHandler = () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'block'; // Show the mobile menu
};

const closeMobileMenuHandler = () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'none'; // Hide the mobile menu
};

document
  .getElementById('nav-btn')
  .addEventListener('click', openMobileMenuHandler);
document
  .getElementById('close-btn')
  .addEventListener('click', closeMobileMenuHandler);

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
