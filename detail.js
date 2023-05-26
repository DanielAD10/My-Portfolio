import { detail } from './data.js';

const openDetailView = function openDetailHandler() {
  const detailView = document.querySelector('.detail-container');
  // const blurOverlay = document.createElement('div');
  // blurOverlay.classList.add('blur-overlay');
  // document.body.appendChild(blurOverlay);

  detailView.style.display = 'block';
}; 

const closeDetailView = function closeDetailHandler() {
  const blurOverlay = document.querySelector('.blur-overlay');
  const detailView = document.querySelector('.detail');
  detailView.style.display = 'none'; 
  blurOverlay.remove();
};

document.querySelector('#card-btn').addEventListener('click', openDetailView); // Show the detail view
document.querySelector('#close-card').addEventListener('click', closeDetailView); //Hide the detail view
