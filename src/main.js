import iziToast from 'izitoast';
import { getImagesByQuery, perPage } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadBtn: document.querySelector('.load-btn'),
};

let currentPage = 1;
let searchValue = '';
let totalHits = 0;

const onSearchFormSubmit = async e => {
  try {
    e.preventDefault();
    clearGallery();
    hideLoadMoreButton();
    // ==========
    currentPage = 1;
    // ==========

    searchValue = e.target.elements['search-text'].value.trim();
    if (searchValue === '') {
      iziToast.error({
        message: 'The input field must be filled in!',
        position: 'topRight',
      });
      return;
    }

    showLoader();

    const { hits, totalHits: total } = await getImagesByQuery(
      searchValue,
      currentPage
    );
    totalHits = total;
    if (hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    createGallery(hits);
    if (currentPage * perPage < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: `Error: ${error}`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
};

const onLoadBtnClick = async e => {
  try {
    showLoader();
    e.target.blur();
    currentPage += 1;
    const { hits } = await getImagesByQuery(searchValue, currentPage);
    createGallery(hits);
    showLoadMoreButton();
    if (currentPage * perPage >= totalHits) {
      refs.loadBtn.removeEventListener('click', onLoadBtnClick);
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    const heightCard =
      refs.galleryList.lastElementChild.getBoundingClientRect().height;

    scrollBy({
      top: heightCard * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message: `Error: ${error}`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
refs.loadBtn.addEventListener('click', onLoadBtnClick);
