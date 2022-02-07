import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowUp } from "react-icons/io";
import javascript from "../Assets/javascript.png";
import html from "../Assets/html.png";
import java from "../Assets/java.png";
import python from "../Assets/python.png";
import react from "../Assets/react.png";
import css from "../Assets/css.png";
import nodejs from "../Assets/nodejs.png";
import mongodb from "../Assets/mongodb.png";
import express from "../Assets/expressjs.png";
import redux from "../Assets/redux.png";
import github from "../Assets/github.png";

const Home = ({ setShowLink }) => {
  const isMobile = useMediaQuery({ query: "(min-width: 650px)" });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home">
      <div className="about">
        <div className="profile">
          <h1>
            <span className="there">Hi there!</span>{" "}
            {!isMobile ? <span className="osama">I'm Osama</span> : ""}{" "}
          </h1>
          <h1>
            {isMobile ? <span className="osama">I'm Osama</span> : ""}{" "}
            <span className="developer">A Front End Developer</span>
          </h1>
        </div>
        <p>
          I'm currently a student in Babu Banarasi Das Institute. I started
          learning web development out of curiosity. Now I want to pursue my
          career as a full (MERN) stack developer, as it's said - <br />
          “If passion drives you, let reason hold the reins.”– Benjamin Franklin
        </p>
        <div>
          <button className="btn2 resume noSelect">
            <a
              href="https://drive.google.com/file/d/1Fz17ucosvTESuxe0CKpYNkeMtvmU812b/view?usp=drivesdk"
              className="anchor"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
      <div className="project-container">
        <h1>My Work</h1>
        <div className="project-card">
          <div className="card">
            <h3>Cricket Annihilators</h3>
            <small>
              <time>10th November, 2021</time>
            </small>
            <p>It is an official website of our cricket organization.</p>

            <span>React Js</span>

            <div className="button-container">
              <button className="btn view noSelect">
                <a
                  href="https://annihilators.netlify.app/"
                  className="anchor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
              </button>
              <button className="btn2 noSelect">
                <a
                  href="https://github.com/osamahannan/cricket-app"
                  className="anchor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source
                </a>
              </button>
            </div>
          </div>
          <div className="card middle">
            <h3>CryptoSwitch</h3>
            <small>
              <time>10th October, 2021</time>
            </small>
            <p>It is a cryptocurrency wallet app.</p>

            <span>React Js</span>

            <div className="button-container">
              <button className="btn view noSelect">
                <a
                  href="https://cryptoswitch.netlify.app/"
                  className="anchor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
              </button>
              <button className="btn2 noSelect">
                <a
                  href="https://github.com/osamahannan/CryptoSwitch"
                  className="anchor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source
                </a>
              </button>
            </div>
          </div>
          <div className="card">
            <h3>GoChat App</h3>
            <small>
              <time>15th January, 2022</time>
            </small>
            <p>It is a real time chat application</p>

            <div className="span-div">
              <span>React Js</span>
              <span>Socket.io</span>
            </div>

            <div className="button-container">
              <button className="btn view noSelect">
                <a
                  href="https://gochat-app.netlify.app/"
                  className="anchor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
              </button>
              <button className="btn2 noSelect">
                <a
                  href="https://github.com/osamahannan/gochat"
                  className="anchor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="button">
          <button className="btn noSelect">
            <Link className="anchor" to="/projects" onClick={() => setShowLink(2)}>
              View All
            </Link>
          </button>
        </div>
      </div>

      <div className="skills">
        <h1>My Skills</h1>
        <div className="skill-card">
          <div className="image">
            <img src={react} alt="react" />
            <h4>React</h4>
          </div>
          <div className="image">
            <img src={javascript} alt="JavaScript" />
            <h4>JavaScript</h4>
          </div>
          <div className="image">
            <img src={html} alt="html" />
            <h4>HTML5</h4>
          </div>
          <div className="image">
            <img src={css} alt="css" />
            <h4>CSS3</h4>
          </div>
          <div className="image">
            <img src={nodejs} alt="nodejs" />
            <h4>Node Js</h4>
          </div>
          <div className="image">
            <img src={mongodb} alt="mongodb" />
            <h4>MongoDB</h4>
          </div>
          <div className="image">
            <img src={express} alt="express" />
            <h4>Express</h4>
          </div>
          <div className="image">
            <img src={redux} alt="css" />
            <h4>Redux</h4>
          </div>
          <div className="image">
            <img src={github} alt="github" />
            <h4>Github</h4>
          </div>
          <div className="image">
            <img src={java} alt="java" />
            <h4>Java</h4>
          </div>
          <div className="image">
            <img src={python} alt="python" />
            <h4>Python</h4>
          </div>
        </div>
      </div>

      <div className="scroll">
        <IoIosArrowUp className="scrollbutton noSelect" onClick={scrollToTop} />
        <span onClick={scrollToTop} className="noSelect">Top</span>
      </div>
    </div>
  );
};

export default Home;
