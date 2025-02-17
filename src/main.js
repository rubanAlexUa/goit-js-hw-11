import { getImage } from './js/pixabay-api.js';
import { make } from './js/render-functions.js';

const form = document.querySelector('.form-find-img');

form.addEventListener('submit', e => {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.input.value;
  getImage(searchQuery).then(images => {
    if (images.length > 0) {
      make(images, '.gallery'); // Передаємо отримані зображення у make()
    } else {
      console.warn('No images found');
    }
  });
});
