import React from 'react'

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
                            It is an application that displays all the trending cryptocurrencies.
                        </p>
                        <div className="tag">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>React Js</span>
                        </div>
                        <div className="button-container">
                            <button>View Live</button>
                            <button>View Source</button>
                        </div>
                    </div>
                    <div className="card">
                        <h3>MERN Register</h3>
                        <small>
                            <time>15th September, 2021</time>
                        </small>
                        <p>
                            This app allows you to register youself and create a profile of your own.
                        </p>
                        <div className="tag">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>MERN</span>
                        </div>
                        <div className="button-container">
                            <button>View Live</button>
                            <button>View Source</button>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Tic Tac Toe</h3>
                        <small>
                            <time>25th Juky, 2021</time>
                        </small>
                        <p>
                            Tic-tac-toe is a simple, two-player game that, if played optimally by both players, will always result in a tie.
                        </p>
                        <div className="tag">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaSript</span>
                        </div>
                        <div className="button-container">
                            <button>View Live</button>
                            <button>View Source</button>
                        </div>
                    </div>
                </div>
                <div className="btn">
                    <button>View All</button>
                </div>
            </div>
            <div className="blog-container">

            </div>
            <div className="skills">

            </div>
        </div>
    )
}

export default Home
