import { synth } from '../Keyboard/synth'

export const synthSlice = {

  stopNote(sliceOrder, order, offset) {
    var offsetPlus = 300
    var offsetInteger = parseInt(offset, 10)
    sliceOrder.forEach(notesDefinedSlice => {
      const noteOrder = order === 'descending' ? notesDefinedSlice.reverse() : notesDefinedSlice
      noteOrder.forEach(noteFull => {
        setTimeout(() => {
          synth.noteOff(noteFull)
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
    })
    this.disablePlayButton(offsetPlus += offsetInteger)
    console.log(sliceOrder[0].concat(sliceOrder[1]))
  },

  disablePlayButton(offset) {
    const selectionsArray = Array.from(document.getElementsByClassName('selections'))
    document.getElementById('play-button').setAttribute('disabled', 'disbaled')
    selectionsArray.map(selection => selection.setAttribute('disabled', 'disabled'))
    setTimeout(() => {
      document.getElementById('play-button').removeAttribute('disabled')
      selectionsArray.map(selection => selection.removeAttribute('disabled', 'disabled'))
    }, offset)
  },

  highlightNote(noteFull) {
    setTimeout(() => {
      this.handleNoteHighlight(noteFull, 'scale-note')
    }, 450)
    this.handleNoteHighlight(noteFull, 'active')
  },

  handleNoteHighlight(noteFull, otherClassName) {
    document.getElementById(`${noteFull} full`)
      .setAttribute('class', `${noteFull} ${otherClassName}`)
    document.getElementById(`${noteFull} slice`)
      .setAttribute('class', `${noteFull} ${otherClassName}`)
  }

};
