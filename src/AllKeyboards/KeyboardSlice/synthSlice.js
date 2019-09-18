import { synth } from '../Keyboard/synth'

export const synthSlice = {

  stopNote(sliceOrder, order) {
    var offset = 1600
    sliceOrder.forEach(notesDefinedSlice => {
      const noteOrder = order === 'descending' ? notesDefinedSlice.reverse() : notesDefinedSlice
      noteOrder.forEach(note => {
        setTimeout(() => {
          synth.noteOff(note)
        }, offset)
        offset += 500})
    })
  },

  playNote(sliceOrder, order, newPoint, waveform, oscillator, selectedOctave, nextOctave) {
    var offset = 1500
    sliceOrder.forEach(notesDefinedSlice => {
      const octave = notesDefinedSlice === newPoint ? selectedOctave : nextOctave
      const noteOrder = order === 'descending' ? notesDefinedSlice.reverse() : notesDefinedSlice
      noteOrder.forEach(note => {
        setTimeout(() => {
          synth.play(note, waveform, oscillator, octave, note)
          this.highlightNote(note, octave)
        }, offset)
        offset += 500})
    })
  },

  handleNoteHighlight(noteFull, otherClassName) {
    document.getElementById(noteFull)
      .setAttribute('class', `${noteFull} ${otherClassName}`)
    document.getElementsByClassName(noteFull)[1]
      .setAttribute('class', `${noteFull} ${otherClassName}`)
  },

  highlightNote(note, octave) {
    const noteFull = `${note}${octave}`
    setTimeout(() => {
      this.handleNoteHighlight(noteFull, 'note')
    }, 500)
    this.handleNoteHighlight(noteFull, 'active')
  }

};
