import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';

import SelectionDetail from './SelectionDetail';

class Selections extends React.Component {
  static contextType = SelectionContext;

  render() {
    return (
      <div className="selections-container">
        <SelectionDetail
          labelName="Scale"
          selectionName="selectedScale"
          selectionValue={this.context.selectedScale}
          arrNum={0}
        />

        <SelectionDetail
          labelName="Key"
          selectionName="selectedKey"
          selectionValue={this.context.selectedKey}
          arrNum={1}
        />

        <SelectionDetail
          labelName="Waveform"
          selectionName="waveform"
          selectionValue={this.context.waveform}
          arrNum={2}
        />

        <SelectionDetail
          labelName="Oscillator"
          selectionName="oscillator"
          selectionValue={this.context.oscillator}
          arrNum={3}
        />

        <SelectionDetail
          labelName="Order"
          selectionName="order"
          selectionValue={this.context.order}
          arrNum={4}
        />

        <SelectionDetail
          labelName="Octave"
          start="1"
          max="6"
          selectionName="selectedOctave"
          selectionValue={this.context.selectedOctave}
          arrNum={5}
        />

        <SelectionDetail
          labelName="BPM"
          start="100"
          max="130"
          selectionName="bpm"
          selectionValue={this.context.bpm}
          arrNum={6}
        />

        <SelectionDetail
          labelName="Note Length"
          start="4"
          max="32"
          selectionName="noteLength"
          selectionValue={this.context.noteLength}
          arrNum={7}
        />

        {this.context.order !== 'random' ? null : (
          <div>
            <SelectionDetail
              labelName="Total Beats"
              start="1"
              max={this.context.maxBeats}
              selectionName="totalBeats"
              selectionValue={this.context.totalBeats}
              arrNum={8}
            />
            {this.context.totalBeats === '' ? null : (
              <SelectionDetail
                LabelName="Repeat"
                start="0"
                max="8"
                selectionName="repeatx"
                selectionValue={this.context.repeatx}
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
