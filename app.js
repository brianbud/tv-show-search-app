const form = document.querySelector('#searchForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const searchTerm = form.elements.query.value;
});
