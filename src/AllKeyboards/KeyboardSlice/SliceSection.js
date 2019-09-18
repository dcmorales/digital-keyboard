import React from 'react';
import Key from '../Keyboard/Key'

const SliceSection = ({ notesDefinedSlice, octave, waveform, oscillator, duration }) => {
  return ( notesDefinedSlice.map((note, i) => {
    return (
      <div  className='keys' key={note}>
        <Key
          color={note.includes('b') ? 'black2' : 'white'}
          noteFull={`${note}${octave}`}
          waveform={waveform}
          oscillator={oscillator}
          duration={duration}
          octave={octave}
          note={note}
          keyboard='slice'
        />
      </div>
    )
  }))
}


export default SliceSection;
