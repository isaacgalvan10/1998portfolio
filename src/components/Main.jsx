import React from 'react';
import '../styles/main.css';
// import Minimize from '../assets/minimize.svg'

const Main = () => {
  return (
    <div className="window-bg">
      <div className="container">
        <div className="titles">
          <h1>Hi, I'm Isaac Galvan</h1>
        </div>
        <div className="window-container">
          <div className="title-bar">
            <div className="title-bar-text">Portfolio</div>
            <div className="title-bar-controls">
              <button className="minimize"></button>
              <button className="maximize"></button>
              <button className="close"></button>
            </div>
          </div>
          <div className="about-me-container">
            <div className="title-bar">
              <div className="title-bar-text">About Me</div>
              <div className="title-bar-controls">
                <button className="minimize"></button>
                <button className="maximize"></button>
                <button className="close"></button>
              </div>
            </div>
            <div className="about-me-content">
              <p>From the ﬁrst "Hello World", I was hooked into this amazing world of programming. Software development has offered me a great way to continually learn and improve my skills. What started with a simple "Hello World" has become a full-ﬂedged passion that only gets more exciting as time goes by.</p>
              <div className="resume-btn-container">
                <a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vTXz1c3GQzo4JOby1ZIi92SfrksCZb4mX1-RQ_NEW6h78USV__q_vwaC7zu-dpnWLQZd2V5rZevmW_T/pub"><button className="resume btn">View Resume</button></a>
              </div>
            </div>
          </div>
          <div className="projects-section">
            <h1>Projects</h1>
            <div className="projects-container">
              <div className="card">
                <div className="project-info">
                  <h2>Easybank Website</h2>
                  <p>This is a static website that I remade from a front end challenge. I used React, SASS, and GSAP. <a href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN" target="_blank">Here is the design</a></p>
                  <div className="project-btns">
                    <a target="_blank" href="https://easybank-ig.netlify.app/"><button className="live btn" >See Live</button></a>
                    <a target="_blank" href="https://github.com/isaacgalvan10/react-easybank"><button className="source btn" >Source Code</button></a>
                  </div>
                </div>
                <div className="img-wrapper">
                  <a target="_blank" href="https://easybank-ig.netlify.app/"><img src={require("../assets/easybank.jpg")} /></a>
                </div>
              </div>
              <div className="card">
                <div className="project-info">
                  <h2>Saleswhale Website</h2>
                  <p>This is a static business website that I remade from a Figma Design. I used React, SASS, Bootstrap, and GSAP. <a href="https://www.figma.com/file/cbxLQKxUoLBVnQzCjA6NOF/Junior-Web-Developer-Test" target="_blank">Here is the figma design</a></p>
                  <div className="project-btns">
                    <a target="_blank" href="https://react-saleswhale-isaacg.netlify.app/"><button className="live btn" >See Live</button></a>
                    <a target="_blank" href="https://github.com/isaacgalvan10/React-Saleswhale"><button className="source btn" >Source Code</button></a>
                  </div>
                </div>
                <div className="img-wrapper">
                  <a target="_blank" href="https://react-saleswhale-isaacg.netlify.app/"><img src={require("../assets/project.jpg")} /></a>
                </div>
              </div>
              <div className="card">
                <div className="project-info">
                  <h2>My Portfolio</h2>
                  <p>I made this portfolio using React, and SASS. I chose a 1998 Windows look becuase it was one of the first computers I used and becuase I am born in 1998.</p>
                  <div className="project-btns">
                    <a target="_blank" href="#"><button className="live btn" >See Live</button></a>
                    <a target="_blank" href="#"><button className="source btn" >Source Code</button></a>
                  </div>
                </div>
                <div className="img-wrapper">
                  <a target="_blank" href="#"><img src={require("../assets/myportfolio.jpg")} /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-section">
            <div className="title-bar">
              <div className="title-bar-text">Contact Me</div>
              <div className="title-bar-controls">
                <button className="minimize"></button>
                <button className="maximize"></button>
                <button className="close"></button>
              </div>
            </div>
            <div className="contact-info">
              <p>galvan1522@gmail.com<br />(210)884-6564</p>
            </div>
            <div className="social-media">
              <a target="_blank" href="https://github.com/isaacgalvan10"><i class="fab fa-github-square"></i></a>
              <a target="_blank" href="https://www.linkedin.com/in/isaac-galvan-712095149/"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;