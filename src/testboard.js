
import parseAL, {testPuzzle0} from './utils/ALParser';

const makeTestBoard = (dims) => {

  let board = {
    numSquares: dims[0]*dims[1],
    dims: {
      x: dims[0],
      y: dims[1]
    },
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

  for (let i=0; i<dims[1]; i++) {
    for (let j=0; j<dims[0]; j++) {
      squares.push({
        position: {
          x: j,
          y: i
        },
        squareId: j + (i * dims[0]),
        letter: 'X',
        black: false,
        number: undefined
      });
    }
  }

  
  squares[0] = {
    position: {
      x: 0,
      y: 0
    },
    squareId: 0,
    letter: 'A',
    input: 'A',
    black: false,
    rebus: false,
    number: 1
  }

  board.squares = squares;

  return board;
};


export default makeTestBoard([15,15]);

