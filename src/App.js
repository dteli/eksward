import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import BoardContainer from './components/board/BoardContainer';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BoardContainer />
    </div>
  );
}

export default App;
