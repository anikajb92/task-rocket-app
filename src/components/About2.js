import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


export default function About2() {
  return (
    <div>
      <p>Hello</p>
      <Player
        autoplay
        loop
        src="https://assets2.lottiefiles.com/packages/lf20_ikwwxokt.json"
        style={{ height: '500px', width: '500px' }}
      >
      </Player>
    </div>
  )
}
