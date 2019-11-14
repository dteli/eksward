import React, {useEffect} from 'react';
import './Clues.scss';

import Clue from './Clue';

const Clues = ({ clues, activeClue, scrollToActiveClue }) => {



  useEffect(() => {
    if (clues.across[0]) scrollToActiveClue(activeClue);
  }, [activeClue]);



  return (
    <div id="clues-box">
      <div id="across-clues">
        <h3>ACROSS</h3>
        <ol id="across-clues-ol">
          {clues.across.map((c, i) => <Clue key={i} clue={c} id={activeClue.across === c.number ? "active-clue" : null} />)}
        </ol> 
      </div>
      <div id="down-clues">
        <h3>DOWN</h3>
        <ol id="down-clues-ol">
          {clues.down.map((c, i) => <Clue key={i} clue={c} id={activeClue.down === c.number ? "active-clue" : null} />)}
        </ol>
      </div>
    </div>
  )
};

export default Clues;