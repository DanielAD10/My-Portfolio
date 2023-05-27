const contactForm = document.querySelector('.contact-form');
const fullNameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const contactDetails = {
  userName: '',
  userEmail: '',
  userMsg: '',
};

const handleFormInput = () => {
  contactDetails.userName = fullNameInput.value;
  contactDetails.userEmail = emailInput.value;
  contactDetails.userMsg = messageInput.value;

  localStorage.setItem('contactDetails', JSON.stringify(contactDetails));
};

const populateFormInputs = () => {
  const contactData = JSON.parse(localStorage.getItem('contactDetails'));

  if (contactData) {
    fullNameInput.value = contactData.userName;
    emailInput.value = contactData.userEmail;
    messageInput.value = contactData.userMsg;
  }
};

contactForm.addEventListener('input', handleFormInput);
window.addEventListener('load', populateFormInputs);

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
const errorContainer = document.querySelector('#error');
const errorMessage = '** Please write your email address in lowercase **';

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const userEmail = emailInput.value;
  if (userEmail !== userEmail.toLowerCase()) {
    errorContainer.style.display = 'block';
    errorContainer.innerHTML = errorMessage;
  } else {
    errorContainer.innerHTML = '';
    contactForm.submit();
  }
});
