import React from 'react';

import SelectionContext from '../../../context/SelectionContext';
import { defineScale } from '../../../utils/defineScale';
import { highlight } from '../../../utils/highlight';

class HighlightScale extends React.Component {
  static contextType = SelectionContext;

  firstHighlight() {
    setTimeout(() => {
      this.highlightScaleNotes();
    }, 300);
  }

  componentDidUpdate() {
    const { noteValue } = this.props;
    const { selectedOctave, nextOctave, selectedScale } = this.context;
    const scaleInfo = [selectedOctave, nextOctave, selectedScale, noteValue];
    highlight.clearScaleNotes(scaleInfo);
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
        .setAttribute('class', `${noteFull} note__scale-note`)
    );
    scaleNotes.map(noteFull =>
      document
        .getElementById(`${noteFull} slice`)
        .setAttribute('class', `${noteFull} note__scale-note`)
    );
  }

  render() {
    return <div>{this.firstHighlight()}</div>;
  }
}

export default HighlightScale;
