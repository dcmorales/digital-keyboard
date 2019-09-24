import React from 'react'
import Octave from './Octave'

const Keyboard = ({ waveform, oscillator }) => {
  return (
    <div className='keyboard-container'>

      <Octave octNum='1' waveform={waveform} oscillator={oscillator} />

      <Octave octNum='2' waveform={waveform} oscillator={oscillator} />

      <Octave octNum='3' waveform={waveform} oscillator={oscillator} />

      <Octave octNum='4' waveform={waveform} oscillator={oscillator} />

      <Octave octNum='5' waveform={waveform} oscillator={oscillator} />

      <Octave octNum='6' waveform={waveform} oscillator={oscillator} />

      <Octave octNum='7' waveform={waveform} oscillator={oscillator} />

    </div>
  )
}

export default Keyboard;
