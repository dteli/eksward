import React from 'react';


const Clue = ({ clue, id }) => {

  return (
    <li className="clue" id={id}>
      <span className="clue-num">{clue.number}</span>
      <span className="clue-text">{clue.text}</span>
    </li>
  );
};

export default Clue;