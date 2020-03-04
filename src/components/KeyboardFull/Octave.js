import React from 'react';

import FiveKeys from './FiveKeys';
import TwoKeys from './TwoKeys';
import Key from './Key';

const Octave = ({ octNum }) => {
  return (
    <div className="octave-container">
      {/* <FiveKeys
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
      /> */}
      <Key
        noteFull={`C${octNum}`}
        octave={octNum}
        color="white"
        keyboard="full"
      />
      <Key
        noteFull={`Db${octNum}`}
        octave={octNum}
        color="black"
        keyboard="full"
      />
      <Key
        noteFull={`D${octNum}`}
        octave={octNum}
        color="white"
        keyboard="full"
      />
      <Key
        noteFull={`Eb${octNum}`}
        octave={octNum}
        color="black"
        keyboard="full"
      />
      <Key
        noteFull={`E${octNum}`}
        octave={octNum}
        color="white"
        keyboard="full"
      />
      <Key
        noteFull={`F${octNum}`}
        octave={octNum}
        color="white"
        keyboard="full"
      />
      <Key
        noteFull={`Gb${octNum}`}
        octave={octNum}
        color="black"
        keyboard="full"
      />
      <Key
        noteFull={`G${octNum}`}
        octave={octNum}
        color="white"
        keyboard="full"
      />
      <Key
        noteFull={`Ab${octNum}`}
        octave={octNum}
        color="black"
        keyboard="full"
      />
      <Key
        noteFull={`A${octNum}`}
        octave={octNum}
        color="white"
        keyboard="full"
      />
      <Key
        noteFull={`Bb${octNum}`}
        octave={octNum}
        color="black"
        keyboard="full"
      />
      <Key
        noteFull={`B${octNum}`}
        octave={octNum}
        color="white"
        keyboard="full"
      />
    </div>
  );
};

export default Octave;
