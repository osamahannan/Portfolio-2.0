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
import nextjs from "../Assets/nextjs.png";

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
            <span className="there">Hi there! </span>
            {!isMobile ? <span className="osama">I'm Osama,</span> : ""}
          </h1>
          <h1>
            {isMobile ? <span className="osama">I'm Osama, </span> : ""}
            <span className="developer">A FrontEnd Developer</span>
          </h1>
        </div>
        <p>
          An experienced frontend developer with 2+ years of expertise in React JS, Javascript, and Next.js. Proven track record of delivering high-quality, responsive web applications. Currently honing skills to create seamless user experiences and passionate about staying abreast of the latest industry trends. I started
          learning web development out of curiosity and now working as a Frontend developer and wanted to pursue my career as a MERN stack developer, as it's said - <br />
          “If passion drives you, let reason hold the reins.”– Benjamin Franklin
        </p>
        <div>
          <button className="btn2 resume noSelect">
            <a
              href="https://drive.google.com/file/d/1LV1z0LQVLM9n1YDL4JcolfUQdxkjSf-F/view?usp=drivesdk"
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

            <div className="span-div">
              <span>Mongo DB</span>
              <span>Express</span>
              <span>ReactJs</span>
              <span>NodeJs</span>
            </div>

            <div className="button-container">
              <button className="btn view noSelect">
                <a
                  href="https://beta-annihilators.netlify.app/"
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
            <h3>Mern Register</h3>
            <small>
              <time>15th September, 2021</time>
            </small>
            <p>It is a User registration app implementing the login/logout functionality with user authentication.</p>

            <div className="span-div">
              <span>Mongo DB</span>
              <span>Express</span>
              <span>ReactJs</span>
              <span>NodeJs</span>
            </div>

            <div className="button-container">
              <button className="btn view noSelect">
                <a
                  href="https://osama-mern-stack.netlify.app/"
                  className="anchor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
              </button>
              <button className="btn2 noSelect">
                <a
                  href="https://github.com/osamahannan/MERN_Register"
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
              <span>Express</span>
              <span>ReactJs</span>
              <span>NodeJs</span>
              <span>Socket.io</span>
            </div>

            <div className="button-container">
              <button className="btn view noSelect">
                <a
                  href="https://go-chat-app.netlify.app/"
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
            <h4>ReactJs</h4>
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
            <img src={nextjs} alt="css" />
            <h4>NextJs</h4>
          </div>
          <div className="image">
            <img src={nodejs} alt="nodejs" />
            <h4>NodeJs</h4>
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
