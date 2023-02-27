import { useEffect, useState } from "react";
import MovieCard from "../../components/card/Movie";

import "../Movie/MoviesGrid.scss";

const moviesURL = process.env.API_URL;

const Home = () => {
  const [topMovies, setTopMovies] = useState<Array<any>>([]);

  const getTopRatedMovies = async (url: RequestInfo | URL) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}/item/${setTopMovies}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  console.log(topMovies);

  return (
    <div className="container">
      <h2 className="title">Filmes</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
