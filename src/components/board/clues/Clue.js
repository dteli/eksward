import React from 'react';


const Clue = ({ clue }) => {

  return (
    <li className="clue">
      <span className="clueNum">{clue.number}</span>
      <span className="clueText">{clue.text}</span>
    </li>
  );
};

export default Clue;