import SimpleLightbox from 'simplelightbox';

const refs = {
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = images => {
  const galleryCardTemplate = images
    .map(
      img =>
        `<li class="gallery-card">
  <a href="${img.largeImageURL}">
    <img
      class="js-gallery-img"
      src="${img.webformatURL}"
      alt="${img.tags}"
      width="360"
  /></a>
  <ul class="info-list">
    <li class="info-item">
      <h3 class="info-item-title">Likes</h3>
      <p class="info-item-text">${img.likes}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Views</h3>
      <p class="info-item-text">${img.views}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Comments</h3>
      <p class="info-item-text">${img.comments}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Downloads</h3>
      <p class="info-item-text">${img.downloads}</p>
    </li>
  </ul>
</li>`
    )
    .join('');
  refs.galleryList.innerHTML = galleryCardTemplate;
  lightbox.refresh();
};

export const clearGallery = () => {
  refs.galleryList.innerHTML = '';
};

export const showLoader = () => {
  refs.loader.classList.remove('is-hidden');
};

export const hideLoader = () => {
  refs.loader.classList.add('is-hidden');
};
