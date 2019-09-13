import React from 'react';
import TwoKeys from './TwoKeys';
import Key from './Key';

const FiveKeys= ({note1, note2, note3, note4, note5, waveform, oscillator, duration, octave }) => {
  return (
    <div className='five-keys-container'>

      <TwoKeys
        note1={note1} note2={note2}
        waveform={waveform} oscillator={oscillator}
        duration={duration} octave={octave}
      />

      <TwoKeys
        note1={note3} note2={note4}
        waveform={waveform} oscillator={oscillator}
        duration={duration} octave={octave}
      />

      <div className='keys'>
        <Key
          note={note5} noteFull={`${note5}${octave}`}
          waveform={waveform} oscillator={oscillator}
          duration={duration} octave={octave}
          color='white'
        />
      </div>

    </div>
  );
}

export default FiveKeys;
