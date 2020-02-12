import React from 'react';

const NoteDisplay = ({ notesPlayed }) => {
  return (
    <div className="note-display">Notes played: {notesPlayed.join('-')}</div>
  );
};

export default NoteDisplay;
