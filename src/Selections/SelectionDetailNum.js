import React from 'react';
import { selectionsInfo } from './selectionsInfo'

const SelectionDetailNum = ({ start, max, label, infoArrNum, nameOfSelection, valueOfSelection, onSelectionChange }) => {

  var options = []
  var iNum = parseInt(start, 10)
  for (var i = iNum; i <= max; nameOfSelection !== 'offset' ? i++ : i+=75) {
    options.push(i);
  }
  const optionDetail = nameOfSelection !== 'totalBeats'
    ? [ null, options ]
    : [ <option></option>, options.reverse() ]

  return (
    <div>
      <label className='tooltip'>
        {label}
        <span className='tooltiptext'>
          <ul>
            {selectionsInfo[infoArrNum].map(info => <li>{info}</li>)}
          </ul>
        </span>
      </label>

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
