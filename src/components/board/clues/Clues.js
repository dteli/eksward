import React from 'react';
import './Clues.scss';

import Clue from './Clue';

const Clues = ({ clues }) => {


  return (
    <div id="clues-box">
      <div id="acrossClues">
        <h3>ACROSS</h3>
        <ol>
          {clues.across.map((c, i) => <Clue key={i} clue={c}/>)}
        </ol> 
      </div>
      <div id="downClues">
        <h3>DOWN</h3>
        <ol>
          {clues.down.map((c, i) => <Clue key={i} clue={c}/>)}
        </ol>
      </div>
    </div>
  )
};

export default Clues;