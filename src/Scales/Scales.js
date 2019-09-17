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
    } else {
      const selectNums =
        selectedScale === 'major' ? [1, 0] : (
        selectedScale === 'natural minor' ? [2, 1] : (
        selectedScale === 'harmonic minor' ? [3, 2] : (
        selectedScale === 'melodic minor' ? [4, 3] : (
        selectedScale === 'major pentatonic' ? [5, 4] : (
        selectedScale === 'minor pentatonic' ? [6, 5] : (
        selectedScale === 'blues' ? [7, 6] : null
      ))))))
      this.renderScaleNotes(noteValue, combinedNotes, selectNums[0], selectNums[1])
    }
  }

  renderScaleNotes(noteValue, combinedNotes, scaleNum, cpNum) {
    const scaleNotes = cutPoints[scaleNum].map(point => combinedNotes.slice(point[0], point[1]))
    const scaleCombined = scaleNotes[0].concat(scaleNotes[1], scaleNotes[2], scaleNotes[3], scaleNotes[4], scaleNotes[5])
    const slicePoint = cutPoints[0][noteValue][cpNum]
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
