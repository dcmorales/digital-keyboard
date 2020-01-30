import React from 'react';
import Keyboard from './Keyboard/Keyboard';
import KeyboardSlice from './KeyboardSlice/KeyboardSlice';

const AllKeyboards = ({ noteLength, bpm }) => {
  return (
    <div>
      <Keyboard />

      <KeyboardSlice noteLength={noteLength} />
    </div>
  );
};

export default AllKeyboards;
