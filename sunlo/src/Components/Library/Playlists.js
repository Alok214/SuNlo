import React, { useState } from "react";
import "./Playlists.css";
import Card from "../Card/Card";
import Liked from "../Liked/Liked";

function Playlists() {
  const [tab, setTab] = useState("Playlists");
  return (
    <>
      {tab === "Playlists" ? (
        <div className="playlist-container">
          <div
            className="liked-container"
            onClick={() => {
              setTab("Liked");
            }}
          >
            <div className="elem-container">
              <h1>Liked Songs</h1>
              <h6>0 liked songs</h6>
            </div>
          </div>
          <div className="added-container">
            <Card />
          </div>
        </div>
      ) : (
        <Liked />
      )}
    </>
  );
}

export default Playlists;
