const searchButton = document.getElementById('search-button');
const movieInput = document.getElementById('movie-input');
const title = document.getElementById('title');
const titleoption = document.getElementById('title-option');
const released = document.getElementById('released');
const rated = document.getElementById('rated');
const rate = document.getElementById('rate');
const genre = document.getElementById('genre');
const country = document.getElementById('country');
const type = document.getElementById('type');
const poster = document.getElementById('poster');
const plot = document.getElementById('plot');
const plothead = document.getElementById('plot-head');



searchButton.addEventListener('click', function() {
  const movies = movieInput.value;
  if (movies.trim() === '') {
    title.innerHTML = '';
    titleoption.innerHTML = 'Please enter a movie.';
    released.innerHTML = '';
    rated.innerHTML = '';
    genre.innerHTML = '';
    country.innerHTML = '';
    type.innerHTML = '';
    poster.src = '';
    poster.style.display = 'none';
    plothead.style.display = 'none';
    genre.style.display = 'none';
    plot.innerHTML = '';
    return;
  }

  fetch(`https://www.omdbapi.com/?t=${movies}&apikey=83e2427d`)
    .then(response => response.json())
    .then(data => {
      
      if (data.Error === "Movie not found!") {
        titleoption.innerHTML = 'No Movie found for this name.';
        title.innerHTML = '';
        released.innerHTML = '';
        rated.innerHTML = '';
        genre.innerHTML = '';
        country.innerHTML = '';
        type.innerHTML = '';
        poster.src = '';
        poster.style.display = 'none';
        plothead.style.display = 'none';
        genre.style.display = 'none';
        plot.innerHTML = '';
      } else {
        titleoption.innerHTML = '';
        title.innerHTML = `${data.Title}`;
        released.innerHTML = `Released : ${data.Released} `;
        rated.innerHTML = `<i class="fa fa-star"></i> ${data.imdbRating}  <i class="fa fa-clock"></i>  ${data.Runtime}`;
        genre.innerHTML = `${data.Genre}`;
        genre.style.display = 'block';
        country.innerHTML = `<i class="fa fa-globe"></i>${data.Country}`;
        type.innerHTML = `Type : ${data.Type}`;
        poster.src = data.Poster;
        poster.style.display = 'block';
        plot.innerHTML = `${data.Plot}`;
        plothead.style.display = 'block';
      }
    })

    .catch(error => {
      console.error(error);
      titleoption.innerHTML = 'An error occurred while fetching the Movie.';
      title.innerHTML = '';
      released.innerHTML = '';
      rated.innerHTML = '';
      genre.innerHTML = '';
      country.innerHTML = '';
      type.innerHTML = '';
      poster.src = '';
      poster.style.display = 'none';
      plothead.style.display = 'none';
      genre.style.display = 'none';
      plot.innerHTML = '';
    });
    
});
