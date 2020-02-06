import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';
import { noteValues } from '../../values/noteValues';
import SelectedKeyboardSlice from './SelectedKeyboardSlice/SelectedKeyboardSlice';
import SelectedScale from './SelectedScale/SelectedScale';

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
          .map(note => {
            return (
              <div key={note.frequency}>
                <SelectedKeyboardSlice
                  noteValue={note.value}
                  notesDefined={notesDefined}
                />
                <SelectedScale
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
