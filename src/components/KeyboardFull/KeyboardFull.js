import React from 'react';

import Octave from './Octave';

const KeyboardFull = () => {
  return (
    <div className="keyboard-container">
      <Octave octNum="1" />

      <Octave octNum="2" />

      <Octave octNum="3" />

      <Octave octNum="4" />

      <Octave octNum="5" />

      <Octave octNum="6" />

      <Octave octNum="7" />
    </div>
  );
};

export default KeyboardFull;
