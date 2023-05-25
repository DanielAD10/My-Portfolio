import { detail } from './data.js';

const generateDetailHTML = (detail) => {
  const { image, title, tags, text } = detail;
  const tagsHTML = tags
    .map((tag) => `<li class="list-items">${tag}</li>`)
    .join('');
  const detailHTML = `
    <div class="detail">
      <div class="detail-container">
        <img src="${icon}" alt="${title} logo">
      </div>
      <div class="box">
        <h2 class="text common-text">${title}</h2>
        <ul class="about-list-box">
          ${tagsHTML}
        </ul>
      </div>
    </div>
  `;

  return detailHTML;
};

const displayAboutCards = () => {
  const cardWorkflow = document.querySelector('#about-workflow');
  aboutcards.forEach((aboutcard) => {
    const cardHTML = generateAboutCardHTML(aboutcard);
    cardWorkflow.insertAdjacentHTML('beforeend', cardHTML);
  });
};

displayAboutCards();
