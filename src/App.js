import React from 'react';
import Selections from './components/Selections/Selections';
import AllKeyboards from './components/AllKeyboards';
import { SelectionStore } from './contexts/SelectionContext';
import './App.css';

class App extends React.Component {
  state = {
    oscillator: '',
    order: 'ascending',
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
    const {
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
            oscillator={oscillator}
            order={order}
            totalBeats={totalBeats}
            bpm={bpm}
            repeatx={repeatx}
            maxBeats={maxBeats}
            noteLength={noteLength}
            onSelectionChange={this.onSelectionChange}
          />
          <AllKeyboards
            order={order}
            totalBeats={totalBeats}
            repeatx={repeatx}
            bpm={bpm}
            noteLength={noteLength}
            oscillator={oscillator}
            getMaxBeats={this.getMaxBeats}
          />
        </SelectionStore>
      </div>
    );
  }
}

export default App;
