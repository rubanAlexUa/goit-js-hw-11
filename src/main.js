import { getImage } from './js/pixabay-api.js';
import { make } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form-find-img');
const message = document.querySelector('.message');

form.addEventListener('submit', e => {
  e.preventDefault();
  message.textContent = 'Wait, the image is loaded';
  const searchQuery = e.currentTarget.elements.input.value.trim();
  getImage(searchQuery).then(images => {
    if (images.length > 0) {
      make(images, '.gallery');
    } else {
      iziToast.error({
        position: 'topRight',
        message: `Sorry, there are no images matching your search ${searchQuery}. Please try again!`,
      });
    }
  });
  message.textContent = '';
});
