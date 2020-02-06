import React from 'react';

import SelectionContext from '../../../contexts/SelectionContext';
import { highlight } from '../../../utils/highlight';

class HighlightScale extends React.Component {
  static contextType = SelectionContext;

  firstHighlight() {
    const { noteValue } = this.props;
    const { selectedOctave, nextOctave, selectedScale } = this.context;
    const scaleInfo = [selectedOctave, nextOctave, selectedScale, noteValue];
    setTimeout(() => {
      highlight.allScaleNotes(scaleInfo);
    }, 300);
  }

  componentDidUpdate() {
    const { noteValue } = this.props;
    const { selectedOctave, nextOctave, selectedScale } = this.context;
    const scaleInfo = [selectedOctave, nextOctave, selectedScale, noteValue];
    highlight.clearScaleNotes(scaleInfo);
    highlight.allScaleNotes(scaleInfo);
  }

  render() {
    return <div>{this.firstHighlight()}</div>;
  }
}

export default HighlightScale;
