import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="header">
        <div className="header__text col-10">
          <p>
            <IoPersonSharp id="person" />
            <strong>Welcome to Music Festival 2023</strong>
          </p>
        </div>
      </div>
      <div className="nav">
        <div className="nav__text col-10">
          <ul>
            <li className="col-2">
              <p>Festava Live</p>
            </li>
            <li className="col-8">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="#about" onClick={() => scrollToSection("about")}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#artists" onClick={() => scrollToSection("artists")}>
                    Artists
                  </a>
                </li>
                <li>
                  <a
                    href="#schedule"
                    onClick={() => scrollToSection("schedule")}
                  >
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#pricing" onClick={() => scrollToSection("pricing")}>
                    Pricing
                  </a>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
              </ul>
            </li>
            <li className="col-2 btn">
              <button>
                <Link to="buy">Buy Ticket</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
