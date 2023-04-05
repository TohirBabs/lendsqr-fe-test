import React from "react";
import lendsqr_logo from "../../assets/lendsqr_logo.svg";
import bell_icon from "../../assets/icons/bell_icon.png";
import search_icon from "../../assets/icons/search_icon.svg";
import arrowdown_icon from "../../assets/icons/arrow-down_icon.svg";
import profile_pic from "../../assets/profile_pic.png";

type Props = {
  setMenu: React.Dispatch<React.SetStateAction<string>>;
};

export const Header = ({ setMenu }: Props) => {
  return (
    <header className="header">
      <a
        href="javascript:void(0);"
        className="header__menu-icon"
        onClick={() => setMenu((menu) => (menu === "open" ? "close" : "open"))}
      >
        <i className="fa fa-bars"></i>
      </a>
      <img src={lendsqr_logo} alt="lendsqr logo" className="header__logo" />
      <div className="header__menu">
        <div className="search">
          <input
            type="search"
            aria-label="search"
            placeholder="search for anything"
          />
          <button type="submit">
            <img src={search_icon} alt="search icon" />
          </button>
        </div>
        <nav className="nav">
          <a href="" onClick={() => alert("This is a demo website")}>
            Docs
          </a>
          <button type="button" className="notification">
            <img src={bell_icon} alt="bell icon" />
          </button>
          <img src={profile_pic} alt="user pic" className="avatar" />
          <button type="button" className="user_info">
            <p>adedeji</p>
            <img src={arrowdown_icon} alt="expand icon" />
          </button>
        </nav>
      </div>
    </header>
  );
};
