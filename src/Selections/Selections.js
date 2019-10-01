import React from 'react';
import SelectionDetail from './SelectionDetail';

const Selections = ({ selectedScale, selectedKey, selectedOctave, waveform, oscillator, order, totalBeats, repeatx, offset, onSelectionChange, onOctaveChange }) => {
  return (
    <div className='selection-container'>

      <SelectionDetail
        label='Scale'
        nameOfSelection='selectedScale'
        valueOfSelection={selectedScale}
        optionsArrayNumber={0}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetail
        label='Key'
        nameOfSelection='selectedKey'
        valueOfSelection={selectedKey}
        optionsArrayNumber={1}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetail
        label='Octave'
        nameOfSelection='selectedOctave'
        valueOfSelection={selectedOctave}
        optionsArrayNumber={2}
        onSelectionChange={onOctaveChange}
      />

      <SelectionDetail
        label='Waveform'
        nameOfSelection='waveform'
        valueOfSelection={waveform}
        optionsArrayNumber={3}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetail
        label='Oscillator'
        nameOfSelection='oscillator'
        valueOfSelection={oscillator}
        optionsArrayNumber={4}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetail
        label='Order'
        nameOfSelection='order'
        valueOfSelection={order}
        optionsArrayNumber={5}
        onSelectionChange={onSelectionChange}
      />

      {order !== 'random' ? null :
        <div>
          <SelectionDetail
            label='total different beats'
            nameOfSelection='totalBeats'
            valueOfSelection={totalBeats}
            optionsArrayNumber={6}
            onSelectionChange={onSelectionChange}
          />
          <SelectionDetail
            label='repeat beat x'
            nameOfSelection='repeatx'
            valueOfSelection={repeatx}
            optionsArrayNumber={7}
            onSelectionChange={onSelectionChange}
          />
        </div>
      }

      <SelectionDetail
        label='offset'
        nameOfSelection='offset'
        valueOfSelection={offset}
        optionsArrayNumber={8}
        onSelectionChange={onSelectionChange}
      />

    </div>
  )
}

export default Selections;
