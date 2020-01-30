import React from 'react';
import Selections from './components/Selections/Selections';
import AllKeyboards from './components/AllKeyboards';
import { SelectionStore } from './contexts/SelectionContext';
import './App.css';

class App extends React.Component {
  state = {
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
    const { repeatx, maxBeats, bpm, noteLength } = this.state;
    return (
      <div>
        <SelectionStore>
          <Selections
            bpm={bpm}
            repeatx={repeatx}
            maxBeats={maxBeats}
            noteLength={noteLength}
            onSelectionChange={this.onSelectionChange}
          />
          <AllKeyboards
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
