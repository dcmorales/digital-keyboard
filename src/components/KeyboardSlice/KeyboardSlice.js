import React from 'react';
import SelectionContext from '../../contexts/SelectionContext';
import KeyboardSliceDetail from './KeyboardSliceDetail';
import { noteValues } from '../../values/noteValues';

class KeyboardSlice extends React.Component {
  static contextType = SelectionContext;

  state = {
    noteValues: noteValues,
    notesDefined: noteValues[this.props.selectedOctave].map(note => note.note),
  };

  renderKeyboardSlice = () => {
    const { noteValues, notesDefined } = this.state;
    const startingNote = this.context.selectedKey;
    const {
      selectedOctave,
      nextOctave,
      waveform,
      oscillator,
      order,
      totalBeats,
      repeatx,
      noteLength,
      bpm,
    } = this.props;
    return (
      <div>
        {noteValues[selectedOctave]
          .filter(noteInfo => {
            return noteInfo.note === startingNote;
          })
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
                  order={order}
                  totalBeats={totalBeats}
                  getMaxBeats={this.props.getMaxBeats}
                  repeatx={repeatx}
                  noteLength={noteLength}
                  bpm={bpm}
                />
              </div>
            );
          })}
      </div>
    );
  };

  render() {
    return <div>{this.renderKeyboardSlice()}</div>;
  }
}

export default KeyboardSlice;
