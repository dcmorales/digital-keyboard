import React from 'react';
import SelectionContext from '../../contexts/SelectionContext';
import KeyboardSliceDetail from './KeyboardSliceDetail';
import { noteValues } from '../../values/noteValues';

class KeyboardSlice extends React.Component {
  static contextType = SelectionContext;

  state = {
    noteValues: noteValues,
    notesDefined: noteValues[this.context.selectedOctave].map(
      note => note.note
    ),
  };

  renderKeyboardSlice = () => {
    const { noteValues, notesDefined } = this.state;
    const startingNote = this.context.selectedKey;
    const { noteLength } = this.props;
    return (
      <div>
        {noteValues[this.context.selectedOctave]
          .filter(noteInfo => {
            return noteInfo.note === startingNote;
          })
          .map((note, i) => {
            return (
              <div key={i}>
                <KeyboardSliceDetail
                  note={note}
                  notesDefined={notesDefined}
                  noteLength={noteLength}
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
