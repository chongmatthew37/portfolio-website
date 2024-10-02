
import React from 'react';
import './Tile.css'; // Import regular CSS

const Tile = ({ children, className }) => {
  return <div className={`tile ${className}`}>{children}</div>;
};

export default Tile;
