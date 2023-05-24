import { workcards } from './data.js';

const generateWorkCardHTML = (workcard) => {
  const { title, subtitle, tags } = workcard;
  const tagsHTML = tags
    .map((tag) => `<li class="list-items">${tag}</li>`)
    .join('');
  const cardHTML = `
    <div class="card">
      <div class="text-box">
        <h2 class="text">${title} ${subtitle}</h2>
        <ul class="list-box">
          ${tagsHTML}
        </ul>
        <button class="btn card-btn" id="card-btn" onclick="openDetailView()">See Project</button>
      </div>
    </div>
  `;

  return cardHTML;
};

const displayWorkCards = () => {
  const cardWorkflow = document.querySelector('.card-workflow');
  workcards.forEach((workcard) => {
    const cardHTML = generateWorkCardHTML(workcard);
    cardWorkflow.insertAdjacentHTML('beforeend', cardHTML);
  });
};

displayWorkCards();
