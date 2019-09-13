import React from 'react'
import KeyboardSliceDetail from './KeyboardSliceDetail'
import { noteValues } from '../Keyboard/noteValues'

class KeyboardSlice extends React.Component {
  state = {
    noteValues: noteValues,
    notesDefined: noteValues[this.props.selectedOctave].map(note => note.note),
  }

  renderKeyboardSlice = () => {
    const { noteValues, notesDefined } = this.state;
    const { startingNote, selectedOctave, nextOctave, waveform, oscillator, duration } = this.props;
    return (
      <div>
        {noteValues[selectedOctave]
          .filter(noteInfo => {
            return noteInfo.note === startingNote})
            .map((note, i) => {
              return (
                <div key={i}>
                  <KeyboardSliceDetail
                    note={note}
                    notesDefined={notesDefined}
                    waveform={waveform}
                    oscillator={oscillator}
                    selectedOctave={selectedOctave}
                    nextOctave={nextOctave}
                    duration={duration}
                  />
                </div>
              );
            })
        }
      </div>
    )
  }

  render() {
    return <div>{this.renderKeyboardSlice()}</div>
  }
}

export default KeyboardSlice;
