import React from 'react';

import Clue from './Clue';

const Clues = ({ clues }) => {


  return (
    <div id="clues-box">
      <div id="acrossClues">
        {clues.across.map((c, i) => <Clue key={i} clue={c}/>)}    
      </div>
      <div id="downClues">
        {clues.down.map((c, i) => <Clue key={i} clue={c}/>)}
      </div>
    </div>
  )
};

export default Clues;