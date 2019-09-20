import React from 'react';
import SliceSection from './SliceSection'

class SelectedKeyboardSlice extends React.Component {
  renderSelectedKeys() {
    const { notesDefined, selectedOctave, nextOctave, waveform, oscillator, duration, noteValue } = this.props;
    const newPoint = notesDefined.slice(noteValue).map(point => point + selectedOctave)
    const oldPoint = notesDefined.slice(0, noteValue)
    const lastNote = notesDefined.slice(noteValue)[0]
    const lastPoint = oldPoint.concat(lastNote).map(point => point + nextOctave)
    return (
      <div className='octave-container'>

        <SliceSection
          notesDefinedSlice={newPoint}
          waveform={waveform}
          oscillator={oscillator}
          duration={duration}
        />

        <SliceSection
          notesDefinedSlice={lastPoint}
          waveform={waveform}
          oscillator={oscillator}
          duration={duration}
        />

      </div>
    )
  }

  render() {
    return <div className='keyboard-container'>{this.renderSelectedKeys()}</div>
  }
}

export default SelectedKeyboardSlice;
