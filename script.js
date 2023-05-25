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

//Validate Contact Form
const form = document.querySelector(".contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const error = document.querySelector("#error");
const errorMessage = "** Please write your email address in lower case **";

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userEmail = email.value;
  if(userEmail !== userEmail.toLowerCase()) {
    error.style.display = "block";
    error.innerHTML = errorMessage;
  } else {
    error.innerHTML = "";
    form.submit();
  }
})

