import React from 'react';

import Key from './Key';

const Octave = ({ octNum }) => {
  return (
    <div className="octave-container">
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
