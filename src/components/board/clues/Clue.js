import React from 'react';


const Clue = ({ clue }) => {

  return (
    <li>
      <span className="clueNum">{clue.num}</span>
      <span className="clueText">{clue.text}</span>
    </li>
  );
};

export default Clue;