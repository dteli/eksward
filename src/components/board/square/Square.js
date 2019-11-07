import React, {useState} from 'react';
import './Square.scss';

const Square = ({ position, letter, input, black, number, rebus, locked,
                  squareId, setActiveSquare, activeSquare,
                  squareMod }) => {


  // squareMod: (position, letter, input, rebus, black, locked) => dispatch(...)



  // fires on onKeyDown


  const computeClass = (sq) => {
    let cs = "square";
    if (black) cs += " square-black";
    if (number) cs += " square-numbered";
    if (rebus) cs += " square-rebus";
    if (locked) cs += " square-locked";

    if (activeSquare === squareId && (!black)) cs += " square-active";

    return cs;
  }


  const handleClick = (e) => {
    if (!black) setActiveSquare(squareId);
  }


  return (
    <g>
      <rect onClick={e => handleClick(e)} x={position.x * 40} y={position.y * 40}
            width="40" height="40" className={computeClass()} />
      { number ? <text x={position.x*40 + 2} y={position.y*40 + 12} textAnchor="start">{number}</text> : null}
      { input ? <text x={position.x*40 + 18} y={position.y*40 + 32}
                 textAnchor="middle" fontSize="28"
                 className="text-input">{input}</text> : null}
    </g>
  );
};

export default Square;