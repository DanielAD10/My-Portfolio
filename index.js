const workcards = [
  {
    title: 'Multi-Post Stories',
    subtitle: 'Gain+Glory',
    image: '',
    tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectLink: '',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Gain+Glory',
    image: 'path/to/image2.jpg',
    tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectLink: '',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Gain+Glory',
    image: 'path/to/image2.jpg',
    tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectLink: '',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Gain+Glory',
    image: 'path/to/image2.jpg',
    tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectLink: '',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Gain+Glory',
    image: 'path/to/image2.jpg',
    tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectLink: '',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Gain+Glory',
    image: 'path/to/image2.jpg',
    tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectLink: '',
  },
];
export default workcards;

const openMobileMenu = function openMobileMenuHandler() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.style.display = 'flex'; // Show the mobile menu
};

const closeMobileMenu = function closeMobileMenuHandler() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.style.display = 'none'; // Hide the mobile menu
};

document.getElementById('nav-btn').addEventListener('click', openMobileMenu);
document.getElementById('close-btn').addEventListener('click', closeMobileMenu);
