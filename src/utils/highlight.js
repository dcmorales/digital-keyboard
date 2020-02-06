import { defineScale } from './defineScale';

export const highlight = {
  allScaleNotes(scaleInfo) {
    const scaleNotes = defineScale
      .renderNotes(scaleInfo)[0]
      .concat(defineScale.renderNotes(scaleInfo)[1]);
    scaleNotes.map(noteFull =>
      document
        .getElementById(`${noteFull} full`)
        .setAttribute('class', `${noteFull} scale-note`)
    );
    scaleNotes.map(noteFull =>
      document
        .getElementById(`${noteFull} slice`)
        .setAttribute('class', `${noteFull} scale-note`)
    );
  },

  clearScaleNotes(scaleInfo) {
    const sliceNotes = defineScale.renderNotes(scaleInfo)[2];
    sliceNotes.map(noteFull =>
      document.getElementById(`${noteFull} slice`).setAttribute('class', 'note')
    );
    for (var i = 1; i < 8; i++) {
      this.getAllNotes(i, scaleInfo);
    }
  },

  getAllNotes(i, scaleInfo) {
    const allNotes = defineScale.renderNotes(scaleInfo)[3];
    allNotes.map(noteFull =>
      document
        .getElementById(`${noteFull}${i} full`)
        .setAttribute('class', 'note')
    );
  },

  singleNote(noteFull) {
    setTimeout(() => {
      this.handleNoteHighlight(noteFull, 'scale-note');
    }, 450);
    this.handleNoteHighlight(noteFull, 'active');
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
