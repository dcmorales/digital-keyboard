import React from 'react';
import SelectionDetail from './SelectionDetail';

const Selections = ({ selectedScale, selectedKey, selectedOctave, waveform, oscillator, duration, order, onSelectionChange, onOctaveChange }) => {
  return (
    <div>

      <SelectionDetail
        nameOfSelection='selectedScale'
        valueOfSelection={selectedScale}
        optionsArrayNumber={0}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetail
        nameOfSelection='selectedKey'
        valueOfSelection={selectedKey}
        optionsArrayNumber={1}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetail
        nameOfSelection='selectedOctave'
        valueOfSelection={selectedOctave}
        optionsArrayNumber={2}
        onSelectionChange={onOctaveChange}
      />

      <SelectionDetail
        nameOfSelection='waveform'
        valueOfSelection={waveform}
        optionsArrayNumber={3}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetail
        nameOfSelection='oscillator'
        valueOfSelection={oscillator}
        optionsArrayNumber={4}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetail
        nameOfSelection='duration'
        valueOfSelection={duration}
        optionsArrayNumber={5}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetail
        nameOfSelection='order'
        valueOfSelection={order}
        optionsArrayNumber={6}
        onSelectionChange={onSelectionChange}
      />

    </div>
  )
}

export default Selections;
