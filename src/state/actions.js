

export const SELECT_PUZZLE = 'SELECT_PUZZLE';



// timer state

export const BOARD_UPDATE = 'BOARD_UPDATE';
export const SQUARE_UPDATE = 'SQUARE_UPDATE';
export const INPUT_UPDATE = 'INPUT_UPDATE';





// action creators ----------------------------------



export const boardMod = (dims, clues, timer, solved) => ({
  type: BOARD_UPDATE,
  newState: {
    totalSquares: dims[0]*dims[1],
    dims,
    timer,
    solved
  }
});



export const squareMod = (squareId, newState) => ({  //position, letter, input, rebus, black, locked) => ({
  type: SQUARE_UPDATE,
  squareId,
  newState
  // {
  //   position,
  //   letter,
  //   input,
  //   black,
  //   rebus,
  //   locked
  //   //number
  // }
});

export const inputMod = (squareId, newInput) => ({
  type: INPUT_UPDATE,
  squareId,
  newInput
})