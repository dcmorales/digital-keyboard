import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';

class DropdownOptions extends React.Component {
  static contextType = SelectionContext;

  renderDropdownOptions() {
    const { selectionName, selectionValue, optionsDefined } = this.props;
    const dropdownOpts =
      selectionName === 'totalBeats'
        ? optionsDefined.reverse()
        : optionsDefined;
    return (
      <div className="selection-detail__dropdown-menu">
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
          {selectionName === 'oscillator' ? <option></option> : null}
          {dropdownOpts.map(option => {
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

  render() {
    return <React.Fragment>{this.renderDropdownOptions()}</React.Fragment>;
  }
}

export default DropdownOptions;
