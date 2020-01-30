import React from 'react';
import TwoKeys from './TwoKeys';
import Key from './Key';

const FiveKeys = ({ note1, note2, note3, note4, note5, octave }) => {
  return (
    <React.Fragment>
      <TwoKeys note1={note1} note2={note2} octave={octave} />

      <TwoKeys note1={note3} note2={note4} octave={octave} />

      <div className="keys">
        <Key
          noteFull={`${note5}${octave}`}
          octave={octave}
          color="white"
          keyboard="full"
        />
      </div>
    </React.Fragment>
  );
};

export default FiveKeys;
