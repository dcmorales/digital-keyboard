import React from 'react';
import SelectionContext from '../../contexts/SelectionContext';
import Octave from './Octave';

class Keyboard extends React.Component {
  static contextType = SelectionContext;

  render() {
    return (
      <div className="keyboard-container">
        <Octave
          octNum="1"
          waveform={this.context.waveform}
          oscillator={this.context.oscillator}
        />

        <Octave
          octNum="2"
          waveform={this.context.waveform}
          oscillator={this.context.oscillator}
        />

        <Octave
          octNum="3"
          waveform={this.context.waveform}
          oscillator={this.context.oscillator}
        />

        <Octave
          octNum="4"
          waveform={this.context.waveform}
          oscillator={this.context.oscillator}
        />

        <Octave
          octNum="5"
          waveform={this.context.waveform}
          oscillator={this.context.oscillator}
        />

        <Octave
          octNum="6"
          waveform={this.context.waveform}
          oscillator={this.context.oscillator}
        />

        <Octave
          octNum="7"
          waveform={this.context.waveform}
          oscillator={this.context.oscillator}
        />
      </div>
    );
  }
}

export default Keyboard;
