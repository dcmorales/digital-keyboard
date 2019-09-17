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
    const major = cutPoints[1].map(point => combinedNotes.slice(point[0], point[1]))
    const majorCombined = major[0].concat(major[1], major[2], major[3], major[4], major[5])
    const majorNow = majorCombined.slice(0, cutPoints[0][noteValue])
    const majorNext = majorCombined.slice(cutPoints[0][noteValue], 8)
    if (selectedScale === '') {
      this.props.renderPlayButton(noteValue, newPoint, lastPoint)
    } else if (selectedScale === 'major') {
      this.props.renderPlayButton(noteValue, majorNow, majorNext)
    }
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
