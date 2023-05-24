import { aboutcards } from './data.js';

const generateAboutCardHTML = (aboutcard) => {
  const { icon, title, tags } = aboutcard;
  const tagsHTML = tags
    .map((tag) => `<li class="list-items common-tags-items">${tag}</li>`)
    .join('');
  const cardHTML = `
    <div class="card">
      <div class="logo">
        <img src="${icon}" alt="${title} logo">
      </div>
      <div class="box">
        <h2 class="text common-text">${title}</h2>
        <ul class="common-tags list-box common-box">
          ${tagsHTML}
        </ul>
      </div>
    </div>
  `;

  return cardHTML;
};

const displayAboutCards = () => {
  const cardWorkflow = document.querySelector('#about-workflow'); // Updated container ID
  aboutcards.forEach((aboutcard) => {
    const cardHTML = generateAboutCardHTML(aboutcard);
    cardWorkflow.insertAdjacentHTML('beforeend', cardHTML);
  });
};

displayAboutCards();
