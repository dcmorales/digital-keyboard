import React from 'react';

import HighLightScale from './HighlightScale';
import PlayButton from './PlayButton';
import NoteDisplay from './NoteDisplay';

class SelectedScaleNotes extends React.Component {
  state = {
    notesPlayed: [],
  };

  updateNotesDisplay = ({ sliceOrder, order, totalBeats, noteArrays }) => {
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
      <div className="selected-scale-notes">
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
