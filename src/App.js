import React from 'react';
import Selections from './components/Selections/Selections';
import AllKeyboards from './components/AllKeyboards';
import { SelectionStore } from './contexts/SelectionContext';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <SelectionStore>
          <Selections />
          <AllKeyboards />
        </SelectionStore>
      </div>
    );
  }
}

export default App;
