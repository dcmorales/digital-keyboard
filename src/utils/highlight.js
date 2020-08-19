import { defineScale } from './defineScale';

export const highlight = {
  clearScaleNotes(scaleInfo) {
    const sliceNotes = defineScale.renderNotes(scaleInfo)[2];
    sliceNotes.map((noteFull) =>
      document.getElementById(`${noteFull} slice`).setAttribute('class', 'note')
    );
    for (var i = 1; i < 8; i++) {
      this.getAllNotes(i, scaleInfo);
    }
  },

  getAllNotes(i, scaleInfo) {
    const allNotes = defineScale.renderNotes(scaleInfo)[3];
    allNotes.map((noteFull) =>
      document
        .getElementById(`${noteFull}${i} full`)
        .setAttribute('class', 'note')
    );
  },

  singleNote(noteFull, bpmToMs) {
    setTimeout(() => {
      this.handleNoteHighlight(noteFull, 'note__scale-note');
    }, bpmToMs);
    this.handleNoteHighlight(noteFull, 'note__active');
  },

  handleNoteHighlight(noteFull, otherClassName) {
    document
      .getElementById(`${noteFull} full`)
      .setAttribute('class', `${noteFull} ${otherClassName}`);
    document
      .getElementById(`${noteFull} slice`)
      .setAttribute('class', `${noteFull} ${otherClassName}`);
  },
};
