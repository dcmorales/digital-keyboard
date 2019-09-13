import React from 'react'
import { synth } from './synth'

class Key extends React.Component {
  playNote = () => {
    const { noteFull, waveform, oscillator, octave, note } = this.props;
    synth.play(noteFull, waveform, oscillator, octave, note)
  }

  holdNote = () => {
    const { noteFull, duration } = this.props;
    setTimeout(() => {
      synth.noteOff(noteFull);
    }, duration)
  }

  render(){
    const { color, noteFull } = this.props
    return (
      <button
        className={color}
        onMouseDown={this.playNote}
        onMouseUp={this.holdNote}
      >
        <div
          className={`note ${noteFull}`}
          id={noteFull}
        >
          {noteFull}
        </div>
      </button>
    );
  }
};

export default Key;
