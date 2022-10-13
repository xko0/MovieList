const movies = document.getElementById('movies')
const searchField = document.getElementById('search-field')
var searchKey;

const getResults = () => {
  const url = `https://www.omdbapi.com/?apikey=96e12e05&` +
            `s=${searchKey}`
  const req = new Request(url);
  fetch(req)
  .then((response) => {
    response.json().then((data) => {
      data.Search.forEach(movie => {
        addMovie(movies, movie.Poster, movie.Title, movie.Year, movie.Plot, movie.imdbID)
      });
    });
  })
}

const addMovie = (div, image, name, date, id) => {
  movies.innerHTML += `
  <div class="card">
    <div class="img-card">
      <img src="${image}">
    </div>
    <div class = "content-card">
      <h2>${name}</h2>
      <p>${date}</p>
      <button id="${id}" class="button-85">Read more</button>
    </div>
  </div>
  `
}

const findMovies = (e) => {
  e.preventDefault()
  movies.innerHTML = ''
  searchKey = e.target[0].value.split(' ').join('_')
  getResults();
}

searchField.addEventListener('submit', findMovies)

