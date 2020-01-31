import React from 'react';

import SelectionContext from '../../contexts/SelectionContext';
import { cutPoints } from '../../values/cutPoints';
import { optionsNaN } from '../../values/optionsNaN';

import HighLightScale from './HighlightScale';
import PlayScale from './PlayScale';

class SelectedScaleNotes extends React.Component {
  static contextType = SelectionContext;

  renderScale = () => {
    const { notesDefined, noteValue } = this.props;
    const { selectedOctave, nextOctave, selectedScale } = this.context;
    const newPoint = notesDefined
      .slice(noteValue)
      .map(point => point + selectedOctave);
    const oldPoint = notesDefined.slice(0, noteValue);
    const lastNote = notesDefined.slice(noteValue)[0];
    const lastPoint = oldPoint
      .concat(lastNote)
      .map(point => point + nextOctave);
    const combinedNotes = newPoint.concat(lastPoint);
    if (selectedScale === 'chromatic') {
      return [newPoint, lastPoint, combinedNotes, notesDefined];
    } else {
      const scaleNum = optionsNaN[0].indexOf(selectedScale) - 1;
      const scaleNotes = cutPoints[1][scaleNum].map(point =>
        combinedNotes.slice(point[0], point[1])
      );
      const scaleCombined = scaleNotes[0].concat(
        scaleNotes[1],
        scaleNotes[2],
        scaleNotes[3],
        scaleNotes[4],
        scaleNotes[5]
      );
      const slicePoint = cutPoints[0][noteValue][scaleNum];
      const scaleNow = scaleCombined.slice(0, slicePoint);
      const scaleNext = scaleCombined.slice(slicePoint, 8);
      return [scaleNow, scaleNext, combinedNotes, notesDefined];
    }
  };

  render() {
    return (
      <div>
        <HighLightScale renderScale={this.renderScale} />
        <PlayScale
          selectedScale={this.context.selectedScale}
          renderScale={this.renderScale}
        />
      </div>
    );
  }
}

export default SelectedScaleNotes;
