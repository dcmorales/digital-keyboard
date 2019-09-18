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

  playNote(sliceOrder, order, newPoint, waveform, oscillator, selectedOctave, nextOctave, totalBeats, offset) {
    var offsetPlus = 200
    var offsetInteger = parseInt(offset, 10)
    sliceOrder.forEach(notesDefinedSlice => {
      const octave = notesDefinedSlice === newPoint || totalBeats !== 'all' ? selectedOctave : nextOctave
      const noteOrder = order === 'descending' ? notesDefinedSlice.reverse() : notesDefinedSlice
      noteOrder.forEach(note => {
        setTimeout(() => {
          synth.play(note, waveform, oscillator, octave, note)
          this.highlightNote(note, octave)
          console.log(note, octave)
        }, offsetPlus)
        offsetPlus += offsetInteger})
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
