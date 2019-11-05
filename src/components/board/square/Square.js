import React, {useState} from 'react';
import './Square.scss';

const Square = ({ position, letter, input, black, number, rebus, locked }) => {

  // { position, letter, input, black, number, rebus, locked }

  // if (black) return <p className="square black-square"></p>;
  // if (number && letter) return <p className="square lettered-square numbered-square">{letter}</p>;
  // if (number) return <p className="square numbered-square">{letter}</p>;
  // if (letter) return <p className="square lettered-square">{letter}</p>;




  return (
    <g className="square">
      <rect x={position.x * 40} y={position.y * 40} width="40" height="40" />
      { number ? <text>{number}</text> : null}
      { input ? <text>{input}</text> : null}
    </g>
  );
};

export default Square;