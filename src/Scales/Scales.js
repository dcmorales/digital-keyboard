import React from 'react'
import { cutPoints } from './cutPoints'

class Scales extends React.Component {
  renderScale() {
    const { selectedScale, notesDefined, noteValue, selectedOctave, nextOctave } = this.props;
    const newPoint = notesDefined.slice(noteValue).map(point => point + selectedOctave)
    const oldPoint = notesDefined.slice(0, noteValue)
    const lastNote = notesDefined.slice(noteValue)[0]
    const lastPoint = oldPoint.concat(lastNote).map(point => point + nextOctave)
    const combinedNotes = newPoint.concat(lastPoint)
    if (selectedScale === 'chromatic') {
      this.props.renderPlayButton(newPoint, lastPoint)
    } else {
      const scaleNum =
        selectedScale === 'major'
                              ? 0 : (
        selectedScale === 'natural minor'
                              ? 1 : (
        selectedScale === 'harmonic minor'
                              ? 2 : (
        selectedScale === 'melodic minor'
                              ? 3 : (
        selectedScale === 'major pentatonic'
                              ? 4 : (
        selectedScale === 'minor pentatonic'
                              ? 5 : (
        selectedScale === 'blues'
                              ? 6 : null
      ))))))
      this.renderScaleNotes(combinedNotes, scaleNum)
    }
  }

  renderScaleNotes(combinedNotes, scaleNum) {
    const { noteValue } = this.props;
    const scaleNotes = cutPoints[1][scaleNum].map(point => combinedNotes.slice(point[0], point[1]))
    const scaleCombined = scaleNotes[0].concat(scaleNotes[1], scaleNotes[2], scaleNotes[3], scaleNotes[4], scaleNotes[5])
    const slicePoint = cutPoints[0][noteValue][scaleNum]
    const scaleNow = scaleCombined.slice(0, slicePoint)
    const scaleNext = scaleCombined.slice(slicePoint, 8)
    this.props.renderPlayButton(scaleNow, scaleNext)
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
