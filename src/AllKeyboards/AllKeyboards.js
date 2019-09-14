import React from 'react';
import Keyboard from './Keyboard/Keyboard';
import KeyboardSlice from './KeyboardSlice/KeyboardSlice';

const AllKeyboards = ({ selectedScale, startingNote, selectedOctave, nextOctave, waveform, oscillator, duration }) => {
  return (
    <div>

      <Keyboard
        startingNote={startingNote}
        selectedOctave={selectedOctave}
        waveform={waveform}
        oscillator={oscillator}
        duration={duration}
      />

      <KeyboardSlice
        selectedScale={selectedScale}
        startingNote={startingNote}
        selectedOctave={selectedOctave}
        nextOctave={nextOctave}
        waveform={waveform}
        oscillator={oscillator}
        duration={duration}
      />

    </div>
  )
}

export default AllKeyboards;
