import React from 'react';

import Key from '../../KeyboardFull/Key';

const SliceSection = ({ notesDefinedSlice }) => {
  return notesDefinedSlice.map(noteFull => {
    return (
      <Key
        key={noteFull}
        color={noteFull.includes('b') ? 'black' : 'white'}
        noteFull={noteFull}
        octave={noteFull.includes('b') ? noteFull[2] : noteFull[1]}
        keyboard="slice"
      />
    );
  });
};

export default SliceSection;
