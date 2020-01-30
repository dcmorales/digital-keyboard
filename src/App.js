import React from 'react';
import Selections from './components/Selections/Selections';
import AllKeyboards from './components/AllKeyboards';
import { SelectionStore } from './contexts/SelectionContext';
import './App.css';

class App extends React.Component {
  state = {
    noteLength: 4,
  };

  onSelectionChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { noteLength } = this.state;
    return (
      <div>
        <SelectionStore>
          <Selections
            noteLength={noteLength}
            onSelectionChange={this.onSelectionChange}
          />
          <AllKeyboards noteLength={noteLength} />
        </SelectionStore>
      </div>
    );
  }
}

export default App;
