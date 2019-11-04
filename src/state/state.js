

// board
//   mode (create/solve)
//   dimensions
//   squares
//     letters
//   clues
//   timer
// puzzleList



export const initialBoard = {
  totalSquares: 0,
  dimensions: [0, 0],
  squares: [],
  clues: {
    'across': [],
    'down': []
  },
  timer: undefined,
  solved: false
};

export const initialSquare = {
  letter: '',
  black: false
};

export const initialSidebar = {
  xwList: [],
  loggedIn: false
};

export const initialState = {
  //mode: 'EMPTY',
  board: initialBoard,
  sidebar: initialSidebar
};




class Square {
  constructor(letter) {
    this.letter = letter
  }
}