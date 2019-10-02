import React from 'react';
import SelectionDetailNaN from './SelectionDetailNaN';
import SelectionDetailNum from './SelectionDetailNum';

const Selections = ({ selectedScale, selectedKey, selectedOctave, waveform, oscillator, order, totalBeats, repeatx, maxBeats, offset, onSelectionChange, onOctaveChange }) => {
  return (
    <div className='selection-container'>

      <SelectionDetailNaN
        label='Scale'
        nameOfSelection='selectedScale' valueOfSelection={selectedScale}
        optionsArrNum={0} infoArrNum={0}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNaN
        label='Key'
        nameOfSelection='selectedKey' valueOfSelection={selectedKey}
        optionsArrNum={1} infoArrNum={1}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNum
        label='Octave' start='1' max='6'
        nameOfSelection='selectedOctave' valueOfSelection={selectedOctave}
        infoArrNum={2}
        onSelectionChange={onOctaveChange}
      />

      <SelectionDetailNaN
        label='Waveform'
        nameOfSelection='waveform' valueOfSelection={waveform}
        optionsArrNum={2} infoArrNum={3}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNaN
        label='Oscillator'
        nameOfSelection='oscillator' valueOfSelection={oscillator}
        optionsArrNum={3} infoArrNum={4}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNum
        label='offset' start='125' max='725'
        nameOfSelection='offset' valueOfSelection={offset}
        infoArrNum={5}
        onSelectionChange={onSelectionChange}
      />

      <SelectionDetailNaN
        label='Order'
        nameOfSelection='order' valueOfSelection={order}
        optionsArrNum={4} infoArrNum={6}
        onSelectionChange={onSelectionChange}
      />

      {order !== 'random' ? null :
        <div>
          <SelectionDetailNum
            label='# of different beats' start='1' max={maxBeats}
            nameOfSelection='totalBeats' valueOfSelection={totalBeats}
            infoArrNum={7}
            onSelectionChange={onSelectionChange}
          />
          {totalBeats === '' ? null :
            <SelectionDetailNum
              label='repeat beat x' start='0' max='8'
              nameOfSelection='repeatx' valueOfSelection={repeatx}
              infoArrNum={8}
              onSelectionChange={onSelectionChange}
            />
          }
        </div>
      }

    </div>
  )
}

export default Selections;
