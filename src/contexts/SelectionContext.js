import React from 'react';

const Context = React.createContext();

export class SelectionStore extends React.Component {
  state = {
    selectedScale: 'chromatic',
    selectedKey: 'C',
    selectedOctave: 3,
    nextOctave: 4,
    waveform: 'sawtooth',
    oscillator: '',
    order: 'ascending',
    totalBeats: 13,
    maxBeats: 13,
    repeatx: 0,
    bpm: 125,
    noteLength: 4,
  };

  onOctaveChange = async e => {
    await this.setState({ selectedOctave: e.target.value });
    await this.onNextOctaveChange();
  };

  onNextOctaveChange = e => {
    const { selectedOctave } = this.state;
    var selOctNum = parseInt(selectedOctave, 10);
    for (var i = selectedOctave; i <= selOctNum + 1; i++) {
      this.setState({ nextOctave: i });
    }
  };

  onSelectionChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getMaxBeats = maxBeats => {
    this.setState({ maxBeats: maxBeats, totalBeats: maxBeats });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onSelectionChange: this.onSelectionChange,
          onOctaveChange: this.onOctaveChange,
          getMaxBeats: this.getMaxBeats,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
