import React from 'react'
import { synthSlice } from './synthSlice'
import Scales from '../../Scales/Scales'

class PlayButton extends React.Component {
  renderPlayButton = (noteValue, newStart, lastPoint) => {
    const { waveform, oscillator, selectedOctave, nextOctave } = this.props;
    const noteArrays = [newStart, lastPoint]
    synthSlice.playNote(noteArrays, newStart, lastPoint, waveform, oscillator, selectedOctave, nextOctave)
    synthSlice.stopNote(noteArrays, newStart, lastPoint)
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
