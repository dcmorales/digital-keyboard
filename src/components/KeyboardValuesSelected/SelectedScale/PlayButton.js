import React from 'react';

import SelectionContext from '../../../contexts/SelectionContext';
import { playScale } from '../../../utils/playScale';
import { defineScale } from '../../../utils/defineScale';

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
    const { order } = this.context;
    const noteArrays = [newStart, lastPoint];
    const sliceOrder =
      order === 'descending' ? noteArrays.reverse() : noteArrays;
    if (order !== 'random') {
      this.renderPlayScales(newStart, sliceOrder);
    } else {
      this.handleNoteShuffle(newStart, lastPoint, noteArrays, sliceOrder);
    }
  };

  handleNoteShuffle(newStart, lastPoint, noteArrays, sliceOrder) {
    const { totalBeats } = this.context;
    const shuffleNotes = [newStart, lastPoint];
    shuffleNotes.forEach(shuffleSlice => {
      for (let i = shuffleSlice.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffleSlice[i], shuffleSlice[j]] = [shuffleSlice[j], shuffleSlice[i]];
      }
    });
    if (totalBeats === '') {
      this.renderPlayScales(newStart, sliceOrder);
    } else {
      this.handleTotalBeatChange(noteArrays, newStart);
    }
  }

  handleTotalBeatChange(noteArrays, newStart) {
    const { repeatx } = this.context;
    const noteArrayFragment = [noteArrays[0].concat(noteArrays[1])];
    const fragmentSlice = [
      noteArrayFragment[0].slice(0, this.context.totalBeats),
    ];
    var repeatFragment = [fragmentSlice[0]];
    if (repeatx !== 0) {
      for (var i = 0; i < repeatx; i++) {
        repeatFragment.push(fragmentSlice[0]);
      }
    }
    this.renderPlayScales(newStart, repeatFragment);
  }

  renderPlayScales(newStart, sliceOrder) {
    const {
      order,
      waveform,
      oscillator,
      totalBeats,
      bpm,
      noteLength,
    } = this.context;
    playScale.playNote(
      sliceOrder,
      order,
      newStart,
      waveform,
      oscillator,
      totalBeats,
      bpm,
      noteLength
    );
    playScale.stopNote(sliceOrder, order, bpm, noteLength);
    this.props.getNotesPlayed(sliceOrder[0].concat(sliceOrder[1]));
  }

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
