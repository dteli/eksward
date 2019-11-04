import { connect } from 'react-redux';
import { squareMod } from '../../../state/actions';
import Square from './Square';



const mapStateToProps = (state, ownProps) => ({
  letter: state.board.squares[ownProps.squareId].letter,
  black: state.board.squares[ownProps.squareId].black
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  squareMod: l => dispatch(squareMod(ownProps.squareId, l))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);