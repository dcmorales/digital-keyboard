import React from 'react';
import SliceSection from './SliceSection'

class SelectedKeyboardSlice extends React.Component {
  renderSelectedKeys() {
    const { notesDefined, selectedOctave, nextOctave, waveform, oscillator, duration, noteValue } = this.props;
    const newPoint = notesDefined.slice(noteValue)
    const oldPoint = notesDefined.slice(0, noteValue)
    //const newNotesArray = newStartingPoint.concat(oldStartingPoint)
    const lastNote = newPoint.slice(0, 1)
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
          notesDefinedSlice={oldPoint}
          waveform={waveform}
          oscillator={oscillator}
          duration={duration}
          octave={nextOctave}
        />

        <SliceSection
          notesDefinedSlice={lastNote}
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
