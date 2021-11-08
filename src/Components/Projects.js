import React from 'react'

const Projects = () => {
    return (
        <div className="projects">
            <h1> Projects </h1>
            <div className="project-card2">
                <div className="card2">
                    <h3>CryptoSwitch</h3>
                    <small>
                        <time>10th October, 2021</time>
                    </small>
                    <p>
                        Created an app using React.Js . It is an application that displays all the trending cryptocurrencies. It allows you to add, update and delete any coin in your wallet. It also shows graphical representation of any cryptocurrency. You can see it working here:
                    </p>

                    <div className="button-container">
                        <button className="btn view"><a href="https://cryptoswitch.netlify.app/" className="anchor" target="_blank" rel="noreferrer">View Live</a></button>
                        <button className="btn2"><a href="https://github.com/osamahannan/CryptoSwitch" className="anchor" target="_blank" rel="noreferrer">View Source</a></button>
                    </div>
                </div>
                <div className="card2">
                    <h3>MERN Register</h3>
                    <small>
                        <time>15th September, 2021</time>
                    </small>
                    <p>
                        Created an app using MERN stack. This app allows you to register youself and create a profile of your own. All your data is being stored at the backend in a database using MongoDB.You can also contact and message for any query.
                    </p>

                    <div className="button-container">
                        <button className="btn view"><a href="https://mern-osama.herokuapp.com" className="anchor" target="_blank" rel="noreferrer">View Live</a></button>
                        <button className="btn2"><a href="https://github.com/osamahannan/MERN_Register" className="anchor" target="_blank" rel="noreferrer">View Source</a></button>
                    </div>
                </div>
                <div className="card2">
                    <h3>Tic Tac Toe</h3>
                    <small>
                        <time>25th July, 2021</time>
                    </small>
                    <p>
                        Created an app in Javascript. Tic-tac-toe is a simple, two-player game that, if played optimally by both players, will always result in a tie. The game is also called noughts and crosses or Xs and Os. A player wins a game if three marks of the same kind is connected in a line.
                    </p>

                    <div className="button-container">
                        <button className="btn view"><a href="https://tic-tac-toe-carnage.netlify.app" className="anchor" target="_blank" rel="noreferrer">View Live</a></button>
                        <button className="btn2"><a href="https://github.com/osamahannan/Tic_Tac_Toe-Game" className="anchor" target="_blank" rel="noreferrer">View Source</a></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
