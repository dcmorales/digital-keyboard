import React from 'react';
import SelectedKeyboardSlice from './SelectedKeyboardSlice';
import ScaleNotes from '../ScaleNotes/ScaleNotes';

const KeyboardSliceDetail = ({ note, notesDefined }) => {
  return (
    <div>
      <SelectedKeyboardSlice
        noteValue={note.value}
        notesDefined={notesDefined}
      />

      <ScaleNotes noteValue={note.value} notesDefined={notesDefined} />
    </div>
  );
};

export default KeyboardSliceDetail;
