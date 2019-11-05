import { connect } from 'react-redux';

import { squareMod } from '../../../state/actions';
import Square from './Square';



const mapStateToProps = (state, ownProps) => {
  // const {position, letter, input, number,
  //        black, rebus, locked} = state.board.squares[ownProps.squareObj.squareId];
  
  //console.log(state.board.squares[ownProps.squareObj.squareId]);

  // return {
  //   position, letter, input, number,
  //   black, rebus, locked
  // }
  return state.board.squares[ownProps.squareObj.squareId];
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  squareMod: (letter, black) => 
    dispatch(squareMod(ownProps.squareObj.squareId, letter, black))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);