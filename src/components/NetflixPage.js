import React from "react";
import Row from "./Row";
import requests from "../requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

const NetflixPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Crime Movies" fetchURL={requests.fetchCrimeMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchURL={requests.fetchRomaceMovies} />
      <Row title="Drama" fetchURL={requests.fetchDrama} />
    </>
  );
};

export default NetflixPage;
