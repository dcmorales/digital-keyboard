import React from 'react';

import Selections from './components/Selections/Selections';
import KeyboardFull from './components/KeyboardFull/KeyboardFull';
import KeyboardValuesSelected from './components/KeyboardValuesSelected/KeyboardValuesSelected';
import { SelectionStore } from './contexts/SelectionContext';

import './App.css';
import './sass/main.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
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
