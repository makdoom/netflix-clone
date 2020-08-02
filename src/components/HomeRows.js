import React from "react";
import "./HomeRows.css";

const HomeRows = () => {
  return (
    <div className="rows__content">
      <div className="row">
        <div className="row__desc">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="row__image">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="tv image"
          />
        </div>
      </div>
      <div className="row">
        <div className="row__image">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="mob image"
          />
        </div>
        <div className="row__desc">
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
      <div className="row">
        <div className="row__desc">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="row__image desktop">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt="desktop image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeRows;
