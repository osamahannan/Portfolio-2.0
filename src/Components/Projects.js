import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const Projects = () => {

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <div className="projects">
      <h1> My <span>Projects</span> </h1>

      <div className="project-card2">
        <div className="card2">
          <h3>CryptoSwitch</h3>
          <small>
            <time>10th October, 2021</time>
          </small>
          <p>
            Created an app using React.Js . It is an application that displays
            all the trending cryptocurrencies. It allows you to add, update and
            delete any coin in your wallet. It also shows graphical
            representation of any cryptocurrency. You can see it working here:
          </p>

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

        <div className="card2">
          <h3>MERN Register</h3>
          <small>
            <time>15th September, 2021</time>
          </small>
          <p>
            Created an app using MERN stack. This app allows you to register
            youself and create a profile of your own. All your data is being
            stored at the backend in a database using MongoDB.You can also
            contact and message for any query. You can see it working here:
          </p>

          <div className="button-container">
            <button className="btn view noSelect">
              <a
                href="https://mern-osama.herokuapp.com"
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

        <div className="card2">
          <h3>Tic Tac Toe Game</h3>
          <small>
            <time>25th July, 2021</time>
          </small>
          <p>
            Created an app in Javascript. Tic-tac-toe is a simple, two-player
            game that, if played optimally by both players, will always result
            in a tie. The game is also called noughts and crosses or Xs and Os.
            A player wins a game if three marks of the same kind is connected in
            a line. You can see it working here:
          </p>

          <div className="button-container">
            <button className="btn view noSelect">
              <a
                href="https://tic-tac-toe-carnage.netlify.app"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
            </button>
            <button className="btn2 noSelect">
              <a
                href="https://github.com/osamahannan/Tic_Tac_Toe-Game"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Source
              </a>
            </button>
          </div>
        </div>

        <div className="card2">
          <h3>Weather App</h3>
          <small>
            <time>20th June, 2021</time>
          </small>
          <p>
            Created an app using React.Js. A real time weather app which shows
            current weather of a particular city in the world. You can see it working here:
          </p>

          <div className="button-container">
            <button className="btn view noSelect">
              <a
                href="https://waether-app.netlify.app/"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
            </button>
            <button className="btn2 noSelect">
              <a
                href="https://github.com/osamahannan/React_Weather-App"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Source
              </a>
            </button>
          </div>
        </div>

        <div className="card2">
          <h3>Snake game</h3>
          <small>
            <time>5th April, 2021</time>
          </small>
          <p>
            Created an app in JavaScript. Snake game is a computer action game,
            whose goal is to control a snake to move and collect food in a map. You can see it working here:
          </p>

          <div className="button-container">
            <button className="btn view noSelect">
              <a
                href="https://snake-mania.netlify.app/"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
            </button>
            <button className="btn2 noSelect">
              <a
                href="https://github.com/osamahannan/Snake-Game"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Source
              </a>
            </button>
          </div>
        </div>

        <div className="card2">
          <h3>TodoList App</h3>
          <small>
            <time>20th March, 2021</time>
          </small>
          <p>
            Created an app using React.Js . It is an application that allows to
            manage a list of tasks to do. It performs adding, updating, deleting
            and toggling state of each task. You can see it working here:
          </p>

          <div className="button-container">
            <button className="btn view noSelect">
              <a
                href="https://todolist-react-carnage.netlify.app/"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
            </button>
            <button className="btn2 noSelect">
              <a
                href="https://github.com/osamahannan/React_TodoList-App"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Source
              </a>
            </button>
          </div>
        </div>

        <div className="card2">
          <h3>Quiz App</h3>
          <small>
            <time>1st March, 2021</time>
          </small>
          <p>
            Created an app using React.Js . It is an application which asks different types of questions based on technologies. After finishing quiz you can view your score. You can see it working here:
          </p>

          <div className="button-container">
            <button className="btn view noSelect">
              <a
                href="https://quiz-app-osamahannan.netlify.app/"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
            </button>
            <button className="btn2 noSelect">
              <a
                href="https://github.com/osamahannan/quiz-app"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Source
              </a>
            </button>
          </div>
        </div>

        <div className="card2">
          <h3>iCoder Blog</h3>
          <small>
            <time>20th february, 2021</time>
          </small>
          <p>
            Created an app using Bootstrap . It is an application that displays blogs according to your category like Sports, Technology, Entertainment, etc. You can see it working here:
          </p>

          <div className="button-container">
            <button className="btn view noSelect">
              <a
                href="https://carnage-icoder.netlify.app/"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
            </button>
            <button className="btn2 noSelect">
              <a
                href="https://github.com/osamahannan/iCoder-blog"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Source
              </a>
            </button>
          </div>
        </div>

        <div className="card2">
          <h3>Food Delivery App</h3>
          <small>
            <time>1st february, 2021</time>
          </small>
          <p>
            Created an app using HTML and CSS.It represents the various food
            services like food orering ,catering, etc. You can see it working here:
          </p>

          <div className="button-container">
            <button className="btn view noSelect">
              <a
                href="https://food-delivery-carnage.netlify.app/"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
            </button>
            <button className="btn2 noSelect">
              <a
                href="https://github.com/osamahannan/Food_Delivery-App"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Source
              </a>
            </button>
          </div>
        </div>

        <div className="card2">
          <h3>Analog Clock</h3>
          <small>
            <time>20th January, 2021</time>
          </small>
          <p>
            Created an app using HTML CSS and JavaSript. A simple analog clock
            which represent the current time. You can see it working here:
          </p>

          <div className="button-container">
            <button className="btn view noSelect">
              <a
                href="https://analog-clock-carnage.netlify.app/"
                className="anchor"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
            </button>
            <button className="btn2 noSelect">
              <a
                href="https://github.com/osamahannan/Analoge-clock"
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

      <div className="scroll">
        <IoIosArrowUp className ="scrollbutton noSelect" onClick={scrollToTop}/>
        <span onClick={scrollToTop} className ="noSelect">Top</span>
      </div>

    </div>
  );
};

export default Projects;
