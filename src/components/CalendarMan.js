import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


export default function CalendarMan() {
  return (
    <div>
       <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_tl3xalr6.json"
        style={{ height: '600px', width: '600px' }}
      >
      </Player>
    </div>
  )
}
