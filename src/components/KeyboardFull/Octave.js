import React from 'react';
import FiveKeys from './FiveKeys';
import TwoKeys from './TwoKeys';

const Octave = ({ octNum }) => {
  return (
    <div className="octave-container">
      <FiveKeys
        note1="C"
        note2="Db"
        note3="D"
        note4="Eb"
        note5="E"
        octave={octNum}
      />

      <TwoKeys note1="F" note2="Gb" octave={octNum} />

      <FiveKeys
        note1="G"
        note2="Ab"
        note3="A"
        note4="Bb"
        note5="B"
        octave={octNum}
      />
    </div>
  );
};

export default Octave;
