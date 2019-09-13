import { noteValues } from './noteValues'

export const synth = {
  audioContext:  new AudioContext(),
  oscillators: {},

  noteOff() {
    this.oscillators.stop();
  },

  play(noteFull, waveform, oscillator, octave, note) {
    const pitch = noteValues[octave].filter(info => info.note === note).map(note => note.frequency)[0];
      this.oscillators = this.audioContext.createOscillator();
      this.oscillators.type = `${waveform}`;
      this.oscillators.frequency.value = pitch;
      this.oscillators.connect(this.audioContext.destination);
      switch (oscillator) {
        case 'osc1':
          this.oscillators.detune.value = -15;
          break;
        case 'osc2':
          this.oscillators.detune.value = 15;
          break;
        case 'bass':
          this.oscillators.frequency.value = pitch/2;
          this.oscillators.type = `${waveform}`;
          break;

        // no default
      }
      this.oscillators.start();
  }
};
