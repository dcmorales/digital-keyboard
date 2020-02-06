import React from 'react';

import SelectionContext from '../../../contexts/SelectionContext';
import { defineScale } from '../../../utils/defineScale';

class HighlightScale extends React.Component {
  static contextType = SelectionContext;

  firstHighlight() {
    setTimeout(() => {
      this.highlightScaleNotes();
    }, 300);
  }

  componentDidMount() {
    this.firstHighlight();
  }

  componentDidUpdate() {
    this.clearHighlight();
    this.highlightScaleNotes();
  }

  highlightScaleNotes() {
    const { noteValue } = this.props;
    const { selectedOctave, nextOctave, selectedScale } = this.context;
    const scaleInfo = [selectedOctave, nextOctave, selectedScale, noteValue];
    const scaleNotes = defineScale
      .renderNotes(scaleInfo)[0]
      .concat(defineScale.renderNotes(scaleInfo)[1]);
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
    const scaleInfo = [selectedOctave, nextOctave, selectedScale, noteValue];
    const sliceNotes = defineScale.renderNotes(scaleInfo)[2];
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
    const scaleInfo = [selectedOctave, nextOctave, selectedScale, noteValue];
    const allNotes = defineScale.renderNotes(scaleInfo)[3];
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
