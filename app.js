const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const searchTerm = form.elements.query.value;
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  displayImages(response.data);
});

const displayImages = (shows) => {
  for (let result of shows) {
    console.log(result);
    const img = document.createElement('img');
    img.src = result.show.image.medium;
    document.body.appendChild(img);
  }
};
