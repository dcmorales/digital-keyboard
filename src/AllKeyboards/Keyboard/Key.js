import React from 'react'
import { synth } from './synth'
import { synthSlice } from '../KeyboardSlice/synthSlice'

class Key extends React.Component {
  playNote = () => {
    const { noteFull, waveform, oscillator, octave } = this.props;
    synth.play(noteFull, waveform, oscillator, octave)
  }

  holdNote = () => {
    synth.noteOff();
  }

  render(){
    const { color, noteFull, keyboard } = this.props
    return (
      <button
        className={color}
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
};

export default Key;
