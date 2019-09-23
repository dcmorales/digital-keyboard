import React from 'react'

class HighlightScale extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.highlightScaleNotes()
    }, 600)
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.clearHighlight()
      this.highlightScaleNotes()
    }, 300)
  }

  highlightScaleNotes() {
    const scaleNotes = this.props.renderScale()[0].concat(this.props.renderScale()[1])
    scaleNotes.map(noteFull => document.getElementById(`${noteFull} full`)
      .setAttribute('class', `${noteFull} scale-note`))
    scaleNotes.map(noteFull => document.getElementById(`${noteFull} slice`)
      .setAttribute('class', `${noteFull} scale-note`))
  }

  clearHighlight() {
    const sliceNotes = this.props.renderScale()[2]
    sliceNotes.map(noteFull => document.getElementsByClassName('scale-note')[0]
      .setAttribute('class', 'note'))
    sliceNotes.map(noteFull => document.getElementById(`${noteFull} slice`)
      .setAttribute('class', 'note'))
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
