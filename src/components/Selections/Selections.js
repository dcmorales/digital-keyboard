import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';

import SelectionDetailNaN from './SelectionDetailNaN';
import SelectionDetailNum from './SelectionDetailNum';

class Selections extends React.Component {
  static contextType = SelectionContext;

  render() {
    return (
      <div className="selection-container">
        <SelectionDetailNaN
          nameOfSelection="selectedScale"
          valueOfSelection={this.context.selectedScale}
          optionsArrNum={0}
          infoArrNum={0}
        />

        <SelectionDetailNaN
          nameOfSelection="selectedKey"
          valueOfSelection={this.context.selectedKey}
          optionsArrNum={1}
          infoArrNum={1}
        />

        <SelectionDetailNum
          start="1"
          max="6"
          nameOfSelection="selectedOctave"
          valueOfSelection={this.context.selectedOctave}
          infoArrNum={2}
        />

        <SelectionDetailNaN
          nameOfSelection="waveform"
          valueOfSelection={this.context.waveform}
          optionsArrNum={2}
          infoArrNum={3}
        />

        <SelectionDetailNaN
          nameOfSelection="oscillator"
          valueOfSelection={this.context.oscillator}
          optionsArrNum={3}
          infoArrNum={4}
        />

        <SelectionDetailNum
          start="100"
          max="130"
          nameOfSelection="bpm"
          valueOfSelection={this.context.bpm}
          infoArrNum={5}
        />

        <SelectionDetailNum
          start="4"
          max="32"
          nameOfSelection="noteLength"
          valueOfSelection={this.context.noteLength}
          infoArrNum={6}
        />

        <SelectionDetailNaN
          nameOfSelection="order"
          valueOfSelection={this.context.order}
          optionsArrNum={4}
          infoArrNum={7}
        />

        {this.context.order !== 'random' ? null : (
          <div>
            <SelectionDetailNum
              start="1"
              max={this.context.maxBeats}
              nameOfSelection="totalBeats"
              valueOfSelection={this.context.totalBeats}
              infoArrNum={8}
            />
            {this.context.totalBeats === '' ? null : (
              <SelectionDetailNum
                start="0"
                max="8"
                nameOfSelection="repeatx"
                valueOfSelection={this.context.repeatx}
                infoArrNum={9}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Selections;
