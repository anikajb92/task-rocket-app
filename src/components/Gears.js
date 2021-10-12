import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Gears() {
  return (
    <div className="gears">
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/packages/lf20_7tivh3tj.json"
        style={{ height: '200px', width: '200px' }}
      >
      </Player>
    </div>
  )
}
