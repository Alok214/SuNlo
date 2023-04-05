import "./Navbar.css";
import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router-dom";
// import logo from "../../assets/SunLO.png";
import { logout, saveCode } from "../../redux/slices/auth";
import { BsFillPersonFill, BsSearch } from "react-icons/bs";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=8b945ef10ea24755b83ac50cede405a0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const url_code = new URLSearchParams(window.location.search).get("code");
const Navbar = () => {
  const dispatch = useDispatch();

  const { code } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(
      saveCode({
        code: url_code,
      })
    );
  }, [url_code]);

  const handleClick = () => {
    dispatch(logout());
    window.location.replace("http://localhost:3000");
  };

  const handleSearch = () => {};
  return (
    <div className="nav_container">
      <div className="nav_elem">
        <div className="left">
          <img
            className="logo"
            src={logo}
            alt=""
            srcset=""
            height={90}
            width={90}
          />
        </div>
        <div className="right">
          <div className="elem">
            <input type="text" value="" name="search" className="search_box" />
            <BsSearch onClick={handleSearch} />
          </div>
          <div className={`elem user dropdown`}>
            <a href={AUTH_URL} style={{ color: "white" }}>
              <BsFillPersonFill size={25} />
            </a>
            {code ? (
              <div className="dropdown-content">
                <span onClick={handleClick}>Sign Out</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
