import React from 'react';
import SelectionDetailNaN from './SelectionDetailNaN';
import SelectionDetailNum from './SelectionDetailNum';

const Selections = ({ selectedScale, selectedKey, selectedOctave, waveform, oscillator, order, totalBeats, repeatx, maxBeats, offset, onSelectionChange, onOctaveChange }) => {
  return (
    <div className='selection-container'>

      <SelectionDetailNaN
        label='Scale'
        nameOfSelection='selectedScale' valueOfSelection={selectedScale}
        optionsArrayNumber={0}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNaN
        label='Key'
        nameOfSelection='selectedKey' valueOfSelection={selectedKey}
        optionsArrayNumber={1}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNum
        label='Octave' start='1' max='6'
        nameOfSelection='selectedOctave' valueOfSelection={selectedOctave}
        onSelectionChange={onOctaveChange}
      />

      <SelectionDetailNaN
        label='Waveform'
        nameOfSelection='waveform' valueOfSelection={waveform}
        optionsArrayNumber={2}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNaN
        label='Oscillator'
        nameOfSelection='oscillator' valueOfSelection={oscillator}
        optionsArrayNumber={3}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNum
        label='offset' start='125' max='725'
        nameOfSelection='offset' valueOfSelection={offset}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNaN
        label='Order'
        nameOfSelection='order' valueOfSelection={order}
        optionsArrayNumber={4}
        onSelectionChange={onSelectionChange}
      />

      {order !== 'random' ? null :
        <div>
          <SelectionDetailNum
            label='# of different beats' start='1' max={maxBeats}
            nameOfSelection='totalBeats' valueOfSelection={totalBeats}
            onSelectionChange={onSelectionChange}
          />
          {totalBeats === '' ? null :
            <SelectionDetailNum
              label='repeat beat x' start='0' max='8'
              nameOfSelection='repeatx' valueOfSelection={repeatx}
              onSelectionChange={onSelectionChange}
            />
          }
        </div>
      }

    </div>
  )
}

export default Selections;
