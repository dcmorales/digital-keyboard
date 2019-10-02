import React from 'react';
import { options } from './options'

const SelectionDetailNaN = ({ label, nameOfSelection, valueOfSelection, optionsArrayNumber, onSelectionChange }) => {
  return (
    <div>
      <label>{label}</label>

      <select className='selections' name={nameOfSelection} value={valueOfSelection}
        onChange={onSelectionChange} >

        {options[optionsArrayNumber]
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

export default SelectionDetailNaN;
