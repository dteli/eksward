import { connect } from 'react-redux';

import Board from './Board';

const mapStateToProps = state => ({
  totalSquares: state.board.totalSquares,
  dimensions: state.board.dimensions,
  squares: state.board.squares,
  timer: state.board.timer,
  solved: state.board.solved,
})

// const mapDispatchToProps = dispatch => ({

// })

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(Board)