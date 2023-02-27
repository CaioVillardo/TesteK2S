import { useEffect, useState } from "react";
import {
  DiYeoman,
} from "react-icons/di";
import {
  IoIosCheckmarkCircle,
} from "react-icons/io";
import {
  GoBook,
} from "react-icons/go";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/card/Movie";


import "./Movie.scss";

const moviesURL = process.env.API_URL;

const Movie = () => {
  const { title } = useParams();
  const [movie, setMovie] = useState<any>();

  const getMovie = async (url: RequestInfo | URL) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}/item/${title}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.title}</p>
          <div className="info">
            <h3>
              <DiYeoman /> Actors:
            </h3>
            <p>{movie.actors}</p>
          </div>
          <div className="info">
            <h3>
              <IoIosCheckmarkCircle /> Review:
            </h3>
            <p>{movie.rated}</p>
          </div>
          <div className="info description">
            <h3>
              <GoBook /> Description:
            </h3>
            <p>{movie.plot}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
