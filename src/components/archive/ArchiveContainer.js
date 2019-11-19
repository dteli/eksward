import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { archiveAddPuzzles, archiveAddPuzzle, archiveUpdatePuzzle, archiveDeletePuzzle, archiveDeleteAll,
         boardMod } from '../../state/actions';
import Archive from './Archive';


const mapStateToProps = (state, ownProps) => ({
  archive: state.archive,

  token: ownProps.token,
  loggedIn: ownProps.loggedIn
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  boardMod: (puzzle) => dispatch(boardMod(puzzle)),
  archiveAddPuzzles: (puzzles) => dispatch(archiveAddPuzzles(puzzles)),
  archiveAddPuzzle: (puzzle) => dispatch(archiveAddPuzzle(puzzle)),
  archiveUpdatePuzzle: (puzzle) => dispatch(archiveUpdatePuzzle(puzzle)),
  archiveDeletePuzzle: (puzzleId) => dispatch(archiveDeletePuzzle(puzzleId)),
  archiveDeleteAll: () => dispatch(archiveDeleteAll())
});




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Archive);