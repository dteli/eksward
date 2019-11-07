import * as R from 'ramda';
//const R = require('ramda');


export const testPuzzle0 = "3c894143524f535326444f574e0002ea4bc1ffbfab82b127312e330000000000202052424a204949492020200f0f4e000100000042454152442e4b4e45452e4541525341525241592e4142454c2e41544f504e49434b454c4241434b2e474f5941414348452e4f55542e2e414c4c414e2e2e2e2e53494c56455242454c4c53434f535441532e2e424941532e2e2e4153544f522e544545532e434f4f53504c4154494e554d5245434f5244534e4f4e452e414c4f542e4c555a4f4e2e2e2e4d4241532e2e4d4f544f525354494e50414e414c4c45592e2e2e2e41464f4f542e2e414c412e4a4544494d494c4c2e4d4554414c4d55534943504c49452e4954454d2e494e414e45414c45532e544152412e52455553452d2d2d2d2d2e2d2d2d2d2e2d2d2d2d2d2d2d2d2d2e2d2d2d2d2e2d2d2d2d2d2d2d2d2d2d2d2d2d2d2e2d2d2d2d2d2d2d2d2e2d2d2d2e2e2d2d2d2d2d2e2e2e2e2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2e2e2d2d2d2d2e2e2e2d2d2d2d2d2e2d2d2d2d2e2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2e2d2d2d2d2e2d2d2d2d2d2e2e2e2d2d2d2d2e2e2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2e2e2e2e2d2d2d2d2d2e2e2d2d2d2e2d2d2d2d2d2d2d2d2e2d2d2d2d2d2d2d2d2d2d2d2d2d2d2e2d2d2d2d2e2d2d2d2d2d2d2d2d2d2e2d2d2d2d2e2d2d2d2d2d4e592054696d65732c204d6f6e6461792c204e6f76656d62657220342c203230313920005472656e7420482e204576616e73202f2057696c6c2053686f72747a00a920323031392c20546865204e657720596f726b2054696d65730046616369616c20686169722067656e6572616c6c792062616e6e656420696e20746865206d696c69746172790053656520322d446f776e005769746820312d446f776e2c20706c61796572206f66207468652048756c6b20696e20323030332773202248756c6b22004f6e65206f662074776f20696e20746865204d63446f6e616c642773206c6f676f004c6561662d676174686572696e6720746f6f6c004561737465722065676720636f6c6f72696e67004a6f696e74206265747765656e2074686520616e6b6c6520616e64206869700041666768616e697374616e2773206361706974616c0050726f20686f6f7073206e6574776f726b00436f6d6d6f6e204d61726b6574206c65747465727300416e746c6572656420616e696d616c0044697374696e63746976652062756e6e79206665617475726573004561726e6572206f66206174206c65617374203231206d65726974206261646765730049736c616e6420776974682061206c61676f6f6e005072696e6365206f72207072696e636573730057696e672d746f2d77696e67206d6561737572657300496d707265737369766520646973706c61790042726f74686572206f66204361696e004f6e00526f636b2062616e642077697468207468652032303031202331206869742022486f7720596f752052656d696e64204d6522005f5f5f204c616e652c206c6f766572206f662053757065726d616e005370616e69736820617274697374204672616e636973636f205f5f5f005061696e004e6f7420617420686f6d65004564676172205f5f5f20506f65004c61777965722773206f72672e00436c6173736963204368726973746d617320736f6e67207769746820746865206c79726963202243697479207369646577616c6b732c2062757379207369646577616c6b732c202f204472657373656420696e20686f6c69646179207374796c652200447265737320696e2044656c686900526f676572206f662022417420746865204d6f7669657322005768617420627265616420646f75676820616e6420746865206d6f726e696e672073756e20646f0053706f72747363617374657220426f62005175616b65722773205f5f5f204372756e63682063657265616c004e6f727761792773206361706974616c004f6c6c6965277320706172746e657220696e206f6c6420636f6d6564790043617276696e6773206f662050616369666963204e6f7274687765737420747269626573004469736372696d696e6174696f6e00466972737420552e532e206d756c74696d696c6c696f6e61697265204a6f686e204a61636f62205f5f5f00476f6c662070656773004f6b6c61686f6d612773207365636f6e642d6c617267657374206369747900436f6d656469616e205068696c69707300446f766520736f756e647300526963652d73686170656420706173746100416d6d6f6e6961206861732061207374726f6e67206f6e65004964656e74696669657273206f6e207461782072657475726e733a20416262722e004d696c6c696f6e2d73656c6c696e6720616c62756d7300496e6469616e20666c6174627265616400426520746f6f2073776565742c20706f737369626c7900416c6c2773206f70706f73697465004c6f61647320616e64206c6f616473004c6172676573742069736c616e6420696e20746865205068696c697070696e657300536f6d6520432e452e4f2e732720646567732e004f6e65206f662044726163756c61277320666f726d7300456e67696e6573004e6f74206a757374206120736e61636b004f6c64204e657720596f726b20736f6e67207075626c697368696e67206c6f63616c6500486f6d65206f6620746865205261797320616e642042756363616e6565727300506561626f64792041776172642d77696e6e696e67206a6f75726e616c697374204777656e00225468617427732074686520747275746821220022536565207961212200506572757669616e207061636b20616e696d616c00225468652067616d65206973205f5f5f222028536865726c6f636b20486f6c6d6573206465636c61726174696f6e290053746174652065617374206f66204d6973732e002252657475726e206f6620746865205f5f5f222028457069736f6465205649206f662022537461722057617273222900426967206d6f6e746820666f722077656464696e6773004269626c6963616c20736f6e206f66204973616163005261636b657473004472696e6b206272616e642077697468206120706f6c6172206265617220696e20697473206c6f676f00477261696e2d6772696e64696e6720666163696c6974790047656e726520666f7220536c6179657220616e642049726f6e204d616964656e202e2e2e206f7220612068696e7420746f2031372d2c2032332d2c2033382d20616e642034372d4163726f7373005363682e2061626f75742061206d696c652066726f6d2048617276617264005768656e20746f2065787065637420736f6d656f6e652c20666f722073686f7274004279676f6e65205275737369616e2073706163652073746174696f6e00456c6567616e742062616c6c65742062656e64004f6e65206f66203130206f722066657765722c206d617962652c20696e206120636865636b6f7574206c616e650053696c6c79004865617274792064726175676874730022476f6e652057697468207468652057696e642220706c616e746174696f6e0046696e642061206e657720707572706f736520666f72000047455854e100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";


