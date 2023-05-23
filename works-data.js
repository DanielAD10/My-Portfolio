const workscards = [
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
// export default workscards;

const cardContainer = document.querySelector('#card-workflow');

workscards.forEach((card) => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  const titleElement = document.createElement('h2');
  titleElement.textContent = `${card.title} ${card.subtitle}`;
  cardElement.appendChild(titleElement);

  const tagsList = document.createElement('ul');
  card.tags.forEach((tag) => {
    const listItem = document.createElement('li');
    listItem.textContent = tag;
    tagsList.appendChild(listItem);
  });
  cardElement.appendChild(tagsList);

  const projectButton = document.createElement('button');
  projectButton.classList.add('btn', 'card-btn');
  projectButton.textContent = 'See Project';
  cardElement.appendChild(projectButton);

  cardContainer.appendChild(cardElement);
});
