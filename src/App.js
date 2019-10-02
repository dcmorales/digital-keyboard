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
    repeatx: 0,
    offset: 300
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

  render() {
    const { selectedScale, selectedKey, selectedOctave, nextOctave, waveform, oscillator, order, totalBeats, repeatx, offset } = this.state;
    return (
      <div>
        <Selections
          selectedScale={selectedScale} selectedKey={selectedKey}
          selectedOctave={selectedOctave} waveform={waveform}
          oscillator={oscillator} order={order}
          totalBeats={totalBeats} offset={offset}
          repeatx={repeatx}
          onSelectionChange={this.onSelectionChange}
          onOctaveChange={this.onOctaveChange}
        />
        <AllKeyboards
          selectedScale={selectedScale} startingNote={selectedKey}
          selectedOctave={selectedOctave} nextOctave={nextOctave}
          order={order} totalBeats={totalBeats}
          repeatx={repeatx} offset={offset}
          waveform={waveform} oscillator={oscillator}
        />
      </div>
    )
  }
}

export default App;
