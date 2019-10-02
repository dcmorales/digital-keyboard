import React from 'react';

const SelectionDetailNum = ({ start, max, label, nameOfSelection, valueOfSelection, onSelectionChange }) => {
  var options = []
  for (var i = start; i < max; i++) {
    options.push(i);
  }
  return (
    <div>
      <label>{label}</label>

      <select className='selections' name={nameOfSelection} value={valueOfSelection}
        onChange={onSelectionChange} >

        {options
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
