import React from 'react';
import Keyboard from './Keyboard/Keyboard';
import KeyboardSlice from './KeyboardSlice/KeyboardSlice';

const AllKeyboards = ({ repeatx, noteLength, bpm, getMaxBeats }) => {
  return (
    <div>
      <Keyboard />

      <KeyboardSlice repeatx={repeatx} noteLength={noteLength} bpm={bpm} />
    </div>
  );
};

export default AllKeyboards;
