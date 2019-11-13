import {connect} from 'react-redux';

import { archiveAddPuzzle, archiveUpdatePuzzle } from '../../state/actions';
import Uploader from './Uploader';


const mapStateToProps = (state, ownProps) => ({
  archive: state.archive,

  token: ownProps.token,
  loggedIn: ownProps.loggedIn
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  archiveAddPuzzle: (puzzle) => dispatch(archiveAddPuzzle(puzzle)),
  archiveUpdatePuzzle: (puzzle) => dispatch(archiveUpdatePuzzle(puzzle)),
});




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Uploader);