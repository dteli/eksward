import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.scss';

import Navbar from './components/Navbar';
import BoardContainer from './components/board/BoardContainer';
import ArchiveContainer from './components/archive/ArchiveContainer';
import UploaderContainer from './components/uploader/UploaderContainer';
import Auth from './components/Auth';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(undefined);



  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
      setLoggedIn(true);
    }
  }, []);

  const updateToken = (t) => {
    if (t) localStorage.setItem('token', t); else localStorage.removeItem('token');
    setToken(t);
    if (t) setLoggedIn(true); else setLoggedIn(false);
  }


  if (loggedIn) {
    return (
      <div className="App">
        <Router>
          <Navbar loggedIn={loggedIn} updateToken={updateToken} />
          <Switch>
            <Route path="/archive">
              <ArchiveContainer token={token} loggedIn={loggedIn} />
            </Route>
            <Route path="/upload">
              <UploaderContainer token={token} loggedIn={loggedIn} />
            </Route>
            <Route path="/puzzle/:id">
              <BoardContainer token={token} />
            </Route>
            <Route path="/">
              <Redirect to="/archive" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  } else {
    return (
      <Auth updateToken={updateToken} />
    );
  }
  
  
}

export default App;
