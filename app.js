const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows`,
    config
  );
  displayImages(response.data);
  form.elements.query.value = '';
});

const displayImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      document.body.appendChild(img);
    }
  }
};
