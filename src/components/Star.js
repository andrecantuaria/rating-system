import React from 'react';
import { FaStar } from 'react-icons/fa';


function Star({ selected, onClick }) {
  return (
    <button 
    className={`star-button ${selected ? 'selected' : ''}`} 
    onClick={onClick}><FaStar />
    </button>
  );
}

export default Star;
