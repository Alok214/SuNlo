import React, { useState } from "react";
// import Layout from "./Layout";
import { FaHome } from "react-icons/fa";
import { BiBookAdd, BiLibrary } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import "./LeftNav.css";
import Home from "../Home/Home";
import Library from "../Library/Library";
import Liked from "../Liked/Liked";
import Login from "../Login";
import { useSelector } from "react-redux";

const tabs = [
  {
    name: "Home",
    icon: <FaHome size={30} className="icons" />,
  },
  {
    name: "Your Library",
    icon: <BiLibrary size={30} className="icons" />,
  },
  {
    name: "Create Playlist",
    icon: <BiBookAdd size={30} className="icons" />,
  },
  {
    name: "Liked Music",
    icon: <FcLike size={30} className="icons" />,
  },
];
function Dashboard() {
  const [tab, setTab] = useState("Home");

  const { code } = useSelector((state) => state.auth);

  return (
    <div className="main_container">
      <div className="con1">
        <div className="con2">
          <div className="con2-3">
            {tabs.map((item) => (
              <div
                className="con3"
                onClick={() => setTab(item.name)}
                style={item.name === tab ? { color: "#004AAD" } : null}
              >
                {item.icon}
                <h4>{item.name}</h4>
              </div>
            ))}
          </div>
          <div className="con4">
            <div className="ic2">
              <h6>SUPPORT</h6>
            </div>
            <div className="ic2">
              <h6>FAQ</h6>
            </div>
            <div className="ic2">
              <h6>TERMS & CONDITIONS</h6>
            </div>
          </div>
        </div>
      </div>
      <>
        {code ? (
          <div className="detailContainer">
            {tab === "Home" ? (
              <Home />
            ) : tab === "Your Library" ? (
              <Library />
            ) : tab === "Liked Music" ? (
              <Liked />
            ) : (
              <Login />
            )}
          </div>
        ) : (
          <div className="detailContainer">
            <Login />
          </div>
        )}
      </>
    </div>
  );
}

export default Dashboard;
