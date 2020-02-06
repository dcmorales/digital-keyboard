import { scale } from './scale';

export const highlight = {
  allScaleNotes(scaleInfo) {
    const scaleNotes = scale
      .renderNotes(scaleInfo)[0]
      .concat(scale.renderNotes(scaleInfo)[1]);
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
    const sliceNotes = scale.renderNotes(scaleInfo)[2];
    sliceNotes.map(noteFull =>
      document.getElementById(`${noteFull} slice`).setAttribute('class', 'note')
    );
    for (var i = 1; i < 8; i++) {
      this.getAllNotes(i, scaleInfo);
    }
  },

  getAllNotes(i, scaleInfo) {
    const allNotes = scale.renderNotes(scaleInfo)[3];
    allNotes.map(noteFull =>
      document
        .getElementById(`${noteFull}${i} full`)
        .setAttribute('class', 'note')
    );
  },
};
