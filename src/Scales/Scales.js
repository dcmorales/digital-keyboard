import React from 'react'

class Scales extends React.Component {
  renderScale() {
    const { selectedScale, notesDefined, noteValue } = this.props;
    if (selectedScale === '') {
      const newPoint = notesDefined.slice(noteValue)
      const oldPoint = notesDefined.slice(0, noteValue)
      const lastNote = newPoint.slice(0, 1)
      this.props.renderPlayButton(noteValue, newPoint, oldPoint, lastNote)
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
