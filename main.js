const fetchData = async (movieTitle) => {
  const url = `https://movie-database-alternative.p.rapidapi.com/?s=${encodeURIComponent(
    movieTitle
  )}&r=json&page=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "37ea6bd1d0msh4cc93dba68fa36fp157673jsnbdcac18a87f2",
      "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    showMovies(result.Search);
  } catch (error) {
    console.error(error);
  }
};

const showMovies = (movies) => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  movies.forEach((movie) => {
    const title = movie.Title;
    const year = movie.Year;
    const poster = movie.Poster;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const yearElement = document.createElement("p");
    yearElement.textContent = `Year: ${year}`;

    const posterElement = document.createElement("img");
    posterElement.src = poster;
    posterElement.alt = title;

    movieElement.appendChild(titleElement);
    movieElement.appendChild(yearElement);
    movieElement.appendChild(posterElement);
    if (poster === "N/A") {
      const imageNotFoundElement = document.createElement("p");
      imageNotFoundElement.textContent = "Imagen no encontrada";
      movieElement.appendChild(imageNotFoundElement);
    }

    container.appendChild(movieElement);
  });
};
