class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      const pgMovies = movies.filter(movie => movie.rating === "PG");
      return pgMovies;
    }
  }
  const movie = new Movie("Casino Royale", "Eon Productions", "PG-13");
