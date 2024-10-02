import React from 'react';
import Navbar from './components/navbar';
import Tile from './components/Tile';
import './App.css'; // Import global CSS

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="grid">
        <Tile>Artist Redefining Architecture</Tile>
        <Tile>
          <img src="https://via.placeholder.com/150" alt="profile" />
        </Tile>
        <Tile>
          <div>Project Example</div>
        </Tile>
        <Tile>Contact Me</Tile>
      </div>
    </div>
  );
};

export default App;
