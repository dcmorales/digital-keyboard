import React from 'react';
import { options } from './options'

const SelectionDetail = ({ nameOfSelection, valueOfSelection, optionsArrayNumber, onSelectionChange }) => {
  return (
    <select name={nameOfSelection} value={valueOfSelection} onChange={onSelectionChange}>
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
  )
}

export default SelectionDetail;
