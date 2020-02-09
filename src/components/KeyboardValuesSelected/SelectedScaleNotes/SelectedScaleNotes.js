import React from 'react';

import HighLightScale from './HighlightScale';
import PlayButton from './PlayButton';
import NoteDisplay from './NoteDisplay';

class SelectedScaleNotes extends React.Component {
  state = {
    notesPlayed: [],
  };

  updateNotesDisplay = updateInfo => {
    const sliceOrder = updateInfo[0];
    const order = updateInfo[1];
    const totalBeats = updateInfo[4];
    const noteArrays = updateInfo[10];
    const noteArrayFragment = [noteArrays[0].concat(noteArrays[1])];
    const fragmentSlice = [noteArrayFragment[0].slice(0, totalBeats)];
    const notesPlayedArray =
      order === 'ascending'
        ? sliceOrder[0].concat(sliceOrder[1])
        : order === 'descending'
        ? sliceOrder[1].concat(sliceOrder[0]).reverse()
        : //order !== ascending && !== descending, order === 'random'
          fragmentSlice[0];
    this.setState({ notesPlayed: notesPlayedArray });
  };

  render() {
    const { noteValue, selectedScale } = this.props;
    return (
      <div>
        <HighLightScale noteValue={noteValue} />
        <PlayButton
          noteValue={noteValue}
          selectedScale={selectedScale}
          updateNotesDisplay={this.updateNotesDisplay}
        />
        <NoteDisplay notesPlayed={this.state.notesPlayed} />
      </div>
    );
  }
}

export default SelectedScaleNotes;
