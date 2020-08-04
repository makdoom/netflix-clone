import React from "react";
import "./components/css/App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Home from "./components/js/Home";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/js/SignIn";
import NetflixPage from "./components/js/NetflixPage";

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
