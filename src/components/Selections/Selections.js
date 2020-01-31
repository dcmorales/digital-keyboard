import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';

import SelectionDetail from './SelectionDetail';

class Selections extends React.Component {
  static contextType = SelectionContext;

  render() {
    return (
      <div className="selection-container">
        <SelectionDetail
          nameOfSelection="selectedScale"
          valueOfSelection={this.context.selectedScale}
          arrNum={0}
        />

        <SelectionDetail
          nameOfSelection="selectedKey"
          valueOfSelection={this.context.selectedKey}
          arrNum={1}
        />

        <SelectionDetail
          nameOfSelection="waveform"
          valueOfSelection={this.context.waveform}
          arrNum={2}
        />

        <SelectionDetail
          nameOfSelection="oscillator"
          valueOfSelection={this.context.oscillator}
          arrNum={3}
        />

        <SelectionDetail
          nameOfSelection="order"
          valueOfSelection={this.context.order}
          arrNum={4}
        />

        <SelectionDetail
          start="1"
          max="6"
          nameOfSelection="selectedOctave"
          valueOfSelection={this.context.selectedOctave}
          arrNum={5}
        />

        <SelectionDetail
          start="100"
          max="130"
          nameOfSelection="bpm"
          valueOfSelection={this.context.bpm}
          arrNum={6}
        />

        <SelectionDetail
          start="4"
          max="32"
          nameOfSelection="noteLength"
          valueOfSelection={this.context.noteLength}
          arrNum={7}
        />

        {this.context.order !== 'random' ? null : (
          <div>
            <SelectionDetail
              start="1"
              max={this.context.maxBeats}
              nameOfSelection="totalBeats"
              valueOfSelection={this.context.totalBeats}
              arrNum={8}
            />
            {this.context.totalBeats === '' ? null : (
              <SelectionDetail
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
