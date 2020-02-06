import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';
import { noteValues } from '../../values/noteValues';
import HighLightScale from '../SelectedScaleNotes/HighlightScale';
import PlayScale from '../SelectedScaleNotes/PlayScale';
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
                <HighLightScale noteValue={note.value} />
                <PlayScale
                  selectedScale={selectedScale}
                  noteValue={note.value}
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
