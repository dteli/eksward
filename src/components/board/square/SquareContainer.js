import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
  let s = ownProps.s;
  if (!s) s = state.board.squares[ownProps.squareObj.squareId];
  
  

  //s.squareId = ownProps.squareId;
  s.activeSquare = ownProps.activeSquare;
  s.setActiveSquare = ownProps.setActiveSquare;
  s.activeClue = ownProps.activeClue;
  s.setActiveClue = ownProps.setActiveClue;
  s.activeDirection = ownProps.activeDirection;
  s.setActiveDirection = ownProps.setActiveDirection;


  return s;
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  squareMod: (position, letter, input, rebus, black, locked) => 
    dispatch(squareMod(ownProps.squareObj.squareId, position, letter, input, rebus, black, locked))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);