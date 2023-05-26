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
