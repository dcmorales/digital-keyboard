import { synth } from './synth';
import { highlight } from './highlight';

export const playScale = {
  stopNote(updateInfo) {
    const [sliceOrder, , , , , bpm, noteLength] = updateInfo;
    var offsetPlus = 0;
    var bpmToMs = parseInt(60000 / bpm / (noteLength / 4), 10);
    sliceOrder.forEach((noteFull) => {
      setTimeout(() => {
        synth.noteOff(noteFull);
      }, offsetPlus);
      offsetPlus += bpmToMs;
    });
  },

  playNote(updateInfo) {
    const [sliceOrder, , waveform, oscillator, , bpm, noteLength] = updateInfo;
    var offsetPlus = 0;
    var bpmToMs = parseInt(60000 / bpm / (noteLength / 4), 10);
    sliceOrder.forEach((noteFull) => {
      const octave = noteFull.includes('b') ? noteFull[2] : noteFull[1];
      setTimeout(() => {
        synth.play(noteFull, waveform, oscillator, octave);
        highlight.singleNote(noteFull, bpmToMs);
      }, offsetPlus);
      offsetPlus += bpmToMs;
    });
    this.disableButtons((offsetPlus += bpmToMs));
    console.log(sliceOrder);
  },

  disableButtons(offset) {
    const selectionsArray = Array.from(
      document.getElementsByClassName('selection-detail__dropdown-menu')
    );
    const keysArray = Array.from(document.getElementsByClassName('key'));
    const buttons = selectionsArray.concat(keysArray);
    document.getElementById('play-button').setAttribute('disabled', 'disbaled');
    buttons.map((button) => button.setAttribute('disabled', 'disabled'));
    setTimeout(() => {
      document.getElementById('play-button').removeAttribute('disabled');
      buttons.map((button) => button.removeAttribute('disabled'));
    }, offset);
  },
};
