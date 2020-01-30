import React from 'react';
import SelectionContext from '../../contexts/SelectionContext';
import SelectionDetailNaN from './SelectionDetailNaN';
import SelectionDetailNum from './SelectionDetailNum';

class Selections extends React.Component {
  static contextType = SelectionContext;

  render() {
    const { repeatx, maxBeats, bpm, noteLength } = this.props;
    return (
      <div className="selection-container">
        <SelectionDetailNaN
          label="Scale"
          nameOfSelection="selectedScale"
          valueOfSelection={this.context.selectedScale}
          optionsArrNum={0}
          infoArrNum={0}
          onSelectionChange={this.context.onSelectionChange}
        />

        <SelectionDetailNaN
          label="Key"
          nameOfSelection="selectedKey"
          valueOfSelection={this.context.selectedKey}
          optionsArrNum={1}
          infoArrNum={1}
          onSelectionChange={this.context.onSelectionChange}
        />

        <SelectionDetailNum
          label="Octave"
          start="1"
          max="6"
          nameOfSelection="selectedOctave"
          valueOfSelection={this.context.selectedOctave}
          infoArrNum={2}
          onSelectionChange={this.context.onOctaveChange}
        />

        <SelectionDetailNaN
          label="Waveform"
          nameOfSelection="waveform"
          valueOfSelection={this.context.waveform}
          optionsArrNum={2}
          infoArrNum={3}
          onSelectionChange={this.context.onSelectionChange}
        />

        <SelectionDetailNaN
          label="Oscillator"
          nameOfSelection="oscillator"
          valueOfSelection={this.context.oscillator}
          optionsArrNum={3}
          infoArrNum={4}
          onSelectionChange={this.context.onSelectionChange}
        />

        <SelectionDetailNum
          label="bpm"
          start="100"
          max="130"
          nameOfSelection="bpm"
          valueOfSelection={bpm}
          infoArrNum={5}
          onSelectionChange={this.props.onSelectionChange}
        />

        <SelectionDetailNum
          label="note length 1/"
          start="4"
          max="32"
          nameOfSelection="noteLength"
          valueOfSelection={noteLength}
          infoArrNum={6}
          onSelectionChange={this.props.onSelectionChange}
        />

        <SelectionDetailNaN
          label="Order"
          nameOfSelection="order"
          valueOfSelection={this.context.order}
          optionsArrNum={4}
          infoArrNum={7}
          onSelectionChange={this.context.onSelectionChange}
        />

        {this.context.order !== 'random' ? null : (
          <div>
            <SelectionDetailNum
              label="# of different beats"
              start="1"
              max={maxBeats}
              nameOfSelection="totalBeats"
              valueOfSelection={this.context.totalBeats}
              infoArrNum={8}
              onSelectionChange={this.context.onSelectionChange}
            />
            {this.context.totalBeats === '' ? null : (
              <SelectionDetailNum
                label="repeat beat x"
                start="0"
                max="8"
                nameOfSelection="repeatx"
                valueOfSelection={repeatx}
                infoArrNum={9}
                onSelectionChange={this.props.onSelectionChange}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Selections;
