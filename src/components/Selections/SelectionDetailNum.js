import React from 'react';

import { selectionsInfo } from '../../values/selectionsInfo';

const SelectionDetailNum = ({
  start,
  max,
  label,
  infoArrNum,
  nameOfSelection,
  valueOfSelection,
  onSelectionChange,
}) => {
  var options = [];
  var iNum = parseInt(start, 10);
  for (
    var i = iNum;
    i <= max;
    nameOfSelection !== 'noteLength' ? i++ : (i *= 2)
  ) {
    options.push(i);
  }
  const optionDetail =
    nameOfSelection !== 'totalBeats'
      ? [null, options]
      : [<option></option>, options.reverse()];

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
        {optionDetail[0]}
        {optionDetail[1].map(option => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectionDetailNum;
