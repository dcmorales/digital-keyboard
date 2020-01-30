import React from 'react';
import Keyboard from './Keyboard/Keyboard';
import KeyboardSlice from './KeyboardSlice/KeyboardSlice';

const AllKeyboards = () => {
  return (
    <div>
      <Keyboard />

      <KeyboardSlice />
    </div>
  );
};

export default AllKeyboards;
