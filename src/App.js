import './App.css';
import React, { useState } from 'react';
import ScratchMe from './components/ScrachMe';
import Popup from './components/Popup';

import foregroundImageSrc from './Images/pattern.jpg';
import backgroundImageSrc from './Images/you_won.jpg';

const App = () => {
  const [completed, setCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="page">
        <h1 className="page-title">Scratch Me! Demo</h1>
      </div>
      <ScratchMe
        width={400}
        height={100}
        foregroundImageSrc={foregroundImageSrc}
        backgroundImageSrc={backgroundImageSrc}
        onCompleted={() => setCompleted(true)}
        completedAt={50}
        onProgress={percent => setProgress(percent)}
        handlePopup={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <Popup
          content={
            <div className="popup">
              <b>You are lucky</b>
              <p>'Congratulations! You won $1000!</p>
              <form action="https://ohmyspins.com/en/">
                <button type="submit">Claim now!</button>
              </form>
            </div>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default App;
