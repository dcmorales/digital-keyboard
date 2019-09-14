import React from 'react'
import { synthSlice } from './synthSlice'
import Scales from '../../Scales/Scales'

class PlayButton extends React.Component {
  renderPlayButton = (noteValue, newStart, oldStart, lastNote) => {
    const { waveform, oscillator, selectedOctave, nextOctave } = this.props;
    const noteArrays = [newStart, oldStart, lastNote]
    synthSlice.playNote(noteArrays, newStart, oldStart, lastNote, waveform, oscillator, selectedOctave, nextOctave)
    synthSlice.stopNote(noteArrays, newStart, oldStart, lastNote)
  }

  render() {
    const { note, selectedScale, notesDefined } = this.props;
    return (
      <Scales
        noteValue={note.value}
        selectedScale={selectedScale}
        notesDefined={notesDefined}
        renderPlayButton={this.renderPlayButton}
      />
    )
  }
}

export default PlayButton;
