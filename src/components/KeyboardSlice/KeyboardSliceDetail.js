import React from 'react';
import SelectedKeyboardSlice from './SelectedKeyboardSlice';
import ScaleNotes from '../ScaleNotes/ScaleNotes';

const KeyboardSliceDetail = ({ note, notesDefined, noteLength, bpm }) => {
  return (
    <div>
      <SelectedKeyboardSlice
        noteValue={note.value}
        notesDefined={notesDefined}
      />

      <ScaleNotes
        noteValue={note.value}
        notesDefined={notesDefined}
        noteLength={noteLength}
        bpm={bpm}
      />
    </div>
  );
};

export default KeyboardSliceDetail;
