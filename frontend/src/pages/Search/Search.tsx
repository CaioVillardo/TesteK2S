import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/card/Movie";
import "../Movie/MoviesGrid.scss";

const searchURL = process.env.API_URL;



const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState<Array<any>>([]);
  const query = searchParams.get("title");

  const getSearchedMovies = async (url: RequestInfo | URL) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}/item/${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
