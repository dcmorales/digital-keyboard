import React from 'react';
import Selections from './components/Selections/Selections';
import AllKeyboards from './components/AllKeyboards';
import { SelectionStore } from './contexts/SelectionContext';
import './App.css';

class App extends React.Component {
  state = {
    totalBeats: '',
    maxBeats: 13,
    repeatx: 0,
    bpm: 125,
    noteLength: 4,
  };

  onSelectionChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getMaxBeats = maxBeats => {
    this.setState({ maxBeats: maxBeats });
  };

  render() {
    const { totalBeats, repeatx, maxBeats, bpm, noteLength } = this.state;
    return (
      <div>
        <SelectionStore>
          <Selections
            totalBeats={totalBeats}
            bpm={bpm}
            repeatx={repeatx}
            maxBeats={maxBeats}
            noteLength={noteLength}
            onSelectionChange={this.onSelectionChange}
          />
          <AllKeyboards
            totalBeats={totalBeats}
            repeatx={repeatx}
            bpm={bpm}
            noteLength={noteLength}
            getMaxBeats={this.getMaxBeats}
          />
        </SelectionStore>
      </div>
    );
  }
}

export default App;
