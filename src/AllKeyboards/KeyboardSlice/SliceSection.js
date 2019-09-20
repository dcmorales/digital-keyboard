import React from 'react';
import Key from '../Keyboard/Key'

const SliceSection = ({ notesDefinedSlice, waveform, oscillator, duration }) => {
  return ( notesDefinedSlice.map(noteFull => {
    return (
      <div  className='keys' key={noteFull}>
        <Key
          color={noteFull.includes('b') ? 'black2' : 'white'}
          noteFull={noteFull}
          waveform={waveform}
          oscillator={oscillator}
          duration={duration}
          octave={noteFull.includes('b') ? noteFull[2] : noteFull[1]}
          keyboard='slice'
        />
      </div>
    )
  }))
}

export default SliceSection;
