import React from 'react';
import FiveKeys from './FiveKeys'
import TwoKeys from './TwoKeys';

const Octave = ({ octNum, waveform, oscillator }) => {
  return(
    <div className='octave-container'>

      <FiveKeys
        note1='C' note2='Db' note3='D'
        note4='Eb' note5='E'
        waveform={waveform} oscillator={oscillator}
        octave={octNum}
      />

      <div className='two-keys-container'>
        <TwoKeys
          note1='F'  note2='Gb'
          waveform={waveform} oscillator={oscillator}
          octave={octNum}
        />
      </div>

      <FiveKeys
        note1='G' note2='Ab' note3='A'
        note4='Bb' note5='B'
        waveform={waveform} oscillator={oscillator}
        octave={octNum}
      />

    </div>
  );
}

export default Octave;
