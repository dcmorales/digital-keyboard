import { noteValues } from '../values/noteValues';

export const synth = {
  audioContext: new AudioContext(),
  oscillator: {},

  noteOff() {
    this.oscillator.stop(this.audioContext.currentTime);
  },

  play(noteFull, waveform, oscillator, octave) {
    const pitch = noteValues[octave]
      .filter(info => noteFull.includes(info.note))
      .map(note => note.frequency)[0];
    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.type = `${waveform}`;
    this.oscillator.frequency.value = pitch;
    this.oscillator.connect(this.audioContext.destination);
    if (waveform === 'sine' && oscillator === '') {
      this.oscillator.detune.value = 2200;
    } else {
      switch (oscillator) {
        case 'osc1':
          this.oscillator.detune.value = -50;
          break;
        case 'osc2':
          this.oscillator.detune.value = 50;
          break;
        case 'mid-bass':
          this.oscillator.frequency.value = (pitch + 50) / 2;
          this.oscillator.type = `${waveform}`;
          break;
        case 'bass':
          this.oscillator.frequency.value = pitch / 2;
          this.oscillator.type = `${waveform}`;
          break;

        // no default
      }
    }
    this.oscillator.start();
  },
};
