import React from 'react';

const NoteDisplay = ({ notesPlayed }) => {
  return (
    <div className="notes-played">
      Notes that were played: {notesPlayed.join('-')}
    </div>
  );
};

export default NoteDisplay;
