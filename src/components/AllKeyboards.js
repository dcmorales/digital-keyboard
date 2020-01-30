import React from 'react';
import Keyboard from './Keyboard/Keyboard';
import KeyboardSlice from './KeyboardSlice/KeyboardSlice';

const AllKeyboards = ({
  waveform,
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
      <Keyboard waveform={waveform} oscillator={oscillator} />

      <KeyboardSlice
        waveform={waveform}
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
