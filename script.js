const openMobileMenu = () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'block'; // Show the mobile menu};
}

const closeMobileMenu = () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'none'; // Hide the mobile menu};
}

const openDetailView = () => {
  const detailView = document.querySelector('.detail');
  const overlay = document.createElement('div');
  detailView.style.display = 'block';
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);
};
  
document
        .getElementById('nav-btn')
        .addEventListener('click', openMobileMenu);

document
        .getElementById('close-btn')
        .addEventListener('click', closeMobileMenu);
document
        .querySelector('#card-btn')
        .addEventListener('click', openDetailView);

// Validate Contact Form
const contactForm = document.querySelector('.contact-form');
const fullNameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
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

// Local Storage

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
