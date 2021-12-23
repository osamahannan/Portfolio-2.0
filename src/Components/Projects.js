import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { ProjectData } from "./ProjectData";

const Projects = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="projects">
      <h1> My <span>Projects</span> </h1>

      <div className="project-card2">
        {ProjectData.map((project) => {

          return (
            <div className="card2" key={project.id}>
              <h3>{project.name}</h3>
              <small>
                <time>{project.date}</time>
              </small>
              <p>{project.description}</p>

              <div className="button-container">
                <button className="btn view noSelect">
                  <a
                    href={project.appLink}
                    className="anchor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </button>
                <button className="btn2 noSelect">
                  <a
                    href={project.sourceLink}
                    className="anchor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Source
                  </a>
                </button>
              </div>
            </div>
          )

        })}

      </div>

      <div className="scroll">
        <IoIosArrowUp className="scrollbutton noSelect" onClick={scrollToTop} />
        <span onClick={scrollToTop} className="noSelect">Top</span>
      </div>

    </div>
  );
};

export default Projects;
