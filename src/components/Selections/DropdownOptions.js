import React from 'react';

import SelectionContext from '../../context/SelectionContext';

class DropdownOptions extends React.Component {
  static contextType = SelectionContext;

  renderDropdownOptions() {
    const { selectionName, selectionValue, optionsDefined } = this.props;
    const dropdownOpts =
      selectionName === 'totalBeats'
        ? optionsDefined.reverse()
        : optionsDefined;
    return (
      <div className="selection-detail__dropdown">
        <select
          className="selection-detail__dropdown-menu"
          name={selectionName}
          id={`${selectionName}`}
          value={selectionValue}
          onChange={
            selectionName === 'selectedOctave'
              ? this.context.onOctaveChange
              : this.context.onSelectionChange
          }
        >
          {selectionName === 'oscillator' ? (
            <option className="selection-detail__dropdown-options"></option>
          ) : null}
          {dropdownOpts.map(option => {
            return (
              <option
                className="selection-detail__dropdown-options"
                key={option}
                value={option}
              >
                {option}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  render() {
    return <React.Fragment>{this.renderDropdownOptions()}</React.Fragment>;
  }
}

export default DropdownOptions;
