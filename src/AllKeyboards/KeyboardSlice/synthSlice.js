import { synth } from '../Keyboard/synth'

export const synthSlice = {

  stopNote(noteArrays, newPoint, oldPoint, lastNote) {
    var offset = 1600
    noteArrays.forEach(notesDefinedSlice => {
      notesDefinedSlice.forEach(note => {
        setTimeout(() => {
          synth.noteOff(note)
        }, offset)
        offset += 500})
    })
  },

  playNote(noteArrays, newPoint, oldPoint,
    lastNote, waveform, oscillator, selectedOctave, nextOctave) {

    var offset = 1500
    noteArrays.forEach(notesDefinedSlice => {
      const octave =
        notesDefinedSlice === newPoint
        ? selectedOctave : nextOctave
      notesDefinedSlice.forEach(note => {
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
