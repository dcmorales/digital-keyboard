import React from 'react';
import SelectionDetailNaN from './SelectionDetailNaN';
import SelectionDetailNum from './SelectionDetailNum';

const Selections = ({ selectedScale, selectedKey, selectedOctave, waveform, oscillator, order, totalBeats, repeatx, maxBeats, offset, onSelectionChange, onOctaveChange }) => {
  return (
    <div className='selection-container'>

      <SelectionDetailNaN
        label='Scale'
        nameOfSelection='selectedScale'
        valueOfSelection={selectedScale}
        optionsArrayNumber={0}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNaN
        label='Key'
        nameOfSelection='selectedKey'
        valueOfSelection={selectedKey}
        optionsArrayNumber={1}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNum
        start='1'
        max='7'
        label='Octave'
        nameOfSelection='selectedOctave'
        valueOfSelection={selectedOctave}
        onSelectionChange={onOctaveChange}
      />

      <SelectionDetailNaN
        label='Waveform'
        nameOfSelection='waveform'
        valueOfSelection={waveform}
        optionsArrayNumber={2}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNaN
        label='Oscillator'
        nameOfSelection='oscillator'
        valueOfSelection={oscillator}
        optionsArrayNumber={3}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNum
        start='125'
        max='575'
        label='offset'
        nameOfSelection='offset'
        valueOfSelection={offset}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNaN
        label='Order'
        nameOfSelection='order'
        valueOfSelection={order}
        optionsArrayNumber={4}
        onSelectionChange={onSelectionChange}
      />

      {order !== 'random' ? null :
        <div>
          <SelectionDetailNum
            start='1'
            max={maxBeats}
            label='# of beats'
            nameOfSelection='totalBeats'
            valueOfSelection={totalBeats}
            onSelectionChange={onSelectionChange}
          />
          {totalBeats === '' ? null :
            <SelectionDetailNum
              start='0'
              max='8'
              label='repeat beat x'
              nameOfSelection='repeatx'
              valueOfSelection={repeatx}
              onSelectionChange={onSelectionChange}
            />
          }
        </div>
      }

    </div>
  )
}

export default Selections;
