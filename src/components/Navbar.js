import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';


const Navbar = (props) => {




  return (
    <div id="navbar">
      <h1 id="navbar-header">eksward</h1>
      <div id="navbar-spacer"></div>
      <nav id="navbar-nav">
        <ul>
          <li><Link to="/archive">archive</Link></li>
          <li><Link to="/upload">upload</Link></li>
          <li><Link to="/puzzle">puzzle</Link></li>
          <li className="login-button" onClick={() => props.updateToken(undefined)}>{props.loggedIn ? "Log Out" : "Log In"}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;