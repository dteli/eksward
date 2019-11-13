import React, {useState, useEffect} from 'react';
//import * as R from 'ramda';
import {useParams, Redirect} from 'react-router-dom';
import './Board.scss';

import SquareContainer from './square/SquareContainer';
import Clues from './clues/Clues';


const Board = (props) => {

  let {id} = useParams();

  // props includes boardMod and squareMod

  const [activeDirection, setActiveDirection] = useState(false); // down is true
  const [activeSquare, setActiveSquare] = useState(0);
  //const [activeWord, setActiveWord] = useState(getActiveWord(0, activeDirection, props.squares, props.dims))
  const [activeClue, setActiveClue] = useState({across:1});
  

  const loadBoard = () => {
    console.log('checking boards')
    for (let p of props.archive) {

      if (p.id === parseInt(id, 10)) {
        console.log('loading board');
        props.boardMod(p);
        console.log('loading:',p.squares[51].input);
      }
    }

    return () => {
      console.log("saving board");
      if (props.board.squares[51]) console.log("saving:",props.board.squares[127].input);
      props.archiveUpdatePuzzle(props.board);
      
      //console.log("unloading board");
      //props.boardMod({id:99999});
    };
  };

  useEffect(loadBoard, [id]);

  // useEffect to set interval for update to server


  










  const handleKeypress = (e) => {
    e.preventDefault();
    
    if (e.key.match(/^[A-Za-z0-9]$/)) {
      props.inputMod(activeSquare, e.key.toUpperCase());

      // then go to next square
      let k = activeDirection ? 'ArrowDown' : 'ArrowRight';
      setActiveSquare(getNextActiveSquare(activeSquare, props.squares, props.dims, k));
      
    }
    if (e.key.match(/^Arrow.*/)) {
      // check for directional change first
      let newAD = activeDirection;
      if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && activeDirection === false) {
        newAD = true;
        setActiveDirection(true);
      } else if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && activeDirection === true) {
        newAD = false;
        setActiveDirection(false);
      } else setActiveSquare(getNextActiveSquare(activeSquare, props.squares, props.dims, e.key));
      //console.log(newAD, getActiveClue(activeSquare, newAD, props.squares));
      setActiveClue(getActiveClue(activeSquare, newAD, props.squares));
      
    }
    if (e.key === 'Tab') {
      // go to next word

    }
    if (e.key === 'Backspace') {
      // erase input, then go to previous square
      props.inputMod(activeSquare, undefined);
      setActiveSquare(getPreviousActiveSquare(activeSquare, props.squares, props.dims, activeDirection))

    }
    if (e.key === 'Delete') {
      props.inputMod(activeSquare, undefined);
    }
    console.log("keypress:",props.board.squares[127].input)
  };

  //console.log(props.id);

  if (!props.id) return (<Redirect to="/archive" />);
  return (
    <div id="board">
      <div id="board-grid" tabIndex="-1" onKeyDown={e => handleKeypress(e)}>
        <svg width={props.dims.x * 40} height={props.dims.y * 40}>
          {props.squares.map((s, i) => <SquareContainer key={s.squareId} 
                                                        squareObj={s}
                                                        activeSquare={activeSquare}
                                                        setActiveSquare={setActiveSquare} 
                                                        activeClue={activeClue}
                                                        setActiveClue={setActiveClue}
                                                        activeDirection={activeDirection}
                                                        setActiveDirection={setActiveDirection} />)}
        </svg>
      </div>
      <Clues clues={props.clues} id="clues"/>
    </div>
  );
};

export default Board;



function getNextActiveSquare (currentSquare, squares, dims, key) {
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

function getPreviousActiveSquare (currentSquare, squares, dims, dir) {
  //console.log(getNextActiveSquare(currentSquare, squares, dims, dir ? 'ArrowUp' : 'ArrowLeft'));
  return getNextActiveSquare(currentSquare, squares, dims, dir ? 'ArrowUp' : 'ArrowLeft');

}



const positionOfCurrentSquare = (currentSquare, dims) => ({
  y: Math.floor(currentSquare / dims.x),
  x: currentSquare % dims.x
})


function getActiveWord (activeSquare, dir, squares, dims) {

}

function getActiveClue (activeSquare, dir, squares) {
  if (dir === false) return {across: squares[activeSquare].clues.across};
  if (dir === true) return {down: squares[activeSquare].clues.down};
}