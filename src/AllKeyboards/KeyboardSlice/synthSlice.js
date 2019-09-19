import { synth } from '../Keyboard/synth'

export const synthSlice = {

  stopNote(sliceOrder, order, offset) {
    var offsetPlus = 300
    var offsetInteger = parseInt(offset, 10)
    sliceOrder.forEach(notesDefinedSlice => {
      const noteOrder = order === 'descending' ? notesDefinedSlice.reverse() : notesDefinedSlice
      noteOrder.forEach(note => {
        setTimeout(() => {
          synth.noteOff(note)
        }, offsetPlus)
        offsetPlus += offsetInteger})
    })
  },

  playNote(sliceOrder, order, newPoint, waveform, oscillator, totalBeats, offset) {
    var offsetPlus = 200
    var offsetInteger = parseInt(offset, 10)
    sliceOrder.forEach(notesDefinedSlice => {
      const noteOrder = order === 'descending' ? notesDefinedSlice.reverse() : notesDefinedSlice
      noteOrder.forEach(noteFull => {
        const octave = noteFull.includes('b') ? noteFull[2] : noteFull[1]
        setTimeout(() => {
          synth.play(noteFull, waveform, oscillator, octave)
          this.highlightNote(noteFull)
        }, offsetPlus)
        offsetPlus += offsetInteger})
        console.log(noteOrder)
    })
  },

  handleNoteHighlight(noteFull, otherClassName) {
    document.getElementById(`${noteFull} slice`)
      .setAttribute('class', `${noteFull} ${otherClassName}`)
    document.getElementById(`${noteFull} full`)
      .setAttribute('class', `${noteFull} ${otherClassName}`)
  },

  highlightNote(noteFull) {
    setTimeout(() => {
      this.handleNoteHighlight(noteFull, 'note')
    }, 450)
    this.handleNoteHighlight(noteFull, 'active')
  }

};
