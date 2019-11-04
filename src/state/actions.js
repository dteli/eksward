

export const SELECT_PUZZLE = 'SELECT_PUZZLE';



// timer state

export const BOARD_UPDATE = 'BOARD_UPDATE';


export const SQUARE_UPDATE = 'SQUARE_UPDATE';





// action creators ----------------------------------






export const squareMod = (squareId, letter, black) => ({
  type: SQUARE_UPDATE,
  squareId,
  newState: {
    letter,
    black
  }
});