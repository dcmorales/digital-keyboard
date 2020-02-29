import React from 'react';

const NoteDisplay = ({ notesPlayed }) => {
  return (
    <div className="note-display">
      <div className="note-display__label">Notes played:</div>
      <div className="note-display__list">{notesPlayed.join('-')}</div>
    </div>
  );
};

export default NoteDisplay;
