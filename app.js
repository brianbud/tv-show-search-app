const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const searchTerm = form.elements.query.value;
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  console.log(response.data[0].show.image.medium);
  const img = document.createElement('img');
  img.src = response.data[0].show.image.medium;
  document.body.appendChild(img);
});
