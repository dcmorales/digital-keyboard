import React from 'react'

class HighlightScale extends React.Component {
  firstHighlight() {
    setTimeout(() => {
      this.highlightScaleNotes()
    }, 300)
  }

  componentDidUpdate() {
    this.clearHighlight()
    this.highlightScaleNotes()
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
    sliceNotes.map(noteFull => document.getElementById(`${noteFull} slice`)
      .setAttribute('class', 'note'))
    for ( var i = 1; i < 8; i++ ) {
      this.getAllNotes(i)
    }
  }

  getAllNotes(i) {
    const allNotes = this.props.renderScale()[3]
    allNotes.map(noteFull => document.getElementById(`${noteFull}${i} full`)
      .setAttribute('class', 'note'))
  }

  render() {
    return (
      <div>{this.firstHighlight()}</div>
    )
  }
}

export default HighlightScale;
