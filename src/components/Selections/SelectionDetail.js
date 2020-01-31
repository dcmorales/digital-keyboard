import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';
import { selectionInfo } from '../../values/selectionInfo';
import { optionsNaN } from '../../values/optionsNaN';

class SelectionDetail extends React.Component {
  static contextType = SelectionContext;

  render() {
    const { start, max, arrNum, selectionName, selectionValue } = this.props;
    var optionsNum = [];
    var iNum = parseInt(start, 10);
    for (
      var i = iNum;
      i <= max;
      selectionName !== 'noteLength' ? i++ : (i *= 2)
    ) {
      optionsNum.push(i);
    }
    //if start and max are defined then selection is a number
    //numbers use function above for options, not a number uses OptionsNaN values
    const optionsDefined = !start && !max ? optionsNaN[arrNum] : optionsNum;
    return (
      <div>
        <label className="tooltip" htmlFor={`${selectionName}`}>
          {selectionName}
          <span className="tooltiptext">
            <ul>
              {selectionInfo[arrNum].map((info, i) => (
                <li key={i}>{info}</li>
              ))}
            </ul>
          </span>
        </label>

        <select
          className="selections"
          name={selectionName}
          id={`${selectionName}`}
          value={selectionValue}
          onChange={
            selectionName === 'selectedOctave'
              ? this.context.onOctaveChange
              : this.context.onSelectionChange
          }
        >
          {selectionName === 'totalBeats' || selectionName === 'oscillator' ? (
            <option></option>
          ) : null}
          {optionsDefined.map(option => {
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

export default SelectionDetail;
