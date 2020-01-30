import React from 'react';
import SelectionContext from '../../contexts/SelectionContext';
import SliceSection from './SliceSection';

class SelectedKeyboardSlice extends React.Component {
  static contextType = SelectionContext;

  renderSelectedKeys() {
    const { notesDefined, noteValue } = this.props;
    const newPoint = notesDefined
      .slice(noteValue)
      .map(point => point + this.context.selectedOctave);
    const oldPoint = notesDefined.slice(0, noteValue);
    const lastNote = notesDefined.slice(noteValue)[0];
    const lastPoint = oldPoint
      .concat(lastNote)
      .map(point => point + this.context.nextOctave);
    return (
      <div className="octave-container">
        <SliceSection
          notesDefinedSlice={newPoint}
          oscillator={this.context.oscillator}
        />

        <SliceSection
          notesDefinedSlice={lastPoint}
          oscillator={this.context.oscillator}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="keyboard-container">{this.renderSelectedKeys()}</div>
    );
  }
}

export default SelectedKeyboardSlice;
