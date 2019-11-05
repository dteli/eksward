import { connect } from 'react-redux';

import { squareMod } from '../../../state/actions';
import Square from './Square';



const mapStateToProps = (state, ownProps) => ({
  letter: state.board.squares[ownProps.squareObj.squareId].letter,
  black: state.board.squares[ownProps.squareObj.squareId].black,
  
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  squareMod: (letter, black) => 
    dispatch(squareMod(ownProps.squareObj.squareId, letter, black))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);