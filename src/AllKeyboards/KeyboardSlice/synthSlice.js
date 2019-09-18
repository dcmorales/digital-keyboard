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

  playNote(sliceOrder, order, newPoint, waveform, oscillator, selectedOctave, nextOctave, totalBeats) {
    var offset = 1500
    sliceOrder.forEach(notesDefinedSlice => {
      const octave = notesDefinedSlice === newPoint || totalBeats !== 'all' ? selectedOctave : nextOctave
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
    document.getElementById(`${noteFull} slice`)
      .setAttribute('class', `${noteFull} ${otherClassName}`)
    document.getElementById(`${noteFull} full`)
      .setAttribute('class', `${noteFull} ${otherClassName}`)
  },

  highlightNote(note, octave) {
    const noteFull = `${note}${octave}`
    setTimeout(() => {
      this.handleNoteHighlight(noteFull, 'note')
    }, 450)
    this.handleNoteHighlight(noteFull, 'active')
  }

};
