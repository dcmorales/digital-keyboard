import React from 'react';
import Key from '../Keyboard/Key'

const SliceSection = ({ notesDefinedSlice, octave, waveform, oscillator, duration }) => {
  return ( notesDefinedSlice.map((note, i) => {
    return (
      <div  className='keys' key={note}>
        <Key
          color={note.includes('b') ? 'black2' : 'white'}
          noteFull={note}
          waveform={waveform}
          oscillator={oscillator}
          duration={duration}
          octave={note.includes('b') ? note[2] : note[1]}
          keyboard='slice'
        />
      </div>
    )
  }))
}


export default SliceSection;
