import React from 'react';
import Key from '../Keyboard/Key';

const SliceSection = ({ notesDefinedSlice, oscillator }) => {
  return notesDefinedSlice.map(noteFull => {
    return (
      <div className="keys" key={noteFull}>
        <Key
          color={noteFull.includes('b') ? 'black2' : 'white'}
          noteFull={noteFull}
          oscillator={oscillator}
          octave={noteFull.includes('b') ? noteFull[2] : noteFull[1]}
          keyboard="slice"
        />
      </div>
    );
  });
};

export default SliceSection;
