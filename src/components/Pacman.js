import React from 'react';
import './Pacman.css';

const PacMan = () => {
  return (
    <div className="pacman-container">
      {/* Pac-Man GIF */}
      <img 
        src="https://media.tenor.com/yzVsTWVKKmYAAAAi/pacman.gif" 
        alt="Pac-Man"
        className="pacman-gif"
      />
      
      {/* Ghost GIF chasing */}
      <img 
        src="https://media.tenor.com/4dfAqZHmiOwAAAAi/oacmn.gif" 
        alt="Ghost"
        className="ghost-gif"
      />
    </div>
  );
};

export default PacMan;