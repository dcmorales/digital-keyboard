import { playScale } from './playScale';

export const updateScale = {
  handleNoteShuffle(updateInfo) {
    const { totalBeats, notesArray } = updateInfo;
    const shuffleNotes = [notesArray];
    shuffleNotes.forEach((shuffleSlice) => {
      for (let i = shuffleSlice.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffleSlice[i], shuffleSlice[j]] = [shuffleSlice[j], shuffleSlice[i]];
      }
    });
    const fragmentSlice = notesArray.slice(0, totalBeats);
    updateInfo.fragmentSlice = fragmentSlice;
    this.handleTotalBeatChange(updateInfo);
  },

  handleTotalBeatChange(updateInfo) {
    const { repeatx, fragmentSlice } = updateInfo;
    var repeatFragment = [fragmentSlice];
    if (repeatx !== 0) {
      for (var i = 0; i < repeatx; i++) {
        repeatFragment.push(fragmentSlice);
      }
    }
    const newUpdateInfo = Object.values(updateInfo);
    newUpdateInfo.splice(0, 1, repeatFragment.flat());
    this.handleNewScaleNotes(newUpdateInfo);
  },

  handleNewScaleNotes(updateInfo) {
    const updateInfoArray = Object.values(updateInfo);
    playScale.playNote(updateInfoArray);
    playScale.stopNote(updateInfoArray);
  },
};
