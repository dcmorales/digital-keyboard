import React from 'react';
import Selections from './Selections/Selections'
import AllKeyboards from './AllKeyboards/AllKeyboards'
import './App.css'

class App extends React.Component {
  state = {
    selectedScale: 'chromatic',
    selectedKey: 'C',
    selectedOctave: 3,
    nextOctave: 4,
    waveform: 'sawtooth',
    oscillator: '',
    order: 'ascending',
    totalBeats: 'all',
    offset: 300
  }

  onOctaveChange = async(e) => {
    await this.setState({ selectedOctave: e.target.value })
    await this.onNextOctaveChange()
  }

  onNextOctaveChange = async(e) => {
    const { selectedOctave } = this.state;
    const octNum =
      selectedOctave === '1' ? '2' : (
      selectedOctave === '2' ? '3' : (
      selectedOctave === '3' ? '4' : (
      selectedOctave === '4' ? '5' : (
      selectedOctave === '5' ? '6' : (
      selectedOctave === '6' ? '7' : null
      )))))
    await this.setState({ nextOctave: octNum })
  }

  onSelectionChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { selectedScale, selectedKey, selectedOctave, nextOctave, waveform, oscillator, order, totalBeats, offset } = this.state;
    return (
      <div>
        <Selections
          selectedScale={selectedScale} selectedKey={selectedKey}
          selectedOctave={selectedOctave} waveform={waveform}
          oscillator={oscillator} order={order}
          totalBeats={totalBeats} offset={offset}
          onSelectionChange={this.onSelectionChange}
          onOctaveChange={this.onOctaveChange}
        />
        <AllKeyboards
          selectedScale={selectedScale} startingNote={selectedKey}
          selectedOctave={selectedOctave} nextOctave={nextOctave}
          order={order} totalBeats={totalBeats}
          offset={offset} waveform={waveform}
          oscillator={oscillator}
        />
      </div>
    )
  }
}

export default App;
