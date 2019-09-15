import React from 'react';
import SliceSection from './SliceSection'

class SelectedKeyboardSlice extends React.Component {
  renderSelectedKeys() {
    const { notesDefined, selectedOctave, nextOctave, waveform, oscillator, duration, noteValue } = this.props;
    const newPoint = notesDefined.slice(noteValue)
    const oldPoint = notesDefined.slice(0, noteValue)
    const lastNote = newPoint.slice(0, 1)
    const lastPoint= oldPoint.concat(lastNote)
    return (
      <div className='octave-container'>

        <SliceSection
          notesDefinedSlice={newPoint}
          waveform={waveform}
          oscillator={oscillator}
          duration={duration}
          octave={selectedOctave}
        />

        <SliceSection
          notesDefinedSlice={lastPoint}
          waveform={waveform}
          oscillator={oscillator}
          duration={duration}
          octave={nextOctave}
        />

      </div>
    )
  }

  render() {
    return <div className='keyboard-container'>{this.renderSelectedKeys()}</div>
  }
}

export default SelectedKeyboardSlice;
