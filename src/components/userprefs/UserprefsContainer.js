import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Userprefs from './Userprefs';
import {userprefsMod} from '../../state/actions';


const mapStateToProps = (state, ownProps) => ({
  userprefs: state.userprefs,

  token: ownProps.token,
  loggedIn: ownProps.loggedIn
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  userprefsMod: ups => dispatch(userprefsMod(ups))

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Userprefs);