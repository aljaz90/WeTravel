import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const colors = [
  {dark: '#1488cc', light: '#2b32b2'},
  {dark: '#8E2DE2', light: '#4A00E0'},
  {dark: '#00B4DB', light: '#0083B0'},
  {dark: '#11998e', light: '#38ef7d'},
  {dark: '#159957', light: '#155799'},
  {dark: '#240b36', light: '#c31432'}
]


export default props => {
  let [score, setScore] = useState(0);
  let [color, setColor] = useState(null);

  let randomColor = () => {
    let randomInt = Math.floor( Math.random() * colors.length );
    if (color) {
      return colors[color].light+','+colors[color].dark;
    }
    setColor(randomInt);
    return colors[randomInt].light+','+colors[randomInt].dark;
}

  return (
    <div className="loader--background">
      <div style={{backgroundImage: `linear-gradient(to right, ${randomColor()})`}} className="loader">
        <FontAwesomeIcon onClick={() => setScore(score+1)} className="loader--icon" icon={faPlane} />
        <div className="loader--text">
            <div className="loader--text--loading">Searching flights...</div>
            <div className="loader--text--game">Try to catch the plane while the page is loading.</div>
            <div className="loader--text--score">Score: {score}</div>
        </div>
      </div>
    </div>
  )
}
