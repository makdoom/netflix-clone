import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";
import "../css/Banner.css";

const imageBaseURL = "https://image.tmdb.org/t/p/original/";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchNetflixOriginals);
      //   console.log(response.data.results);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${imageBaseURL}${movie?.backdrop_path})`,
        backgroundSize: "Cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.name || movie?.title || movie?.original_name}{" "}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">Watch List</button>
        </div>
        <div className="banner-description">
          <p>
            {movie.overview?.length > 150
              ? `${movie.overview.substring(0, 150)}...`
              : movie.overview}
          </p>
        </div>
      </div>
      <div className="banner-fade"></div>
    </header>
  );
};

export default Banner;
