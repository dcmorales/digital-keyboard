import React from 'react'
import SelectedKeyboardSlice from './SelectedKeyboardSlice'
import ScaleNotes from '../../ScaleNotes/ScaleNotes'

const KeyboardSliceDetail = ({ selectedScale, note, selectedOctave, nextOctave, notesDefined, waveform, oscillator, duration, order, totalBeats, offset }) => {
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

      <ScaleNotes
        noteValue={note.value}
        notesDefined={notesDefined}
        selectedScale={selectedScale}
        selectedOctave={selectedOctave}
        nextOctave={nextOctave}
        waveform={waveform}
        oscillator={oscillator}
        duration={duration}
        order={order}
        totalBeats={totalBeats}
        offset={offset}
      />

    </div>
  )
}

export default KeyboardSliceDetail;
