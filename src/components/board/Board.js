import React, {useState} from 'react';
//import * as R from 'ramda';
import './Board.scss';

import SquareContainer from './square/SquareContainer';
import Clues from './clues/Clues';


const Board = (props) => {

  // props includes boardMod and squareMod

  const [activeDirection, setActiveDirection] = useState(false); // down is true
  const [activeSquare, setActiveSquare] = useState(0);
  const [activeClue, setActiveClue] = useState(undefined)
  


  const handleKeypress = (e) => {
    e.preventDefault();
    
    if (e.key.match(/^[A-Za-z0-9]$/)) {
      props.inputMod(activeSquare, e.key.toUpperCasae());

      // then go to next square
      
    }
    if (e.key.match(/^Arrow.*/)) {
      // check for directional change first
      setActiveSquare(getNextActiveSquare(activeSquare, props.squares, props.dims, e.key))
    }
    if (e.key === 'Tab') {

    }
    if (e.key === 'Backspace') {

    }
    if (e.key === 'Delete') {

    }
  };


  return (
    <div id="board">
      <div id="board-grid" tabIndex="-1" onKeyDown={e => handleKeypress(e)}>
        <svg width={props.dims.x * 40} height={props.dims.y * 40}>
          {props.squares.map((s, i) => <SquareContainer key={s.squareId} squareObj={s} activeSquare={activeSquare} setActiveSquare={setActiveSquare} />)}
        </svg>
      </div>
      <Clues clues={props.clues}/>
    </div>
  );
};

export default Board;



function getNextActiveSquare (currentSquare, squares, dims, key) {
  //console.log(currentSquare);
  //let pCS = positionOfCurrentSquare(currentSquare, dims);
  let pCS = squares[currentSquare].position;
  //console.log(pCS);
  switch (key) {
    case 'ArrowUp':
      if (pCS.y !== 0 && squares[currentSquare-dims.x].black !== true) {
        return currentSquare - dims.x;
      }
      return currentSquare;
    case 'ArrowDown':
      if (pCS.y !== dims.y-1 && squares[currentSquare+dims.x].black !== true) {
        return currentSquare + dims.x;
      }
      return currentSquare;
    case 'ArrowLeft':
      if (pCS.x !== 0 && squares[currentSquare-1].black !== true) {
        return currentSquare - 1;
      }
      return currentSquare;
    case 'ArrowRight':
      if (pCS.x !== dims.x-1 && squares[currentSquare+1].black !== true) {
        return currentSquare + 1;
      }
      return currentSquare;
    default:
      return currentSquare;

  }

}

const positionOfCurrentSquare = (currentSquare, dims) => ({
  y: Math.floor(currentSquare / dims.x),
  x: currentSquare % dims.x
})