const hexStringToTextArray = (hs) => {
  let bytes = R.splitEvery(2, hs);
  return bytes.map(b => String.fromCharCode(parseInt(b, 16)));
};

const hexStringToText = (hs) => hexStringToTextArray(hs).join('');





const parseAL = (p) => {

  const pBytes = R.splitEvery(2, p)

  const header = pBytes.slice(0, 0x34);

  const pWidth = parseInt(header[0x2c], 16);
  const pHeight = parseInt(header[0x2d], 16);
  const numSquares = pWidth * pHeight;

  const numCluesHex = header.slice(0x2e, 0x30);
  const numClues = parseInt(numCluesHex[0], 16) + (256 * parseInt(numCluesHex[1], 16));

  let solutionString = hexStringToText(p.slice(0x34 * 2, (0x34 + numSquares) * 2));
  let blankString = hexStringToText(p.slice((0x34 + numSquares) * 2, (0x34 + (2 * numSquares)) * 2));
  let solutionRows = R.splitEvery(pWidth, solutionString);
  let blankRows = R.splitEvery(pWidth, blankString);

  //console.log(solutionRows);

  let solutionSquareRows = rowsToSquareRows(solutionRows);
  //let blankSquareRows = rowsToSquareRows(blankRows);

  let remainingHexString = p.slice((0x34 + (2 * numSquares)) * 2);
  let [cluesHexString, extraHexString] = remainingHexString.split('0000', 2);

  let clueStrings = hexStringToText(cluesHexString).split('\u0000');

  const title = clueStrings.shift();
  const author = clueStrings.shift();
  const copyright = clueStrings.shift();

  //console.log(solutionSquareRows);

  const {acrossNumbers, downNumbers} = assignNumbersToSquareRows(solutionSquareRows);
  // we don't need to grab across/downNumbers again so we just call this function
  //assignNumbersToSquareRows(blankSquareRows);

  // returns {across: [{number: , text: }, ...], down: [...]}
  let clues = createClueObjects(clueStrings, acrossNumbers, downNumbers);

  
  return {
    solutionString,     // 'ABC.DEF..GH...'
    blankString,        // '---.---..--...'
    squares: solutionSquareRows.flat(),  // here we flatten
    // [{letter: 'C' (undef if black), black: t/f, number: undefined/3}]
    //blank: blankSquareRows,    // [[{letter: undefined, black: t/f, number: undefined/3}]]
    numSquares,
    numClues,
    dims: {
      x: pWidth,
      y: pHeight
    },

    meta: {
      title,
      author,
      copyright
    },
    
    // acrossNumbers,
    // downNumbers,

    clues

  };
};


