import React from 'react';
import Selections from './components/Selections/Selections';
import AllKeyboards from './components/AllKeyboards';
import { SelectionStore } from './contexts/SelectionContext';
import './App.css';

class App extends React.Component {
  state = {
    bpm: 125,
    noteLength: 4,
  };

  onSelectionChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { bpm, noteLength } = this.state;
    return (
      <div>
        <SelectionStore>
          <Selections
            bpm={bpm}
            noteLength={noteLength}
            onSelectionChange={this.onSelectionChange}
          />
          <AllKeyboards bpm={bpm} noteLength={noteLength} />
        </SelectionStore>
      </div>
    );
  }
}

export default App;
