import React from 'react';
import TwoKeys from './TwoKeys';
import Key from './Key';

const FiveKeys= ({ note1, note2, note3, note4, note5, waveform, oscillator, octave }) => {
  return (
    <React.Fragment>

      <TwoKeys
        note1={note1} note2={note2}
        waveform={waveform} oscillator={oscillator}
        octave={octave}
      />

      <TwoKeys
        note1={note3} note2={note4}
        waveform={waveform} oscillator={oscillator}
        octave={octave}
      />

      <div className='keys'>
        <Key
          noteFull={`${note5}${octave}`}
          waveform={waveform} oscillator={oscillator}
          octave={octave}
          color='white'
          keyboard='full'
        />
      </div>

    </React.Fragment>
  );
}

export default FiveKeys;
