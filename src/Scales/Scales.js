import React from 'react'

class Scales extends React.Component {
  renderScale() {
    const { selectedScale, notesDefined, noteValue } = this.props;
    const newPoint = notesDefined.slice(noteValue)
    const oldPoint = notesDefined.slice(0, noteValue)
    const lastNote = newPoint.slice(0, 1)
    const lastPoint = oldPoint.concat(lastNote)
    const combinedNotes = newPoint.concat(oldPoint, lastNote)
    if (selectedScale === '') {
      this.props.renderPlayButton(noteValue, newPoint, lastPoint)
    } else if (selectedScale === 'major') {
      const major1 = combinedNotes.slice(0, 1)
      const major2 = combinedNotes.slice(2, 3)
      const major3 = combinedNotes.slice(4, 6)
      const major4 = combinedNotes.slice(7, 8)
      const major5 = combinedNotes.slice(9, 10)
      const major6 = combinedNotes.slice(11, 13)
      const majorCombined = major1.concat(major2, major3, major4, major5, major6)
      //const majorNow =
      //const majorNext =
      console.log(majorCombined)
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
