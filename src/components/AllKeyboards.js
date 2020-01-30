import React from 'react';
import Keyboard from './Keyboard/Keyboard';
import KeyboardSlice from './KeyboardSlice/KeyboardSlice';

const AllKeyboards = ({
  startingNote,
  selectedOctave,
  nextOctave,
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
      <Keyboard
        startingNote={startingNote}
        selectedOctave={selectedOctave}
        waveform={waveform}
        oscillator={oscillator}
      />

      <KeyboardSlice
        startingNote={startingNote}
        selectedOctave={selectedOctave}
        nextOctave={nextOctave}
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
