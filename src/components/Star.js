import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Star() {
  return (
    <div className="star">
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_ws2bmfm7.json"
        style={{ height: '150px', width: '150px' }}
      >
      </Player>
    </div>
  )
}
