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
      let newArch = [...state];
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
          console.log("id match");
          newArchive.push({...action.board});
          console.log(action.board.squares[51].input);
        } else newArchive.push({...p});
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
    console.log(action.newState.squares[51].input)
    return { ...state, ...action.newState };
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
        return { ...s, input: action.newInput};
      }
      return s;
    });
    return { ...state, squares: newSquares };
  
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
