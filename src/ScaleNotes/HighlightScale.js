import React from 'react'

class HighlightScale extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.renderScaleNotes()
    }, 600)
  }

  renderScaleNotes() {
    const scaleNotes = this.props.renderScale()[0].concat(this.props.renderScale()[0])
    scaleNotes.map(noteFull => document.getElementById(`${noteFull} slice`)
      .setAttribute('class', `${noteFull} scale-note`))
    scaleNotes.map(noteFull => document.getElementById(`${noteFull} full`)
      .setAttribute('class', `${noteFull} scale-note`))
  }

  render() {
    return (
      <button onClick={() => this.renderScaleNotes()}>
        highlight
      </button>
    )
  }
}

export default HighlightScale;
