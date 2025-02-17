import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function getImage(imgInfo) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '48844488-dc89d444e3fc14bdb2114dc7c',
        q: imgInfo,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      console.log(response);
      return response.data.hits;
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: `Sorry, there are no images matching your search ${imgInfo}. Please try again!`,
      });
      return [];
    });
}

getImage('/cat');
