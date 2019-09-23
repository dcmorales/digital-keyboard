import React from 'react'

class HighlightScale extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.highlightScaleNotes()
    }, 600)
  }

  componentDidUpdate() {
    const scaleNotes = this.props.renderScale()[0].concat(this.props.renderScale()[1])
    setTimeout(() => {
      scaleNotes.map(noteFull => document.getElementsByClassName('scale-note full')[0]
        .setAttribute('class', `${noteFull} note full`))
      scaleNotes.map(noteFull => document.getElementsByClassName('scale-note slice')[0]
        .setAttribute('class', `${noteFull} note slice`))
      this.highlightScaleNotes()
    }, 300)
  }

  highlightScaleNotes() {
    const scaleNotes = this.props.renderScale()[0].concat(this.props.renderScale()[1])
    scaleNotes.map(noteFull => document.getElementById(`${noteFull} slice`)
      .setAttribute('class', `${noteFull} scale-note slice`))
    scaleNotes.map(noteFull => document.getElementById(`${noteFull} full`)
      .setAttribute('class', `${noteFull} scale-note full`))
  }

  render() {
    return (
      <button onClick={() => this.highlightScaleNotes()}>
        highlight
      </button>
    )
  }
}

export default HighlightScale;
