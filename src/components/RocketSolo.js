import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


export default function RocketSolo() {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_uu7dytpr.json"
        style={{ height: '500px', width: '500px' }}
      >
      </Player>
    </div>
  )
}
