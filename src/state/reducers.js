// redux imports
import { combineReducers } from 'redux';
import * as R from 'ramda';

// ./actions imports
import { BOARD_UPDATE, SQUARE_UPDATE, INPUT_UPDATE,
         ARCHIVE_ADDPUZZLES_UPDATE, ARCHIVE_ADDPUZZLE_UPDATE, ARCHIVE_UPDATEPUZZLE_UPDATE,
         ARCHIVE_DELETEPUZZLE_UPDATE, ARCHIVE_DELETEALL_UPDATE } from './actions';

// ./state imports
import { initialState, initialSidebar, initialBoard, initialSquare } from './state';


import test255 from '../testboard';
import parseAL, {testPuzzle0} from '../utils/ALParser';




const archiveR = (state=[], action) => {
  switch (action.type) {
    case ARCHIVE_ADDPUZZLES_UPDATE:
      //let newArch = [...state].concat(action.puzzles);
      let newArch = state.map(p => copyPuzzle(p));
      for (let p of action.puzzles) {
        let seen = false;
        for (let p0 of state) {
          if (p.id === p0.id) seen = true;
        }
        if (seen === false) newArch.push(p);
      }
      return newArch;
      //return R.uniqWith((p0, p1) => p0.id===p1.id)(newArch);
    case ARCHIVE_ADDPUZZLE_UPDATE:
      return [...state, action.puzzle];
    case ARCHIVE_UPDATEPUZZLE_UPDATE:
      console.log("update puzzle");
      let newArchive = [];
      for (let p of state) {
        if (p.id === action.board.id) {
          newArchive.push(copyPuzzle(action.board));
          console.log("updating state with",action.board.squares[127].input);
        } else newArchive.push(copyPuzzle(p));
      }
      return newArchive;
    case ARCHIVE_DELETEPUZZLE_UPDATE:

      break;
    case ARCHIVE_DELETEALL_UPDATE:
      return [];
    default:
      return state;
  }
};

const dummyBoard = {
  id:99,
  dims:{x:1,y:1},
  squares:[],
  clues:{across:[],down:[]},
  numSquares:1,
  timer:undefined,
  solved:true
}

// state=parseAL(testPuzzle0)
const boardR = (state=dummyBoard, action) => {
  if (action.type === BOARD_UPDATE) {
    console.log('board update');
    //console.log(action.newState);
    if (Object.keys(action.newState).length === 0) {
      console.log("empty object passed as new board");
      return {};
    }
    console.log(action.newState.squares[127].input)
    let newState = { ...state,
             ...action.newState,
             dims: {x: action.newState.dims.x, y: action.newState.dims.y},
             squares: [],
             clues: {across: [], down: []},
            };
    for (let s of action.newState.squares) {
      newState.squares.push({...s});
    }
    for (let c of action.newState.clues.across) {
      newState.clues.across.push({...c});
    }
    for (let c of action.newState.clues.down) {
      newState.clues.down.push({...c});
    }
    return newState;
  
  
  
  
  
  } else if (action.type === SQUARE_UPDATE) {
    console.log('square update');
    console.log(state);
    let newSquares = state.squares.map((s, i) => {
      console.log(s.squareId, action.squareId);
      if (s.squareId === action.squareId) {
        console.log(s);
        return { ...s, ...action.newState };
      }
      return s;
    });
    return { ...state, squares: newSquares };

  
  
  
  
  
  } else if (action.type === INPUT_UPDATE) {
    let newSquares = state.squares.map((s, i) => {
      if (s.squareId === action.squareId) {
        console.log("input update", action.newInput);
        return { ...s, 
          position: {x: s.position.x, y: s.position.y},
          clues: {across: s.clues.across, down: s.clues.down},
          input: action.newInput
        };
      }
      console.log(s);
      return copySquare(s);
    });

    let newState = {
      ...state,
      dims: {x: state.dims.x, y: state.dims.y},
      clues: {across: [], down: []},
      squares: newSquares
    }

    for (let c of state.clues.across) newState.clues.across.push({...c});
    for (let c of state.clues.down) newState.clues.down.push({...c});

    return newState;
  
  } else {
    return state;
  }
};










const squareR = (state=initialSquare, action) => {
  if (action.type === SQUARE_UPDATE) {
    return { ...state,
      squareId: action.squareId,
      letter: action.letter };
  }
};

const sidebarR = (state=initialSidebar, action) => {
  return { ...state, ...action.newState };
};




const ekswardState = combineReducers({
  archive: archiveR,
  board: boardR,
  sidebar: sidebarR
});

export default ekswardState;




const copyPuzzle = (puzzle) => {
  let newPuzzle = {
    ...puzzle,
    dims: {x: puzzle.dims.x, y: puzzle.dims.y},
    squares: [],
    clues: {across: [], down: []}
  } 

  for (let s of puzzle.squares) newPuzzle.squares.push({...s});

  for (let c of puzzle.clues.across) newPuzzle.clues.across.push({...c});
  for (let c of puzzle.clues.down)   newPuzzle.clues.down.push({...c});

  return newPuzzle;
};

const copySquare = (square) => {
  let newSquare = {
    ...square,
    position: {x: square.position.x, y: square.position.y},
  };
  if (!square.black) newSquare.clues = {across: square.clues.across, down: square.clues.down};
  return newSquare;
};