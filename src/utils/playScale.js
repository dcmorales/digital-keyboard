import { synth } from './synth';
import { highlight } from './highlight';

export const playScale = {
  stopNote(updateInfo) {
    const sliceOrder = updateInfo[0];
    const order = updateInfo[1];
    const bpm = updateInfo[5];
    const noteLength = updateInfo[6];
    var offsetPlus = 250;
    var bpmToMs = parseInt(60000 / (bpm * (noteLength / 4)), 10);
    sliceOrder.forEach(notesDefinedSlice => {
      const noteOrder =
        order === 'descending'
          ? notesDefinedSlice.reverse()
          : notesDefinedSlice;
      noteOrder.forEach(noteFull => {
        setTimeout(() => {
          synth.noteOff(noteFull);
        }, offsetPlus);
        offsetPlus += bpmToMs;
      });
    });
  },

  playNote(updateInfo) {
    const sliceOrder = updateInfo[0];
    const order = updateInfo[1];
    const waveform = updateInfo[2];
    const oscillator = updateInfo[3];
    const bpm = updateInfo[5];
    const noteLength = updateInfo[6];
    var offsetPlus = 200;
    var bpmToMs = parseInt(60000 / (bpm * (noteLength / 4)), 10);
    sliceOrder.forEach(notesDefinedSlice => {
      const noteOrder =
        order === 'descending'
          ? notesDefinedSlice.reverse()
          : notesDefinedSlice;
      noteOrder.forEach(noteFull => {
        const octave = noteFull.includes('b') ? noteFull[2] : noteFull[1];
        setTimeout(() => {
          synth.play(noteFull, waveform, oscillator, octave);
          highlight.singleNote(noteFull);
        }, offsetPlus);
        offsetPlus += bpmToMs;
      });
    });
    this.disableButtons((offsetPlus += bpmToMs));
    console.log(sliceOrder[0].concat(sliceOrder[1]));
  },

  disableButtons(offset) {
    const selectionsArray = Array.from(
      document.getElementsByClassName('selections')
    );
    const keysArray = Array.from(document.getElementsByClassName('key'));
    const buttons = selectionsArray.concat(keysArray);
    document.getElementById('play-button').setAttribute('disabled', 'disbaled');
    buttons.map(button => button.setAttribute('disabled', 'disabled'));
    setTimeout(() => {
      document.getElementById('play-button').removeAttribute('disabled');
      buttons.map(button => button.removeAttribute('disabled'));
    }, offset);
  },
};
