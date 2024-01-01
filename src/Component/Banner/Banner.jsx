import React, { useEffect, useState } from "react";
import api from "../../utlis/axios";
import request from "../../utlis/Request";
import "./Banner.css";

const Banner = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await api.get(request.fetchNetflixOriginals);
      setmovies(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    };
    fetchMovie();
  }, []);
  console.log(movies);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        {/* title */}
        <h1 className="banner_title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        {/* banner btn */}
        <div className="banner_buttons">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>
        {/* banner description */}
        <h1 className="banner_description">
            {truncate(movies?.overview,150)}
        </h1>
      </div>
      <div className="banner_fadebottom" />
    </div>
  );
};

export default Banner;
