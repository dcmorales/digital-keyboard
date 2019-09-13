import React from 'react'
import SelectedKeyboardSlice from './SelectedKeyboardSlice'
import PlayButton from './PlayButton'

const KeyboardSliceDetail = ({ note, selectedOctave, nextOctave, notesDefined, waveform, oscillator, duration }) => {
  return (
    <div>

      <SelectedKeyboardSlice
        noteValue={note.value}
        notesDefined={notesDefined}
        selectedOctave={selectedOctave}
        nextOctave={nextOctave}
        waveform={waveform}
        oscillator={oscillator}
        duration={duration}
      />

      <PlayButton
        note={note}
        notesDefined={notesDefined}
        selectedOctave={selectedOctave}
        nextOctave={nextOctave}
        waveform={waveform}
        oscillator={oscillator}
        duration={duration}
      />

    </div>
  )
}

export default KeyboardSliceDetail;
