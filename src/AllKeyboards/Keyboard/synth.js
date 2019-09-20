import { noteValues } from './noteValues'

export const synth = {
  audioContext:  new AudioContext(),
  oscillators: {},

  noteOff() {
    this.oscillators.stop();
  },

  play(noteFull, waveform, oscillator, octave) {
    const pitch = noteValues[octave].filter(info => noteFull.includes(info.note)).map(note => note.frequency)[0];
      this.oscillators = this.audioContext.createOscillator();
      this.oscillators.type = `${waveform}`;
      this.oscillators.frequency.value = pitch;
      this.oscillators.connect(this.audioContext.destination);
      if (waveform === 'sine (adjusted)' && oscillator === '') {
            this.oscillators.detune.value = 2200;
            this.oscillators.type = 'sine'
      } else {
        switch (oscillator) {
          case 'osc1':
            this.oscillators.detune.value = -50;
            break;
          case 'osc2':
            this.oscillators.detune.value = 50;
            break;
          case 'mid-bass':
            this.oscillators.frequency.value = (pitch+50)/2;
            this.oscillators.type = `${waveform}`;
            break;
          case 'bass':
            this.oscillators.frequency.value = pitch/2;
            this.oscillators.type = `${waveform}`;
            break;

          // no default
        }

      }
      this.oscillators.start();
  }
};
