import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";

const imageBaseURL = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchURL, isLargeRow }) => {
  // Movies Array
  const [movies, setMovies] = useState([]);

  //Fetching data
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchURL);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchURL]);
  // console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            className={`row-image ${isLargeRow && "row-image-large"}`}
            src={`${imageBaseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            key={movie.id}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
