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
      this.renderScaleNotes(noteValue, combinedNotes, 6, 0)
    } else if (selectedScale === 'natural minor') {
      this.renderScaleNotes(noteValue, combinedNotes, 7, 1)
    } else if (selectedScale === 'harmonic minor') {
      this.renderScaleNotes(noteValue, combinedNotes, 8, 2)
    } else if (selectedScale === 'melodic minor') {
      this.renderScaleNotes(noteValue, combinedNotes, 9, 3)
    } else if (selectedScale === 'major pentatonic') {
      this.renderScaleNotes(noteValue, combinedNotes, 10, 4)
    } else if (selectedScale === 'minor pentatonic') {
      this.renderScaleNotes(noteValue, combinedNotes, 11, 4)
    } else if (selectedScale === 'blues') {
      this.renderScaleNotes(noteValue, combinedNotes, 12, 5)
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

  render() {
    return (
      <button onClick={() => this.renderScale()}>
        Play selected keys
      </button>
    )
  }
}

export default Scales;
