import React from 'react'

class HighlightScale extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.highlightScaleNotes()
    }, 600)
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.highlightScaleNotes()
    }, 300)
  }

  highlightScaleNotes() {
    const scaleNotes = this.props.renderScale()[0].concat(this.props.renderScale()[1])
    scaleNotes.map(noteFull => document.getElementById(`${noteFull} slice`)
      .setAttribute('class', `${noteFull} scale-note`))
    scaleNotes.map(noteFull => document.getElementById(`${noteFull} full`)
      .setAttribute('class', `${noteFull} scale-note`))
  }

  highlightNote(noteFull) {
    setTimeout(() => {
      this.handleNoteHighlight(noteFull, 'note')
    }, 450)
    this.handleNoteHighlight(noteFull, 'active')
  }

  handleNoteHighlight(noteFull, otherClassName) {
    document.getElementById(`${noteFull} slice`)
      .setAttribute('class', `${noteFull} ${otherClassName}`)
    document.getElementById(`${noteFull} full`)
      .setAttribute('class', `${noteFull} ${otherClassName}`)
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
