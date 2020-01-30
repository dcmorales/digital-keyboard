import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';
import { options } from '../../values/options';
import { selectionsInfo } from '../../values/selectionsInfo';

class SelectionDetailNaN extends React.Component {
  static contextType = SelectionContext;

  render() {
    const { nameOfSelection, optionsArrNum, infoArrNum } = this.props;

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
          //value is handled by context state
          onChange={this.context.onSelectionChange}
        >
          {options[optionsArrNum].map(option => {
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

export default SelectionDetailNaN;
