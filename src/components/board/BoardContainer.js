import { connect } from 'react-redux';

import { boardMod, squareMod, inputMod } from '../../state/actions';
import Board from './Board';

const mapStateToProps = state => ({
  numSquares: state.board.numSquares,
  dims: state.board.dims, // {x: width, y: height}
  squares: state.board.squares,
  clues: state.board.clues,
  timer: state.board.timer,
  solved: state.board.solved,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  boardMod: ({dims, clues, timer, solved, squares}) =>
    dispatch(boardMod({dims, clues, timer, solved, squares})),
  squareMod: (squareId, {position, letter, input, black, rebus, locked}) =>
    dispatch(squareMod(squareId, {position, letter, input, black, rebus, locked})),
  inputMod: (squareId, newInput) => dispatch(inputMod(squareId, newInput))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);