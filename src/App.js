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
    totalBeats: '',
    maxBeats: 13,
    repeatx: 0,
    bpm: 125
  }

  onOctaveChange = async(e) => {
    await this.setState({ selectedOctave: e.target.value })
    await this.onNextOctaveChange()
  }

  onNextOctaveChange = async(e) => {
    const { selectedOctave } = this.state;
    var selOctNum = parseInt(selectedOctave, 10)
    for ( var i = selectedOctave; i <= (selOctNum + 1); i++ ) {
      this.setState({ nextOctave: i }) }
  }

  onSelectionChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  getMaxBeats = (maxBeats) => {
    this.setState({ maxBeats: maxBeats })
  }

  render() {
    const { selectedScale, selectedKey, selectedOctave, nextOctave, waveform, oscillator, order, totalBeats, repeatx, maxBeats, bpm } = this.state;
    return (
      <div>
        <Selections
          selectedScale={selectedScale} selectedKey={selectedKey}
          selectedOctave={selectedOctave} waveform={waveform}
          oscillator={oscillator} order={order}
          totalBeats={totalBeats} bpm={bpm}
          repeatx={repeatx} maxBeats={maxBeats}
          onSelectionChange={this.onSelectionChange}
          onOctaveChange={this.onOctaveChange}
        />
        <AllKeyboards
          selectedScale={selectedScale} startingNote={selectedKey}
          selectedOctave={selectedOctave} nextOctave={nextOctave}
          order={order} totalBeats={totalBeats}
          repeatx={repeatx} bpm={bpm}
          waveform={waveform} oscillator={oscillator}
          getMaxBeats={this.getMaxBeats}
        />
      </div>
    )
  }
}

export default App;
