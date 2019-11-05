


const makeTestBoard = (dims) => {

  let board = {
    totalSquares: dims[0]*dims[1],
    dimensions: dims,
    clues: {
      'across': [
        {num: 1, text:"this is a text clue"},
        {num: 5, text:"so is this"}
      ],
      'down': [
        {num: 1, text:"this is a *down* clue"},
        {num: 2, text:"another down clue"}
      ]
    },
    timer: undefined,
    solved: false
  };

  let squares = [];

  for (let i=0; i<board.totalSquares; i++) {
    squares.push({
      squareId: i,
      letter: 'X',
      black: false
    });
  }

  board.squares = squares;

  return board;
};


export default makeTestBoard([15,15]);