import React from 'react';
import Keyboard from './Keyboard/Keyboard';
import KeyboardSlice from './KeyboardSlice/KeyboardSlice';

const AllKeyboards = ({ selectedScale, startingNote, selectedOctave, nextOctave, waveform, oscillator, order, totalBeats, repeatx, offset, getMaxBeats }) => {
  return (
    <div>

      <Keyboard
        startingNote={startingNote}
        selectedOctave={selectedOctave}
        waveform={waveform}
        oscillator={oscillator}
      />

      <KeyboardSlice
        selectedScale={selectedScale}
        startingNote={startingNote}
        selectedOctave={selectedOctave}
        nextOctave={nextOctave}
        waveform={waveform}
        oscillator={oscillator}
        order={order}
        totalBeats={totalBeats}
        getMaxBeats={getMaxBeats}
        repeatx={repeatx}
        offset={offset}
      />

    </div>
  )
}

export default AllKeyboards;
