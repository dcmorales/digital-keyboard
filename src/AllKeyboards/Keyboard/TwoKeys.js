import React from 'react'
import Key from './Key'

const TwoKeys = ({ waveform, oscillator, duration, octave, note1, note2 }) => {
  return (
    <div className='keys'>

      <Key
        noteFull={`${note1}${octave}`}
        waveform={waveform}
        oscillator={oscillator}
        duration={duration}
        octave={octave}
        color='white'
        keyboard='full'
      />

      <Key
        noteFull={`${note2}${octave}`}
        waveform={waveform}
        oscillator={oscillator}
        duration={duration}
        octave={octave}
        color='black'
        keyboard='full'
      />

    </div>
  )
}

export default TwoKeys;
