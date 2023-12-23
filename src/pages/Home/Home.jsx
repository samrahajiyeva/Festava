import React from "react";
import "./Home.scss";
import { BsClockFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  const videoPath = require("../../media/festival.mp4"); // video's path

  return (
    <>
      {/* Hero */}
      <div className="hero">
        <video id="background-video" autoPlay loop muted>
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero__wrapper">
          <div className="hero__wrapper__inner">
            <div className="hero__wrapper__inner__1">
              <p>FESTAVA LIVE PRESENTS</p>
              <h1>Night Live 2023</h1>
              <button>Let's begin</button>
            </div>
            <div className="hero__wrapper__inner__2">
              <div className="hero__wrapper__inner__2__left hero_btm">
                <h5>
                  <BsClockFill id="hero-icon" />
                  <span>
                    10-12<sup>th</sup>, Dec 2023
                  </span>
                </h5>
              </div>
              <div className="hero__wrapper__inner__2__center hero_btm">
                <h5>
                  <FaLocationDot id="hero-icon" />
                  <span>Crystal Hall , Azerbaijan</span>
                </h5>
              </div>
              <div className="hero__wrapper__inner__2__right hero_btm">
                <h5>
                  <span>Share:</span>
                  <FaFacebookF id="hero-icon" />
                  <FaTwitter id="hero-icon" />
                  <FaInstagram id="hero-icon" />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="about" id="about">
        <div className="about__inner">
          <div className="about__inner__left col-6">
            <h2>About Festava 2022</h2>
            <p>
              Festava Live is free CSS template provided by TemplateMo website.
              This layout is built on Bootstrap v5.2.2 CSS library. You are free
              to use this template for your commercial website.
            </p>
            <h6>Once in Lifetime Experience</h6>
            <p>
              You are not allowed to redistribute the template ZIP file on any
              other website without a permission.
            </p>
            <h6>Whole Night Party</h6>
            <p>Please tell your friends about our website. Thank you.</p>
          </div>
          <div className="about__inner__right col-6">
            <div className="about__inner__right__div">
              <div className="about-icon">
                <IoPersonSharp id="icon" />
              </div>
              <div className="about-text">
                <h3>a happy moment</h3>
                <p>your amazing festival experience with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artists */}
      <div className="artists" id="artists">
        <Slider />
      </div>
    </>
  );
};

export default Home;
