import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


export default function RocketGirl() {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets8.lottiefiles.com/packages/lf20_1luftwvr.json"
        style={{ height: '500px', width: '500px' }}
      >
      </Player>
    </div>
  )
}
