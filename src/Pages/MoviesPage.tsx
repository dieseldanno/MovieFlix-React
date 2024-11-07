import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/UI/Header";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const result = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=0f53e1dfd87fa32a1a517c62ae297ed5&include_adult=false&include_video=false&language=sv-SE&page=1&sort_by=popularity.desc"
    );

    console.log(result.data.results);
    setMovies(result.data.results);
  };

  return (
    <>
      <Header title="Populära filmer" />;
      {movies.map((movie) => (
        <img src={movie.poster_path} alt={movie.title} />
      ))}
    </>
  );
};

export default MoviesPage;
