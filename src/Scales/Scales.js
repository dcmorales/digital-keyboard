import React from 'react'
import { cutPoints } from './cutPoints'

class Scales extends React.Component {
  renderScale() {
    const { selectedScale, notesDefined, noteValue } = this.props;
    const newPoint = notesDefined.slice(noteValue)
    const oldPoint = notesDefined.slice(0, noteValue)
    const lastNote = newPoint.slice(0, 1)
    const lastPoint = oldPoint.concat(lastNote)
    const combinedNotes = newPoint.concat(oldPoint, lastNote)
    if (selectedScale === 'chromatic') {
      this.props.renderPlayButton(noteValue, newPoint, lastPoint)
    } else if (selectedScale === 'major') {
      this.renderScaleNotes(noteValue, combinedNotes, 2, 0)
    } else if (selectedScale === 'natural minor') {
      this.renderScaleNotes(noteValue, combinedNotes, 3, 0)
    } else if (selectedScale === 'harmonic minor') {
      this.renderScaleNotes(noteValue, combinedNotes, 4, 0)
    } else if (selectedScale === 'melodic minor') {
      this.renderScaleNotes(noteValue, combinedNotes, 5, 0)
    } else if (selectedScale === 'pentatonic') {
      this.renderScaleNotes(noteValue, combinedNotes, 6, 1)
    }
  }

  renderScaleNotes(noteValue, combinedNotes, scaleNum, cpNum) {
    const scaleNotes = cutPoints[scaleNum].map(point => combinedNotes.slice(point[0], point[1]))
    const scaleCombined = scaleNotes[0].concat(scaleNotes[1], scaleNotes[2], scaleNotes[3], scaleNotes[4], scaleNotes[5])
    const slicePoint = cutPoints[cpNum][noteValue]
    const scaleNow = scaleCombined.slice(0, slicePoint)
    const scaleNext = scaleCombined.slice(slicePoint, 8)
    this.props.renderPlayButton(noteValue, scaleNow, scaleNext)
  }

  // var animals = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C'];
  //
  //   console.log(animals.slice(0, 1));
  //
  //
  //   console.log(animals.slice(2, 4));
  //
  //
  //   console.log(animals.slice(5, 6));
  //   console.log(animals.slice(7, 9));
  //   console.log(animals.slice(11, 13));
  //   console.log(animals.slice(12, 13));

  render() {
    return (
      <button onClick={() => this.renderScale()}>
        Play selected keys
      </button>
    )
  }
}

export default Scales;
