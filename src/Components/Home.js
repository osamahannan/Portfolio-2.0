import React from 'react'
import javascript from "../Assets/javascript.png";
import html from "../Assets/html.png";
import java from "../Assets/java.png";
import python from "../Assets/python.png";
import react from "../Assets/react.png";
import css from "../Assets/css.png";
import github from "../Assets/github.png";

const Home = () => {
    return (
        <div className="home">
            <div className="about">
                <h1>Hi There!</h1>
                <h1>I'm Osama A Front End Developer</h1>
                <p>
                    I'm currently a student in Babu Banarasi Das Institute.
                    I started learning web development out of curiosity. Now I want to pursue my career as a full(MERN) stack developer, as it's said - “If passion drives you, let reason hold the reins.”– Benjamin Franklin
                </p>
            </div>
            <div className="project-container">
                <h1>My Work</h1>
                <div className="project-card">
                    <div className="card">
                        <h3>CryptoSwitch</h3>
                        <small>
                            <time>10th October, 2021</time>
                        </small>
                        <p>
                            It is a cryptocurrency wallet app.
                        </p>
                        <div className="tag">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>React Js</span>
                        </div>
                        <div className="button-container">
                            <button className="btn view">View Live</button>
                            <button className="btn2">View Source</button>
                        </div>
                    </div>
                    <div className="card">
                        <h3>MERN Register</h3>
                        <small>
                            <time>15th September, 2021</time>
                        </small>
                        <p>
                            This app allows you to create a profile of your own.
                        </p>
                        <div className="tag">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>MERN</span>
                        </div>
                        <div className="button-container">
                            <button className="btn view">View Live</button>
                            <button className="btn2">View Source</button>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Tic Tac Toe</h3>
                        <small>
                            <time>25th Juky, 2021</time>
                        </small>
                        <p>
                            It is a simple, two-player game of tic-tac-toe.
                        </p>
                        <div className="tag">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaSript</span>
                        </div>
                        <div className="button-container">
                            <button className="btn view">View Live</button>
                            <button className="btn2">View Source</button>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button className="btn">View All</button>
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
        </div>
    )
}

export default Home
