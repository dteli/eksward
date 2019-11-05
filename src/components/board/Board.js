import React from 'react';
import './Board.scss';

import SquareContainer from './square/SquareContainer';
import Clues from './clues/Clues';


const Board = (props) => {

  return (
    <div id="board">
      <div id="board-grid">
        <svg width={props.dimensions.x * 40} height={props.dimensions.y * 40}>
          {props.squares.map((s, i) => 
            <SquareContainer key={i} squareObj={s}/>)}
        </svg>
      </div>
      <Clues clues={props.clues}/>
    </div>
  );
};

export default Board;