import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';

class DropdownOptions extends React.Component {
  static contextType = SelectionContext;

  renderDropdownOptions() {
    const { selectionName, selectionValue, optionsDefined } = this.props;
    return (
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
    );
  }

  render() {
    return <React.Fragment>{this.renderDropdownOptions()}</React.Fragment>;
  }
}

export default DropdownOptions;
