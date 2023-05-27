import { detail } from './data.js';

const closeDetailView = function closeDetailHandler() {
  const overlay = document.querySelector('.overlay');
  document.querySelector('.detail').style.display = 'none';
  overlay.remove();
};

const generateDetailView = (data) => {
  const detailView = document.createElement('div');
  detailView.classList.add('detail', 'detail-view');
  detailView.id = 'detail';

  const detailViewContainer = document.createElement('div');
  detailViewContainer.classList.add('detail-container');

  const closeButton = document.createElement('button');
  closeButton.classList.add('detail-close-btn');
  closeButton.id = 'close-card';

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const title = document.createElement('h3');
  title.classList.add('detail-text-header');
  title.id = 'detail-title';

  if (window.innerWidth >= 768) {
    const titleText = 'Keeping track of hundreds of components';
    title.textContent = titleText;
  } else {
    title.textContent = 'Keeping track of hundreds of components';
  }

  const tagList = document.createElement('ul');
  tagList.classList.add('detail-list-box');
  const allowedTags = [];

  if (window.innerWidth >= 768) {
    allowedTags.push(
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    );
  } else {
    allowedTags.push('Ruby on Rails', 'CSS', 'Javascript');
  }

  data.tags.forEach((tag) => {
    if (allowedTags.includes(tag)) {
      const tagItem = document.createElement('li');
      tagItem.textContent = tag;
      tagItem.classList.add('list-items');
      tagList.appendChild(tagItem);
    }
  });

  const tags = document.createElement('div');
  tags.appendChild(tagList);

  const paragraph = document.createElement('div');
  paragraph.classList.add('detail-text');

  if (window.innerWidth >= 768) {
    paragraph.innerHTML = `${data.desparagraph}<br>`;
  } else {
    paragraph.innerHTML = `${data.paragraph}<br>`;
  }

  const sourceBtn1 = document.createElement('button');
  sourceBtn1.classList.add('detail-btn');
  sourceBtn1.textContent = 'See live';
  sourceBtn1.addEventListener('click', () => {
    window.open(data.liveLink, '_blank');
  });
  const sourceLink1 = document.createElement('a');
  sourceLink1.href = data.liveLink;
  const sourceIcon1 = document.createElement('img');
  sourceIcon1.src = './assets/images/seeLive-btn.svg';
  sourceIcon1.alt = 'Live icon';
  sourceLink1.appendChild(sourceIcon1);
  sourceBtn1.appendChild(sourceLink1);

  const sourceBtn2 = document.createElement('button');
  sourceBtn2.classList.add('detail-btn');
  sourceBtn2.textContent = 'See source';
  sourceBtn2.addEventListener('click', () => {
    window.open(data.sourceLink, '_blank');
  });
  const sourceLink2 = document.createElement('a');
  sourceLink2.href = data.sourceLink;
  const sourceIcon2 = document.createElement('img');
  sourceIcon2.src = './assets/images/seeSrc-btn.svg';
  sourceIcon2.alt = 'GitHub icon';
  sourceLink2.appendChild(sourceIcon2);
  sourceBtn2.appendChild(sourceLink2);

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('detail-btn-box');
  btnContainer.appendChild(sourceBtn1);
  btnContainer.appendChild(sourceBtn2);

  const headerBox = document.createElement('div');
  headerBox.classList.add('detail-header-box');

  const textContainer = document.createElement('div');
  textContainer.classList.add('detail-text-container');

  if (window.innerWidth >= 768) {
    headerBox.appendChild(title);
    headerBox.appendChild(btnContainer);

    textContainer.appendChild(headerBox);
    textContainer.appendChild(tags);
    textContainer.appendChild(paragraph);
  } else {
    textContainer.appendChild(title);
    textContainer.appendChild(tags);
    textContainer.appendChild(paragraph);
    textContainer.appendChild(btnContainer);
  }

  detailViewContainer.appendChild(closeButton);
  detailViewContainer.appendChild(imageContainer);
  detailViewContainer.appendChild(textContainer);

  detailView.appendChild(detailViewContainer);

  return detailView;
};

const displayDetailView = () => {
  const detailViewContainer = document.querySelector('#detail-container');

  detail.forEach((data) => {
    const detailView = generateDetailView(data);
    detailView
      .querySelector('#close-card')
      .addEventListener('click', closeDetailView);
    detailViewContainer.appendChild(detailView);
  });
};
displayDetailView();