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

//Local Storage
const form = document.querySelector(".contact-form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const contactDetails = {
  userName: String,
  userEmail: String,
  userMsg: String
};

form.addEventListener('input', () => {
  contactDetails.userName = fullName.value;
  contactDetails.userEmail = email.value;
  contactDetails.userMsg = message.value;

  localStorage.setItem('contactDetails', JSON.stringify(contactDetails));
})

window.onload = () => {
  const contactData = JSON.parse(localStorage.getItem('contactDetails'));

  if(contactData) {
    fullName.value = contactData.userName;
    email.value = contactData.userEmail;
    message.value = contactData.userMsg;
  }
}
