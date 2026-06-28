import axios from 'axios';

export async function getImagesByQuery(query, page = 1) {
  const searchParam = new URLSearchParams({
    key: '38288513-b7843bc63d8f48176142cf2e3',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  });
  const URL = `https://pixabay.com/api/`;

  return await (
    await axios.get(URL, { params: searchParam })
  ).data;
}
