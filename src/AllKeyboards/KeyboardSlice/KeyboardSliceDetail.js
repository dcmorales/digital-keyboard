import React from 'react'
import SelectedKeyboardSlice from './SelectedKeyboardSlice'
import PlayScales from '../../PlayScales/PlayScales'

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

      <PlayScales
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

      {/* pass in scale notes into slice */}

    </div>
  )
}

export default KeyboardSliceDetail;
