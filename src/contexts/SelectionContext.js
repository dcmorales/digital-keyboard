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
    totalBeats: '',
    repeatx: 0,
    bpm: 125,
    noteLength: 4,
  };

  onOctaveChange = async e => {
    await this.setState({ selectedOctave: e.target.value });
    await this.onNextOctaveChange();
  };

  onNextOctaveChange = async e => {
    const { selectedOctave } = this.state;
    var selOctNum = parseInt(selectedOctave, 10);
    for (var i = selectedOctave; i <= selOctNum + 1; i++) {
      this.setState({ nextOctave: i });
    }
  };

  onSelectionChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onSelectionChange: this.onSelectionChange,
          onOctaveChange: this.onOctaveChange,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
