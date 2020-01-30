import React from 'react';
import SelectionContext from '../../contexts/SelectionContext';
import { cutPoints } from '../../values/cutPoints';
import HighLightScale from './HighlightScale';
import PlayScale from './PlayScale';

class ScaleNotes extends React.Component {
  static contextType = SelectionContext;

  renderScale = () => {
    const { notesDefined, noteValue } = this.props;
    const newPoint = notesDefined
      .slice(noteValue)
      .map(point => point + this.context.selectedOctave);
    const oldPoint = notesDefined.slice(0, noteValue);
    const lastNote = notesDefined.slice(noteValue)[0];
    const lastPoint = oldPoint
      .concat(lastNote)
      .map(point => point + this.context.nextOctave);
    const combinedNotes = newPoint.concat(lastPoint);
    const scaleNum =
      this.context.selectedScale === 'major'
        ? 0
        : this.context.selectedScale === 'natural minor'
        ? 1
        : this.context.selectedScale === 'harmonic minor'
        ? 2
        : this.context.selectedScale === 'melodic minor'
        ? 3
        : this.context.selectedScale === 'major pentatonic'
        ? 4
        : this.context.selectedScale === 'minor pentatonic'
        ? 5
        : this.context.selectedScale === 'blues'
        ? 6
        : null;
    if (this.context.selectedScale === 'chromatic') {
      return [newPoint, lastPoint, combinedNotes, notesDefined];
    } else {
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
    const { noteLength, bpm } = this.props;
    return (
      <div>
        <HighLightScale renderScale={this.renderScale} />
        <PlayScale
          noteLength={noteLength}
          bpm={bpm}
          selectedScale={this.context.selectedScale}
          renderScale={this.renderScale}
        />
      </div>
    );
  }
}

export default ScaleNotes;
