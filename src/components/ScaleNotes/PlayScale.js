import React from 'react';
import { synthSlice } from '../../utils/synthSlice';

class PlayScale extends React.Component {
  state = {
    notesPlayed: [],
  };

  componentDidUpdate(prevProps) {
    const maxBeatArray = this.props
      .renderScale()[0]
      .concat(this.props.renderScale()[1]);
    if (this.props.selectedScale !== prevProps.selectedScale) {
      this.props.getMaxBeats(maxBeatArray.length);
    }
  }

  renderPlayButton = (newStart, lastPoint) => {
    const { order } = this.props;
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
    const { totalBeats } = this.props;
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
    const { totalBeats, repeatx } = this.props;
    const noteArrayFragment = [noteArrays[0].concat(noteArrays[1])];
    const fragmentSlice = [noteArrayFragment[0].slice(0, totalBeats)];
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
    } = this.props;
    synthSlice.playNote(
      sliceOrder,
      order,
      newStart,
      waveform,
      oscillator,
      totalBeats,
      bpm,
      noteLength
    );
    synthSlice.stopNote(sliceOrder, order, bpm, noteLength);
    this.displayNotes(sliceOrder[0].concat(sliceOrder[1]));
  }

  displayNotes(notesPlayed) {
    this.setState({ notesPlayed: notesPlayed });
  }

  render() {
    return (
      <div>
        <button
          id="play-button"
          onClick={() =>
            this.renderPlayButton(
              this.props.renderScale()[0],
              this.props.renderScale()[1]
            )
          }
        >
          Play keys
        </button>
        <div className="notes-played">
          Notes that were played: {this.state.notesPlayed.join('-')}
        </div>
      </div>
    );
  }
}

export default PlayScale;
