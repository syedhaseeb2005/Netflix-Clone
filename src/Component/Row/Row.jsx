import React, { useEffect, useState } from "react";
import api from "../../utlis/axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const baseUrl = `https://image.tmdb.org/t/p/original/`;
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await api.get(fetchUrl);
      setMovies(res.data.results);
    };
    fetchMovie();
  }, [fetchUrl]);
  // console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const movieName = movie?.original_title || movie?.title || "";
      movieTrailer(movieName)
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            // Handle case when no trailer is found
            console.log("No trailer found for this movie");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>

      {/* row Poster */}
      <div className="row_poster">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`img_row_poster ${isLargeRow && "img_row_poster_large"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container => poster */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
