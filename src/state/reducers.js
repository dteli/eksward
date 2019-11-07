// redux imports
import { combineReducers } from 'redux';

// ./actions imports
import { BOARD_UPDATE, SQUARE_UPDATE, INPUT_UPDATE } from './actions';

// ./state imports
import { initialState, initialSidebar, initialBoard, initialSquare } from './state';


import test255 from '../testboard';
import parseAL, {testPuzzle0} from '../utils/ALParser';


const boardR = (state=parseAL(testPuzzle0), action) => {
  if (action.type === BOARD_UPDATE) {
    console.log('board update');
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
  board: boardR,
  sidebar: sidebarR
});

export default ekswardState;
