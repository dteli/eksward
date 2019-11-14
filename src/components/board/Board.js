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
        if (props.squares[127]) console.log("loading props before boardMod:",props.squares[127].input);
        if (props.archive[2].squares[127]) console.log("loading archive before boardMod",props.archive[2].squares[127].input);
        if (p.squares[127]) console.log("p.squares[127].input before boardMod",p.squares[127].input);
        console.log('loading board');
        props.boardMod(p);
        console.log('p.squares[127].input after boardMod:',p.squares[127].input);
        if (props.squares[127]) console.log("loading props after boardMod:",props.squares[127].input);
      }
    }

    return function () {
      console.log("saving board");
      if (props.squares[127]) console.log("saving:",props.squares[127].input);
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

      // then go to next square unless we are at end of word
      if (!atEndOfWord(activeSquare, props.squares, props.dims, activeDirection)) {
        let k = activeDirection ? 'ArrowDown' : 'ArrowRight';
        setActiveSquare(getNextActiveSquare(activeSquare, props.squares, props.dims, k));
      }
    }

    let nAS = getNextActiveSquare(activeSquare, props.squares, props.dims, e.key);
    let newAD = activeDirection;
    if (e.key.match(/^Arrow.*/)) {
      // check for directional change first
      let dirChange = false;
      if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && activeDirection === false) {
        newAD = true;
        dirChange = true;
        setActiveDirection(true);
      } else if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && activeDirection === true) {
        newAD = false;
        dirChange = true;
        setActiveDirection(false);
      } else setActiveSquare(nAS);
      //console.log(newAD, getActiveClue(activeSquare, newAD, props.squares));
      const nAC = getActiveClue(dirChange ? activeSquare : nAS, newAD, props.squares);
      setActiveClue(nAC);
      //scrollToActiveClue(nAC);
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
    console.log("keypress:",props.squares[127].input)
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
      <Clues clues={props.clues} id="clues" activeClue={activeClue} scrollToActiveClue={scrollToActiveClue} />
    </div>
  );
};

export default Board;



function getNextActiveSquare (currentSquare, squares, dims, key) {
  //let pCS = positionOfCurrentSquare(currentSquare, dims);
  let pCS = squares[currentSquare].position;
  //console.log(pCS);
  let jump;
  switch (key) {
    case 'ArrowUp':
      jump = -dims.x;
      while (squares[currentSquare+jump]) {
        if (squares[currentSquare+jump].position.y === 0) return currentSquare + jump;
        if (squares[currentSquare+jump].black === true) jump -= dims.x;
        else return currentSquare + jump;
      }
      return currentSquare;
    case 'ArrowDown':
      jump = dims.x;
      while (squares[currentSquare+jump]) {
        if (squares[currentSquare+jump].position.y === dims.y-1) return currentSquare + jump;
        if (squares[currentSquare+jump].black === true) jump += dims.x;
        else return currentSquare + jump;
      }
      return currentSquare;
    case 'ArrowLeft':
      jump = -1;
      while (squares[currentSquare+jump] && squares[currentSquare+jump].position.x !== dims.x-1) {
        if (squares[currentSquare+jump].black === true) jump--;
        else return currentSquare + jump;
      }
      return currentSquare;
    case 'ArrowRight':
      jump = 1;
      while (squares[currentSquare+jump] && squares[currentSquare+jump].position.x !== 0) {
        if (squares[currentSquare+jump].black === true) jump++;
        else return currentSquare + jump;
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
  if (!dir) return {across: squares[activeSquare].clues.across};
  if (dir) return {down: squares[activeSquare].clues.down};
}



const scrollToActiveClue = (activeClue) => {
  let activeBox;
  if (activeClue.across) activeBox = document.getElementById("across-clues-ol");
  if (activeClue.down)   activeBox = document.getElementById("down-clues-ol");

  let activeClueOffset = document.getElementById("active-clue").offsetTop;
  activeBox.scrollTop = activeClueOffset;

};


const atEndOfWord = (activeSquare, squares, dims, dir) => {
  if (!dir) {
    if (squares[activeSquare+1]) {
      if (squares[activeSquare].position.x === dims.x-1) return true;
      if (squares[activeSquare+1].black) return true;
    }
  } else {
    if (squares[activeSquare].position.y === dims.y-1) return true;
    if (squares[activeSquare+dims.x].black) return true;
  }
  return false;
};