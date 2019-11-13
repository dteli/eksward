

export const SELECT_PUZZLE = 'SELECT_PUZZLE';



// timer state

export const ARCHIVE_ADDPUZZLES_UPDATE = 'ARCHIVE_ADDPUZZLES_UPDATE';
export const ARCHIVE_ADDPUZZLE_UPDATE = 'ARCHIVE_ADDPUZZLE_UPDATE';
export const ARCHIVE_UPDATEPUZZLE_UPDATE = 'ARCHIVE_UPDATEPUZZLE_UPDATE';
export const ARCHIVE_DELETEPUZZLE_UPDATE = 'ARCHIVE_DELETEPUZZLE_UPDATE';
export const ARCHIVE_DELETEALL_UPDATE = 'ARCHIVE_DELETEALL_UPDATE';

export const BOARD_UPDATE = 'BOARD_UPDATE';
export const SQUARE_UPDATE = 'SQUARE_UPDATE';
export const INPUT_UPDATE = 'INPUT_UPDATE';





// action creators ----------------------------------


export const archiveAddPuzzles = (puzzles) => ({
  type: ARCHIVE_ADDPUZZLES_UPDATE,
  puzzles
});

export const archiveAddPuzzle = (puzzle) => ({
  type: ARCHIVE_ADDPUZZLE_UPDATE,
  puzzle
});

export const archiveUpdatePuzzle = (board) => ({
  type: ARCHIVE_UPDATEPUZZLE_UPDATE,
  board
});

export const archiveDeletePuzzle = (puzzleId) => ({
  type: ARCHIVE_DELETEPUZZLE_UPDATE,
  puzzleId
});

export const archiveDeleteAll = () => ({
  type: ARCHIVE_DELETEALL_UPDATE
})






export const boardMod = (b) => ({
  type: BOARD_UPDATE,
  newState: b
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
});