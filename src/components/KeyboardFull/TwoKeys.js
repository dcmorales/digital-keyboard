import React from 'react';

import Key from './Key';

const TwoKeys = ({ octave, note1, note2 }) => {
  return (
    <div className="keys">
      <Key
        noteFull={`${note1}${octave}`}
        octave={octave}
        color="white"
        keyboard="full"
      />

      <Key
        noteFull={`${note2}${octave}`}
        octave={octave}
        color="black"
        keyboard="full"
      />
    </div>
  );
};

export default TwoKeys;
