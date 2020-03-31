import React from 'react';

import SelectionContext from '../../context/SelectionContext';
import { noteValues } from '../../values/noteValues';
import SelectedKeyboardSlice from './SelectedKeyboardSlice/SelectedKeyboardSlice';
import SelectedScaleNotes from './SelectedScaleNotes/SelectedScaleNotes';

class KeyboardValuesSelected extends React.Component {
  static contextType = SelectionContext;

  state = {
    noteValues: noteValues,
    notesDefined: noteValues[this.context.selectedOctave].map(
      note => note.note
    ),
  };

  renderKeyboardSlice = () => {
    const { noteValues, notesDefined } = this.state;
    const { selectedKey, selectedOctave, selectedScale } = this.context;
    const startingNote = selectedKey;
    return (
      <div>
        {noteValues[selectedOctave]
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
                <SelectedScaleNotes
                  noteValue={note.value}
                  selectedScale={selectedScale}
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

export default KeyboardValuesSelected;
