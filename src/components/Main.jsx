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
          <div className="content-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;