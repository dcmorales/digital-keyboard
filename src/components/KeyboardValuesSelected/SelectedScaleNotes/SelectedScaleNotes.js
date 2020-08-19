import React from 'react';

import HighLightScale from './HighlightScale';
import PlayButton from './PlayButton';
import NoteDisplay from './NoteDisplay';

class SelectedScaleNotes extends React.Component {
  state = { notesPlayed: [] };

  updateNotesDisplay = ({ sliceOrder, order, totalBeats, notesArray }) => {
    const notesPlayedArray = notesArray.slice(0, totalBeats);
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
