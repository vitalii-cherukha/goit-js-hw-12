import axios from 'axios';

export const getImagesByQuery = (query, page) => {
  return axios
    .get(`https://pixabay.com/api/`, {
      params: {
        key: '51362773-b845efdff4000eb7d694ec90c',
        q: query,
        page: page,
        per_page: '15',
        orientation: 'horizontal',
        safesearch: 'true',
        image_type: 'photo',
      },
    })
    .then(response => response.data);
};
