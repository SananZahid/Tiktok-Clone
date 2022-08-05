import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

function Video({url, channel, description, song, likes, messages, shares}) {

  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const handleVideoPress = () => {
    // if video is playing 
    // stop
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }

    // else 
    // play

  }

  return (
    <div className='video'>

        <video className='video__player'
            onClick={handleVideoPress}
            loop
            ref={videoRef}
            src={url}>
            
        </video>

        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSideBar likes={likes} messages={messages} shares={shares} />

    </div>
  )
}

export default Video