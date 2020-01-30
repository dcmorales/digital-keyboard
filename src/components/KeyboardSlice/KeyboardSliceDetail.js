import React from 'react';
import SelectedKeyboardSlice from './SelectedKeyboardSlice';
import ScaleNotes from '../ScaleNotes/ScaleNotes';

const KeyboardSliceDetail = ({
  note,
  notesDefined,
  repeatx,
  noteLength,
  bpm,
  getMaxBeats,
}) => {
  return (
    <div>
      <SelectedKeyboardSlice
        noteValue={note.value}
        notesDefined={notesDefined}
      />

      <ScaleNotes
        noteValue={note.value}
        notesDefined={notesDefined}
        getMaxBeats={getMaxBeats}
        repeatx={repeatx}
        noteLength={noteLength}
        bpm={bpm}
      />
    </div>
  );
};

export default KeyboardSliceDetail;
