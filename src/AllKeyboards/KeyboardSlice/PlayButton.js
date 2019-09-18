import React from 'react'
import { synthSlice } from './synthSlice'
import Scales from '../../Scales/Scales'

class PlayButton extends React.Component {
  renderPlayButton = (noteValue, newStart, lastPoint) => {
    const { order, totalBeats } = this.props;
    const noteArrays = [newStart, lastPoint]
    const sliceOrder = order === 'descending' ? noteArrays.reverse() : noteArrays
    if (order !== 'random') {
      this.renderPlay(newStart, sliceOrder)
    } else {
      const shuffleNotes = [newStart, lastPoint]
      shuffleNotes.forEach(shuffleSlice => {
        for (let i = shuffleSlice.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [shuffleSlice[i], shuffleSlice[j]] = [shuffleSlice[j], shuffleSlice[i]]
        }
      })
      if (totalBeats !== 'all') {
        const noteArrayFragment = [noteArrays[0].concat(noteArrays[1])]
        const fragmentSlice = [noteArrayFragment[0].slice(0, totalBeats)]
        const repeatFragment = [fragmentSlice[0], fragmentSlice[0], fragmentSlice[0], fragmentSlice[0]]
        this.renderPlay(newStart, repeatFragment)
      } else {
        this.renderPlay(newStart, sliceOrder)
    }}
  }

  renderPlay(newStart, sliceOrder) {
    const { order, waveform, oscillator, selectedOctave, nextOctave, totalBeats } = this.props;
    synthSlice.playNote(sliceOrder, order, newStart, waveform, oscillator, selectedOctave, nextOctave, totalBeats)
    synthSlice.stopNote(sliceOrder, order)
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
