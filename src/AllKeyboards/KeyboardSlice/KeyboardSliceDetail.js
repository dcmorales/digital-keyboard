import React from 'react'
import SelectedKeyboardSlice from './SelectedKeyboardSlice'
import ScaleNotes from '../../ScaleNotes/ScaleNotes'

const KeyboardSliceDetail = ({ selectedScale, note, selectedOctave, nextOctave, notesDefined, waveform, oscillator, order, totalBeats, repeatx, noteLength, bpm, getMaxBeats }) => {
  return (
    <div>

      <SelectedKeyboardSlice
        noteValue={note.value}
        notesDefined={notesDefined}
        selectedOctave={selectedOctave}
        nextOctave={nextOctave}
        waveform={waveform}
        oscillator={oscillator}
      />

      <ScaleNotes
        noteValue={note.value}
        notesDefined={notesDefined}
        selectedScale={selectedScale}
        selectedOctave={selectedOctave}
        nextOctave={nextOctave}
        waveform={waveform}
        oscillator={oscillator}
        order={order}
        totalBeats={totalBeats}
        getMaxBeats={getMaxBeats}
        repeatx={repeatx}
        noteLength={noteLength}
        bpm={bpm}
      />

    </div>
  )
}

export default KeyboardSliceDetail;
