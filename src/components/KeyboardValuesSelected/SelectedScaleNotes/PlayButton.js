import React from 'react';

import SelectionContext from '../../../context/SelectionContext';
import { defineScale } from '../../../utils/defineScale';
import { updateScale } from '../../../utils/updateScale';

class PlayButton extends React.Component {
  static contextType = SelectionContext;

  componentDidUpdate(prevProps) {
    const { noteValue } = this.props;
    const { selectedOctave, nextOctave, selectedScale } = this.context;
    const scaleInfo = { selectedOctave, nextOctave, selectedScale, noteValue };
    const maxBeatArray = defineScale
      .renderNotes(scaleInfo)[0]
      .concat(defineScale.renderNotes(scaleInfo)[1]);
    if (this.props.selectedScale !== prevProps.selectedScale) {
      this.context.getMaxBeats(maxBeatArray.length);
    }
  }

  renderPlayButton = (notesArray) => {
    const {
      order,
      waveform,
      oscillator,
      totalBeats,
      bpm,
      noteLength,
      repeatx,
    } = this.context;
    const sliceOrder =
      order === 'descending' ? notesArray.reverse() : notesArray;
    const updateInfo = {
      sliceOrder,
      order,
      waveform,
      oscillator,
      totalBeats,
      bpm,
      noteLength,
      repeatx,
      notesArray,
    };
    if (order !== 'random') {
      updateScale.handleNewScaleNotes(updateInfo);
    } else {
      updateScale.handleNoteShuffle(updateInfo);
    }
    this.props.updateNotesDisplay(updateInfo);
  };

  render() {
    const { noteValue } = this.props;
    const { selectedOctave, nextOctave, selectedScale } = this.context;
    const scaleInfo = { selectedOctave, nextOctave, selectedScale, noteValue };
    return (
      <div>
        <button
          id="play-button"
          className="play-button"
          onClick={() =>
            this.renderPlayButton(
              defineScale
                .renderNotes(scaleInfo)[0]
                .concat(defineScale.renderNotes(scaleInfo)[1])
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
