import React from 'react';
import { options } from '../../values/options';
import { selectionsInfo } from '../../values/selectionsInfo';

const SelectionDetailNaN = ({
  label,
  nameOfSelection,
  valueOfSelection,
  optionsArrNum,
  infoArrNum,
  onSelectionChange,
}) => {
  return (
    <div>
      <label className="tooltip">
        {label}
        <span className="tooltiptext">
          <ul>
            {selectionsInfo[infoArrNum].map((info, i) => (
              <li key={i}>{info}</li>
            ))}
          </ul>
        </span>
      </label>

      <select
        className="selections"
        name={nameOfSelection}
        value={valueOfSelection}
        onChange={onSelectionChange}
      >
        {options[optionsArrNum].map(option => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectionDetailNaN;