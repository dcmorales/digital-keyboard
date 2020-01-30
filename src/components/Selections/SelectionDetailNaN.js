import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';
import { optionsNaN } from '../../values/optionsNaN';
import { selectionInfo } from '../../values/selectionInfo';

class SelectionDetailNaN extends React.Component {
  static contextType = SelectionContext;

  render() {
    const { nameOfSelection, valueOfSelection, arrNum } = this.props;

    return (
      <div>
        <label className="tooltip" htmlFor={`${nameOfSelection}`}>
          {nameOfSelection}
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
          name={nameOfSelection}
          id={`${nameOfSelection}`}
          value={valueOfSelection}
          onChange={this.context.onSelectionChange}
        >
          {optionsNaN[arrNum].map(option => {
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
