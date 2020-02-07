import React from 'react';

import SelectionContext from '../../../contexts/SelectionContext';
import { defineScale } from '../../../utils/defineScale';
import { updateScale } from '../../../utils/updateScale';

class PlayButton extends React.Component {
  static contextType = SelectionContext;

  componentDidUpdate(prevProps) {
    const { noteValue } = this.props;
    const { selectedOctave, nextOctave, selectedScale } = this.context;
    const scaleInfo = [selectedOctave, nextOctave, selectedScale, noteValue];
    const maxBeatArray = defineScale
      .renderNotes(scaleInfo)[0]
      .concat(defineScale.renderNotes(scaleInfo)[1]);
    if (this.props.selectedScale !== prevProps.selectedScale) {
      this.context.getMaxBeats(maxBeatArray.length);
    }
  }

  renderPlayButton = (newStart, lastPoint) => {
    const noteArrays = [newStart, lastPoint];
    const sliceOrder =
      this.context.order === 'descending' ? noteArrays.reverse() : noteArrays;
    const updateInfo = [
      sliceOrder,
      this.context.order,
      this.context.waveform,
      this.context.oscillator,
      this.context.totalBeats,
      this.context.bpm,
      this.context.noteLength,
      this.context.repeatx,
      newStart,
      lastPoint,
      noteArrays,
    ];
    if (this.context.order !== 'random') {
      updateScale.handleNewScaleNotes(updateInfo);
    } else {
      updateScale.handleNoteShuffle(updateInfo);
    }
    this.props.updateNotesDisplay(updateInfo);
  };

  render() {
    const { noteValue } = this.props;
    const { selectedOctave, nextOctave, selectedScale } = this.context;
    const scaleInfo = [selectedOctave, nextOctave, selectedScale, noteValue];
    return (
      <div>
        <button
          id="play-button"
          onClick={() =>
            this.renderPlayButton(
              defineScale.renderNotes(scaleInfo)[0],
              defineScale.renderNotes(scaleInfo)[1]
            )
          }
        >
          Play keys
        </button>
      </div>
    );
  }
}

export default PlayButton;
