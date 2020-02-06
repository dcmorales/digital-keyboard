import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';
import { scale } from '../../utils/scale';

class HighlightScale extends React.Component {
  static contextType = SelectionContext;

  firstHighlight() {
    setTimeout(() => {
      this.highlightScaleNotes();
    }, 300);
  }

  componentDidUpdate() {
    this.clearHighlight();
    this.highlightScaleNotes();
  }

  highlightScaleNotes() {
    const { noteValue } = this.props;
    const { selectedOctave, nextOctave, selectedScale } = this.context;
    const scaleNotes = scale
      .renderScale(selectedOctave, nextOctave, selectedScale, noteValue)[0]
      .concat(
        scale.renderScale(
          selectedOctave,
          nextOctave,
          selectedScale,
          noteValue
        )[1]
      );
    scaleNotes.map(noteFull =>
      document
        .getElementById(`${noteFull} full`)
        .setAttribute('class', `${noteFull} scale-note`)
    );
    scaleNotes.map(noteFull =>
      document
        .getElementById(`${noteFull} slice`)
        .setAttribute('class', `${noteFull} scale-note`)
    );
  }

  clearHighlight() {
    const { noteValue } = this.props;
    const { selectedOctave, nextOctave, selectedScale } = this.context;
    const sliceNotes = scale.renderScale(
      selectedOctave,
      nextOctave,
      selectedScale,
      noteValue
    )[2];
    sliceNotes.map(noteFull =>
      document.getElementById(`${noteFull} slice`).setAttribute('class', 'note')
    );
    for (var i = 1; i < 8; i++) {
      this.getAllNotes(i);
    }
  }

  getAllNotes(i) {
    const { noteValue } = this.props;
    const { selectedOctave, nextOctave, selectedScale } = this.context;
    const allNotes = scale.renderScale(
      selectedOctave,
      nextOctave,
      selectedScale,
      noteValue
    )[3];
    allNotes.map(noteFull =>
      document
        .getElementById(`${noteFull}${i} full`)
        .setAttribute('class', 'note')
    );
  }

  render() {
    return <div>{this.firstHighlight()}</div>;
  }
}

export default HighlightScale;
