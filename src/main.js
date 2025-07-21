import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

const onSearchFormSubmit = e => {
  e.preventDefault();
  clearGallery();
  const searchValue = e.target.elements['search-text'].value.trim();
  if (searchValue === '') {
    iziToast.error({
      message: 'The input field must be filled in!',
      position: 'topRight',
    });
    return;
  }
  showLoader();
  getImagesByQuery(searchValue)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(hits);
    })
    .catch(err => {
      iziToast.error({
        message: `Error: ${err}`,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
