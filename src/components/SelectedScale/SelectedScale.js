import React from 'react';

import PlayButton from './PlayButton';
import NoteDisplay from './NoteDisplay';

class SelectedScale extends React.Component {
  state = {
    notesPlayed: [],
  };

  getNotesPlayed = notesPlayed => {
    this.setState({ notesPlayed: notesPlayed });
  };

  render() {
    return (
      <div>
        <PlayButton
          noteValue={this.props.noteValue}
          getNotesPlayed={this.getNotesPlayed}
        />
        <NoteDisplay notesPlayed={this.state.notesPlayed} />
      </div>
    );
  }
}

export default SelectedScale;
