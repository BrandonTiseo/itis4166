const movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genres: ["Sci-Fi", "Thriller"],
    rating: 9,
  },
  {
    id: 2,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genres: ["Sci-Fi", "Drama"],
    rating: 8,
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genres: ["Action", "Crime"],
    rating: 9,
  },
  {
    id: 4,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genres: ["Crime", "Drama"],
    rating: 10,
  },
  {
    id: 5,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genres: ["Crime", "Drama"],
    rating: 9,
  },
  {
    id: 6,
    title: "The Matrix",
    director: "Lana Wachowski",
    year: 1999,
    genres: ["Sci-Fi", "Action"],
    rating: 9,
  },
];

let nextId = movies.length + 1;

// -------------------------
// Assign a unique id and add the moview to the array
// Return the new movie object
// -------------------------
function addMovie(movieData) {
  movieData.id = nextId;
  movies.push(movieData);
  nextId += 1;
  return movieData;
}

// -------------------------
// Update the rating of a movie by ID.
// If found, update its rating and return the updated movie
// If not found, return null.
// -------------------------
function updateRating(id, newRating) {
  let index = movies.findIndex(movie => movie.id === id);
  if(index === -1)
    return null;
  else{
    movies[index].rating = newRating;
    return movies[index];
  }
}

// -------------------------
// Delete a movie by ID.
// If found, remove it from the array and return true
// If not found, return false
// -------------------------
function deleteMovie(id) {
  let index = movies.findIndex(movie => movie.id === id);
  if(index === -1)
    return false;
  else{
    movies.splice(index,1);
    return true;
  }
}
// -------------------------
// Return an array of movie titles directed by the given director
// -------------------------
function findByDirector(director) {
  return movies.filter(movie => movie.director === director);
}

// -------------------------
// Return an array of movies that include the specified genre
// -------------------------
function filterByGenre(genre) {
  return movies.filter(movie => {
    if(movie.genres.includes(genre))
      return movie;
  });
}

// -------------------------
// Return the average rating of all movies
// Return 0 if no movies exist
// -------------------------
function averageRating() {
  if(movies.length == 0)
    return 0;
  else{
    let accum = 0;
    for(let movie of movies)
      accum += movie.rating;
    return accum / movies.length;
  }
}

// -------------------------
// Return an array of movie titles released before the given year
// -------------------------
function moviesBefore(year) {
  return movies.filter(movie =>{
    if(movie.year < year)
      return movie;
  });
}

// Uncomment to test your implementation

console.log("\nAdding a new movie:");
const newMovie = addMovie({ title: "Test Movie", director: "Test Dir", year: 2021, genres: ["Test"], rating: 7 });
console.log(newMovie);
console.log("Movies after adding:", movies);

console.log("\nUpdating rating of the new movie:");
console.log(updateRating(newMovie.id, 9));
console.log("Movies after update:", movies);

console.log("\nUpdating rating of a non-existent movie (id: 999):");
console.log(updateRating(999, 10));

console.log("\nDeleting the new movie:");
console.log(deleteMovie(newMovie.id));
console.log("Movies after deletion:", movies);
console.log("\nDeleting a non-existent movie (id: 999):");
console.log(deleteMovie(999));

console.log("\nFinding movies by director 'Christopher Nolan':");
console.log(findByDirector("Christopher Nolan"));

console.log("\nFiltering movies by genre 'Sci-Fi':");
console.log(filterByGenre("Sci-Fi"));

console.log("\nAverage rating of all movies:");
console.log(averageRating());

console.log("\nMovies released before 2000:");
console.log(moviesBefore(2000));
