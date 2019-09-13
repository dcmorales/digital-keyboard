import React from 'react'
import { synthSlice } from './synthSlice'

class PlayButton extends React.Component {
  renderScale(noteValue) {
    const { notesDefined , waveform, oscillator, selectedOctave, nextOctave } = this.props;
    const newStartingPoint = notesDefined.slice(noteValue)
    const oldStartingPoint = notesDefined.slice(0, noteValue)
    const lastNote = newStartingPoint.slice(0, 1)
    //const newNotesArray = newStartingPoint.concat(oldStartingPoint)
    const noteArrays = [newStartingPoint, oldStartingPoint, lastNote]
    synthSlice.playNote(
      noteArrays, newStartingPoint, oldStartingPoint, lastNote, waveform, oscillator, selectedOctave, nextOctave)
    synthSlice.stopNote(noteArrays, newStartingPoint, oldStartingPoint, lastNote)
  }

  render() {
    const { note } = this.props;
    return (
      <button onClick={() => this.renderScale(note.value)}>
        Play selected keys
      </button>
    )
  }
}

export default PlayButton;
