import React from 'react';

import SquareContainer from './square/SquareContainer';
import Clues from './clues/Clues';


const Board = (props) => {

  return (
    <div id="board">
      <div id="board-grid">
        {props.squares.map((s, i) => 
          <SquareContainer key={i} squareObj={s}/>)}
      </div>
      <Clues clues={props.clues}/>
    </div>
  );
};

export default Board;