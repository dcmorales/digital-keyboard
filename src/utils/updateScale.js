import { playScale } from './playScale';

export const updateScale = {
  handleNoteShuffle(updateInfo) {
    const { totalBeats, newStart, lastPoint, noteArrays } = updateInfo;
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
      updateInfo.fragmentSlice = fragmentSlice;
      this.handleTotalBeatChange(updateInfo);
    }
  },

  handleTotalBeatChange(updateInfo) {
    const { repeatx, fragmentSlice } = updateInfo;
    var repeatFragment = [fragmentSlice[0]];
    if (repeatx !== 0) {
      for (var i = 0; i < repeatx; i++) {
        repeatFragment.push(fragmentSlice[0]);
      }
    }
    const newUpdateInfo = Object.values(updateInfo);
    newUpdateInfo.splice(0, 1, repeatFragment);
    this.handleNewScaleNotes(newUpdateInfo);
  },

  handleNewScaleNotes(updateInfo) {
    const updateInfoArray = Object.values(updateInfo);
    playScale.playNote(updateInfoArray);
    playScale.stopNote(updateInfoArray);
  },
};
