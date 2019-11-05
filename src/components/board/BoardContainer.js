import { connect } from 'react-redux';

import { boardMod } from '../../state/actions';
import Board from './Board';

const mapStateToProps = state => ({
  totalSquares: state.board.totalSquares,
  dimensions: state.board.dimensions,
  squares: state.board.squares,
  clues: state.board.clues,
  timer: state.board.timer,
  solved: state.board.solved,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  boardMod: (dims, clues, timer, solved) =>
    dispatch(boardMod(dims, clues, timer, solved))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);