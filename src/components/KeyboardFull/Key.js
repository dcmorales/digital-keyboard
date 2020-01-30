import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';
import { synth } from '../../utils/synth';

class Key extends React.Component {
  static contextType = SelectionContext;

  playNote = () => {
    const { noteFull, octave } = this.props;
    synth.play(
      noteFull,
      this.context.waveform,
      this.context.oscillator,
      octave
    );
  };

  holdNote = () => {
    synth.noteOff();
  };

  render() {
    const { color, noteFull, keyboard } = this.props;
    return (
      <button
        className={`${color} key`}
        onMouseDown={this.playNote}
        onMouseUp={this.holdNote}
      >
        <div
          className={`${noteFull} note ${keyboard}`}
          id={`${noteFull} ${keyboard}`}
        >
          {noteFull}
        </div>
      </button>
    );
  }
}

export default Key;
