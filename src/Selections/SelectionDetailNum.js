import React from 'react';

const SelectionDetailNum = ({ start, max, label, nameOfSelection, valueOfSelection, onSelectionChange }) => {
  var options = []
  for (var i = start; i < max; i++) {
    options.push(i);
  }
  const optionDetail = nameOfSelection !== 'totalBeats'
    ? [ null, options ]
    : [ <option></option>, options.reverse() ]
  return (
    <div>
      <label>{label}</label>

      <select className='selections' name={nameOfSelection} value={valueOfSelection}
        onChange={onSelectionChange} >

        {optionDetail[0]}
        {optionDetail[1]
          .map((option) => {
            return (
              <option key={option}>
                {option}
              </option>
            );
          })
        }

      </select>
    </div>
  )
}

export default SelectionDetailNum;
