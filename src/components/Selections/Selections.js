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
          arrNum={0}
        />

        <SelectionDetailNaN
          nameOfSelection="selectedKey"
          valueOfSelection={this.context.selectedKey}
          arrNum={1}
        />

        <SelectionDetailNaN
          nameOfSelection="waveform"
          valueOfSelection={this.context.waveform}
          arrNum={2}
        />

        <SelectionDetailNaN
          nameOfSelection="oscillator"
          valueOfSelection={this.context.oscillator}
          arrNum={3}
        />

        <SelectionDetailNaN
          nameOfSelection="order"
          valueOfSelection={this.context.order}
          arrNum={4}
        />

        <SelectionDetailNum
          start="1"
          max="6"
          nameOfSelection="selectedOctave"
          valueOfSelection={this.context.selectedOctave}
          arrNum={5}
        />

        <SelectionDetailNum
          start="100"
          max="130"
          nameOfSelection="bpm"
          valueOfSelection={this.context.bpm}
          arrNum={6}
        />

        <SelectionDetailNum
          start="4"
          max="32"
          nameOfSelection="noteLength"
          valueOfSelection={this.context.noteLength}
          arrNum={7}
        />

        {this.context.order !== 'random' ? null : (
          <div>
            <SelectionDetailNum
              start="1"
              max={this.context.maxBeats}
              nameOfSelection="totalBeats"
              valueOfSelection={this.context.totalBeats}
              arrNum={8}
            />
            {this.context.totalBeats === '' ? null : (
              <SelectionDetailNum
                start="0"
                max="8"
                nameOfSelection="repeatx"
                valueOfSelection={this.context.repeatx}
                arrNum={9}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Selections;
