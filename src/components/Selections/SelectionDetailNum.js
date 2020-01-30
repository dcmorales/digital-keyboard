import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';
import { selectionsInfo } from '../../values/selectionsInfo';

class SelectionDetailNum extends React.Component {
  static contextType = SelectionContext;

  render() {
    const {
      start,
      max,
      infoArrNum,
      nameOfSelection,
      valueOfSelection,
    } = this.props;
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
        <label className="tooltip" htmlFor={`${nameOfSelection}`}>
          {nameOfSelection}
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
          id={`${nameOfSelection}`}
          value={valueOfSelection}
          onChange={
            nameOfSelection === 'selectedOctave'
              ? this.context.onOctaveChange
              : this.context.onSelectionChange
          }
        >
          {optionDetail[0]}
          {optionDetail[1].map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default SelectionDetailNum;
