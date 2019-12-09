import { synth } from '../Keyboard/synth'

export const synthSlice = {

  stopNote(sliceOrder, order, bpm) {
    var offsetPlus = 300
    var bpmToMs = parseInt((60000/bpm), 10)
    sliceOrder.forEach(notesDefinedSlice => {
      const noteOrder = order === 'descending' ? notesDefinedSlice.reverse() : notesDefinedSlice
      noteOrder.forEach(noteFull => {
        setTimeout(() => {
          synth.noteOff(noteFull)
        }, offsetPlus)
        offsetPlus += bpmToMs})
    })
  },

  playNote(sliceOrder, order, newPoint, waveform, oscillator, totalBeats, bpm) {
    var offsetPlus = 200
    var bpmToMs = parseInt((60000/bpm), 10)
    sliceOrder.forEach(notesDefinedSlice => {
      const noteOrder = order === 'descending' ? notesDefinedSlice.reverse() : notesDefinedSlice
      noteOrder.forEach(noteFull => {
        const octave = noteFull.includes('b') ? noteFull[2] : noteFull[1]
        setTimeout(() => {
          synth.play(noteFull, waveform, oscillator, octave)
          this.highlightNote(noteFull)
        }, offsetPlus)
        offsetPlus += bpmToMs})
    })
    this.disableButtons(offsetPlus += bpmToMs)
    console.log(sliceOrder[0].concat(sliceOrder[1]))
  },

  disableButtons(offset) {
    const selectionsArray = Array.from(document.getElementsByClassName('selections'))
    const keysArray = Array.from(document.getElementsByClassName('key'))
    const buttons = selectionsArray.concat(keysArray)
    document.getElementById('play-button').setAttribute('disabled', 'disbaled')
    buttons.map(button => button.setAttribute('disabled', 'disabled'))
    setTimeout(() => {
      document.getElementById('play-button').removeAttribute('disabled')
      buttons.map(button => button.removeAttribute('disabled'))
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
