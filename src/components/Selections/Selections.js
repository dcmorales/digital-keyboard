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
          optionsArrNum={0}
          infoArrNum={0}
        />

        <SelectionDetailNaN
          nameOfSelection="selectedKey"
          optionsArrNum={1}
          infoArrNum={1}
        />

        <SelectionDetailNum
          start="1"
          max="6"
          nameOfSelection="selectedOctave"
          infoArrNum={2}
        />

        <SelectionDetailNaN
          nameOfSelection="waveform"
          optionsArrNum={2}
          infoArrNum={3}
        />

        <SelectionDetailNaN
          nameOfSelection="oscillator"
          optionsArrNum={3}
          infoArrNum={4}
        />

        <SelectionDetailNum
          start="100"
          max="130"
          nameOfSelection="bpm"
          infoArrNum={5}
        />

        <SelectionDetailNum
          start="4"
          max="32"
          nameOfSelection="noteLength"
          infoArrNum={6}
        />

        <SelectionDetailNaN
          nameOfSelection="order"
          optionsArrNum={4}
          infoArrNum={7}
        />

        {this.context.order !== 'random' ? null : (
          <div>
            <SelectionDetailNum
              start="1"
              max={this.context.maxBeats}
              nameOfSelection="totalBeats"
              infoArrNum={8}
            />
            {this.context.totalBeats === '' ? null : (
              <SelectionDetailNum
                start="0"
                max="8"
                nameOfSelection="repeatx"
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
