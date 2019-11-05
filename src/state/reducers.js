// redux imports
import { combineReducers } from 'redux';

// ./actions imports
import { BOARD_UPDATE, SQUARE_UPDATE } from './actions';

// ./state imports
import { initialState, initialSidebar, initialBoard, initialSquare } from './state';


import test255 from '../testboard';


const boardR = (state=test255, action) => {
  if (action.type === BOARD_UPDATE) {
    console.log('board update');
    return { ...state, ...action.newState };
  } else if (action.type === SQUARE_UPDATE) {
    console.log('square update');
    let newSquares = state.board.squares.map((s, i) => {
      if (s.squareId === action.squareId) {
        return { ...s, ...action.newState };
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
