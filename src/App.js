import React from 'react';

import Selections from './components/Selections/Selections';
import KeyboardFull from './components/KeyboardFull/KeyboardFull';
import KeyboardValuesSelected from './components/KeyboardValuesSelected/KeyboardValuesSelected';
import { SelectionStore } from './contexts/SelectionContext';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <SelectionStore>
          <Selections />
          <KeyboardFull />
          <KeyboardValuesSelected />
        </SelectionStore>
      </div>
    );
  }
}

export default App;
