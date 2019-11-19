import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { boardMod, squareMod, inputMod, archiveUpdatePuzzle } from '../../state/actions';
import Board from './Board';

const mapStateToProps = (state, ownProps) => {
  //console.log(state.board, "ownProps for boardcontainer", ownProps)
  return { 
    archive: state.archive,
    board: state.board,
    id: state.board.id,
    numSquares: state.board.numSquares,
    dims: state.board.dims, // {x: width, y: height}
    squares: state.board.squares,
    clues: state.board.clues,
    timer: state.board.timer,
    solved: state.board.solved,

    token: ownProps.token
  };
};

const mapDispatchToProps = (dispatch) => ({
  boardMod: (b) => dispatch(boardMod(b)),
  inputMod: (squareId, newInput) => dispatch(inputMod(squareId, newInput)),
  archiveUpdatePuzzle: (id, b) => dispatch(archiveUpdatePuzzle(id, b))
});

// export default withRouter(connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Board));

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);