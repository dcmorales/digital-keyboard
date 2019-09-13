import React from 'react';
import SelectionDetail from './SelectionDetail';

const Selections = ({ selectedKey, selectedOctave, waveform, oscillator, duration, onSelectionChange, onOctaveChange }) => {
  return (
    <div>

      <SelectionDetail
        nameOfSelection='selectedKey'
        valueOfSelection={selectedKey}
        optionsArrayNumber={0}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetail
        nameOfSelection='selectedOctave'
        valueOfSelection={selectedOctave}
        optionsArrayNumber={1}
        onSelectionChange={onOctaveChange}
      />

      <SelectionDetail
        nameOfSelection='waveform'
        valueOfSelection={waveform}
        optionsArrayNumber={2}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetail
        nameOfSelection='oscillator'
        valueOfSelection={oscillator}
        optionsArrayNumber={3}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetail
        nameOfSelection='duration'
        valueOfSelection={duration}
        optionsArrayNumber={4}
        onSelectionChange={onSelectionChange}
      />

    </div>
  )
}

export default Selections;
