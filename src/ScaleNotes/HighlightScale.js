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
    for ( var i = 1; i < 8; i++ ) {
      const allNotes = this.props.renderScale()[3]
      allNotes.map(noteFull => document.getElementById(`${noteFull}${i} full`)
        .setAttribute('class', 'note'))
    }
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