import React from 'react';

import HighLightScale from './HighlightScale';
import PlayButton from './PlayButton';
import NoteDisplay from './NoteDisplay';

class SelectedScaleNotes extends React.Component {
  state = {
    notesPlayed: [],
  };

  getNotesPlayed = notesPlayed => {
    this.setState({ notesPlayed: notesPlayed });
  };

  render() {
    const { noteValue, selectedScale } = this.props;
    return (
      <div>
        <HighLightScale noteValue={noteValue} />
        <PlayButton
          noteValue={noteValue}
          selectedScale={selectedScale}
          getNotesPlayed={this.getNotesPlayed}
        />
        <NoteDisplay notesPlayed={this.state.notesPlayed} />
      </div>
    );
  }
}

export default SelectedScaleNotes;
