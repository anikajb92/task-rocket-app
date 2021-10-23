import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


export default function RocketGirl() {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_3gwaboe0.json"
        style={{ height: '500px', width: '500px' }}
      >
      </Player>
    </div>
  )
}
