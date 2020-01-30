import React from 'react';
import Selections from './components/Selections/Selections';
import AllKeyboards from './components/AllKeyboards';
import { SelectionStore } from './contexts/SelectionContext';
import './App.css';

class App extends React.Component {
  state = {
    selectedKey: 'C',
    selectedOctave: 3,
    nextOctave: 4,
    waveform: 'sawtooth',
    oscillator: '',
    order: 'ascending',
    totalBeats: '',
    maxBeats: 13,
    repeatx: 0,
    bpm: 125,
    noteLength: 4,
  };

  onOctaveChange = async e => {
    await this.setState({ selectedOctave: e.target.value });
    await this.onNextOctaveChange();
  };

  onNextOctaveChange = async e => {
    const { selectedOctave } = this.state;
    var selOctNum = parseInt(selectedOctave, 10);
    for (var i = selectedOctave; i <= selOctNum + 1; i++) {
      this.setState({ nextOctave: i });
    }
  };

  onSelectionChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getMaxBeats = maxBeats => {
    this.setState({ maxBeats: maxBeats });
  };

  render() {
    const {
      selectedKey,
      selectedOctave,
      nextOctave,
      waveform,
      oscillator,
      order,
      totalBeats,
      repeatx,
      maxBeats,
      bpm,
      noteLength,
    } = this.state;
    return (
      <div>
        <SelectionStore>
          <Selections
            selectedKey={selectedKey}
            selectedOctave={selectedOctave}
            waveform={waveform}
            oscillator={oscillator}
            order={order}
            totalBeats={totalBeats}
            bpm={bpm}
            repeatx={repeatx}
            maxBeats={maxBeats}
            noteLength={noteLength}
            onSelectionChange={this.onSelectionChange}
            onOctaveChange={this.onOctaveChange}
          />
          <AllKeyboards
            startingNote={selectedKey}
            selectedOctave={selectedOctave}
            nextOctave={nextOctave}
            order={order}
            totalBeats={totalBeats}
            repeatx={repeatx}
            bpm={bpm}
            noteLength={noteLength}
            waveform={waveform}
            oscillator={oscillator}
            getMaxBeats={this.getMaxBeats}
          />
        </SelectionStore>
      </div>
    );
  }
}

export default App;
