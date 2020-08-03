import React from "react";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>

      {/* <Navbar />
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
      <Row title="Drama" fetchURL={reques ts.fetchDrama} /> */}
    </div>
  );
}

export default App;
