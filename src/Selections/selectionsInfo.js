export const selectionsInfo = [


//scale
  [
    'Chromatic: plays all',
    'Major: W-W-H-W-W-W-H',
    'Natural Minor: W-H-W-W-H-W-W',
    'Harmonic Minor: W-H-W-W-H-A2-H',
    'Melodic Minor Ascending: W-H-W-W-W-W-H ',
    'Melodic Minor Descending: natural minor',
    'Major Pentatonic: W-W-W+H-W-W+H',
    'Minor Pentatonic: W+H-W-W-W+H-W',
    'Blues: W+H-W-H-H-W+H-W'
  ],


//key
  [
    'First key to start the scale with'
  ],


//octave
  [
    'Series of notes occupying the interval between two notes',
    'Going up an octave doubles the frequency',
    'Going down an octave divides frequency in half'
  ],


//waveform
  [
    'The shape of the oscillator wave'
  ],


//oscillator
  [
    'Osc1 detunes value by -50',
    'Osc2 detunes value by +50',
    'Mid-bass is (pitch + 50)/2',
    'Bass is pitch/2'
  ],


//bpm
  [
    'Beats Per Minute: the number of beats, in quarter notes, per minute'
  ],


//order
  [
    'Ascending: frequency => higher frequency',
    'Descending: frequency => lower frequency',
    'Random: will play notes in random order'
  ],


//# of different beats
  [
    'Total of different beats to play',
    'Max number is defined by total notes in scale',
    'Only works when order is set to random',
  ],


//repeatx
  [
    'Number of times to repeat selected notes',
    'Note: repeat 0x will play through once, 1x will play all notes then repeat once, etc.',
    'Only works when order is set to random and total beats is not blank',
  ]


]
