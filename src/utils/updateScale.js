import { playScale } from './playScale';

export const updateScale = {
  handleNoteShuffle(updateInfo) {
    const totalBeats = updateInfo[4];
    const newStart = updateInfo[8];
    const lastPoint = updateInfo[9];
    const noteArrays = updateInfo[10];
    const shuffleNotes = [newStart, lastPoint];
    shuffleNotes.forEach(shuffleSlice => {
      for (let i = shuffleSlice.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffleSlice[i], shuffleSlice[j]] = [shuffleSlice[j], shuffleSlice[i]];
      }
    });
    if (totalBeats === '') {
      this.handleNewScaleNotes(updateInfo);
    } else {
      const noteArrayFragment = [noteArrays[0].concat(noteArrays[1])];
      const fragmentSlice = [noteArrayFragment[0].slice(0, totalBeats)];
      this.handleTotalBeatChange(updateInfo.concat([fragmentSlice]));
    }
  },

  handleTotalBeatChange(updateInfo) {
    const repeatx = updateInfo[7];
    const fragmentSlice = updateInfo[11];
    var repeatFragment = [fragmentSlice[0]];
    if (repeatx !== 0) {
      for (var i = 0; i < repeatx; i++) {
        repeatFragment.push(fragmentSlice[0]);
      }
    }
    updateInfo.splice(0, 1, repeatFragment);
    this.handleNewScaleNotes(updateInfo);
  },

  handleNewScaleNotes(updateInfo) {
    playScale.playNote(updateInfo);
    playScale.stopNote(updateInfo);
  },
};