// brs is of form ['---.--.-----.', ...]
function rowsToSquareRows (brs) {

  const width = brs[0].length;

  const charToSquare = (c, x, y) => {
    let s = {
      squareId: y * width + x,
      position: {x, y},
      number: undefined,  // we set numbers later
      input: undefined
    };
    if (c === '.') s.black = true;        else s.black = false;       // set black status
    if (c.match(/^[A-Z]$/)) s.letter = c; else s.letter = undefined;  // set letter

    //console.log(s);
    return s;
  };

  let rows = brs.map((row, y) => row.split('').map((c, x) => charToSquare(c, x, y)));

  return rows;
}


function assignNumbersToSquareRows (rs) {
  // rs is an array of arrays of {letter:, black:, number: } objects
  // we will modify rs in place and return an object {acrossNumbers: [...], downNumbers: [...]}

  const width = rs[0].length;

  // first label each square with a .acrossNumbered property
  for (let y = 0; y < rs.length; y++) {
    for (let x = 0; x < width; x++) {
      //console.log(rs, rs[y], rs[y][x]);
      if ((rs[y][x].black === false) && 
          (x === 0 || rs[y][x-1].black === true) && 
          (x+1 < width && rs[y][x+1].black === false)) {
        rs[y][x].acrossNumbered = true;
      } else rs[y][x].acrossNumbered = false;
    }
  }

  // then label each square with .downNumbered property
  for (let y = 0; y < rs.length; y++) {
    for (let x = 0; x < width; x++) {
      if ((rs[y][x].black === false) &&
          (y === 0 || rs[y-1][x].black === true) &&
          (y+1 < rs.length && rs[y+1][x].black === false)) {
        rs[y][x].downNumbered = true;
      } else rs[y][x].downNumbered = false;
    }
  }

  // now we number
  let currentCell = 1;
  let acrossNumbers = []; let downNumbers = [];

  for (let y = 0; y < rs.length; y++) {
    for (let x = 0; x < width; x++) {
      if (rs[y][x].black === true) continue;
      let assigned = false;
      if (rs[y][x].acrossNumbered === true) {
        acrossNumbers.push(currentCell);
        rs[y][x].number = currentCell;
        assigned = true;
      }
      if (rs[y][x].downNumbered === true) {
        downNumbers.push(currentCell);
        rs[y][x].number = currentCell;
        assigned = true;
      }
      if (assigned) currentCell++;
    }
  }

  return {
    acrossNumbers,
    downNumbers
  };
}


function createClueObjects (clueStrings, aNs, dNs) {
  let acrossClues = []; let downClues = [];

  // the highest clue should always be an across but what the hell, let's check anyway
  for (let i=1; i <= Math.max(aNs[aNs.length-1], dNs[dNs.length-1]); i++) {
    if (aNs.includes(i)) acrossClues.push({number: i, text: clueStrings.shift()});
    if (dNs.includes(i)) downClues.push({number: i, text: clueStrings.shift()});
  }

  return { across: acrossClues, down: downClues }
}



// module.exports = {
//   parseAL,
//   rowsToSquareRows,
//   assignNumbersToSquareRows,
//   hexStringToTextArray,
//   createClueObjects,
//   testPuzzle0
// };

export default parseAL;