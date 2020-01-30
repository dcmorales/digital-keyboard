import React from 'react';
import SelectionContext from '../../contexts/SelectionContext';
import { noteValues } from '../../values/noteValues';
import ScaleNotes from '../ScaleNotes/ScaleNotes';
import SelectedKeyboardSlice from './SelectedKeyboardSlice';

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
    return (
      <div>
        {noteValues[this.context.selectedOctave]
          .filter(noteInfo => {
            return noteInfo.note === startingNote;
          })
          .map((note, i) => {
            return (
              <div key={i}>
                <SelectedKeyboardSlice
                  noteValue={note.value}
                  notesDefined={notesDefined}
                />
                <ScaleNotes
                  noteValue={note.value}
                  notesDefined={notesDefined}
                />{' '}
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
