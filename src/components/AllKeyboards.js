import React from 'react';
import Keyboard from './Keyboard/Keyboard';
import KeyboardSlice from './KeyboardSlice/KeyboardSlice';

const AllKeyboards = ({
  oscillator,
  order,
  totalBeats,
  repeatx,
  noteLength,
  bpm,
  getMaxBeats,
}) => {
  return (
    <div>
      <Keyboard />

      <KeyboardSlice
        oscillator={oscillator}
        order={order}
        totalBeats={totalBeats}
        getMaxBeats={getMaxBeats}
        repeatx={repeatx}
        noteLength={noteLength}
        bpm={bpm}
      />
    </div>
  );
};

export default AllKeyboards;