import React from "react";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import NetflixPage from "./components/NetflixPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/netflixpage" component={NetflixPage} />
      </Switch>
    </div>
  );
}

export default App;
