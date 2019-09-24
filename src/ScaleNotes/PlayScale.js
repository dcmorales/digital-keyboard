import React from 'react'
import { synthSlice } from '../AllKeyboards/KeyboardSlice/synthSlice'

class PlayScale extends React.Component {
  state = {
    notesPlayed: []
  }

  renderPlayButton = (newStart, lastPoint) => {
    const { order, totalBeats } = this.props;
    const noteArrays = [newStart, lastPoint]
    const sliceOrder = order === 'descending' ? noteArrays.reverse() : noteArrays
    if (order !== 'random') {
      this.renderPlayScales(newStart, sliceOrder)
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
        const repeatFragment =
          [fragmentSlice[0], fragmentSlice[0], fragmentSlice[0], fragmentSlice[0], fragmentSlice[0], fragmentSlice[0]]
        this.renderPlayScales(newStart, repeatFragment)
      } else {
        this.renderPlayScales(newStart, sliceOrder)
    }}
  }

  renderPlayScales(newStart, sliceOrder) {
    const { order, waveform, oscillator, totalBeats, offset } = this.props;
    synthSlice.playNote(sliceOrder, order, newStart, waveform, oscillator, totalBeats, offset)
    synthSlice.stopNote(sliceOrder, order, offset)
    this.displayNotes(sliceOrder[0].concat(sliceOrder[1]))
  }

  displayNotes(notesPlayed) {
    this.setState({
      notesPlayed: notesPlayed
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.renderPlayButton(this.props.renderScale()[0], this.props.renderScale()[1])}>
          Play keys
        </button>
        <div className='notes-played'>Notes that were played: {this.state.notesPlayed.join('-')}</div>
      </div>
    )
  }
}

export default PlayScale;
