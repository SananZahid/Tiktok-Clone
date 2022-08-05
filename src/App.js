import './App.css';
import Video from './Video';
import React, { useEffect, useState } from 'react';
import axios from './axios';

function App() {

  // Store videos here
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get("/v2/posts");

      setVideos(response.data);

      return response;
    }
    fetchPost();

    // Run useEfect once on load [] 
  }, []);

  return (
    <div className="app">

      <div className='app__videos'>

          {/* We are drilling props two level deep which is fine for now if it was larger we would have to use 
          redux or react context api */}

          {videos.map(({url,channel,description,song,likes,messages,shares}) => (
            <Video 
              url={url}
              channel={channel}
              description={description} 
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
          )}

          {/* Comment out our fake props */}
          {/* <Video 
            url="https://v16-webapp.tiktok.com/07687815aaa85dda314aa6e7a9c4932b/6296849c/video/tos/maliva/tos-maliva-ve-0068c799-us/466613509e5b404eb1916292cb651b20/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=1694&bt=847&btag=80000&cs=0&ds=1&ft=eXd.6HKVMyq8Zrv7vwe2NlfBml7Gb&mime_type=video_mp4&qs=0&rc=PDw3OjNnO2llNTM6ZmlmNkBpM3E1Ojg6Zmw3ZDMzZzczNEAzYF8yMmI0NWExX2MtMmFfYSNgYDZfcjRnazVgLS1kMS9zcw%3D%3D&l=20220531151107010244069074243E77FB"
            channel="nbatnt" 
            description="TikTok Clone" 
            song="Mamba Mentality by Young Kobe"
            likes={69}
            messages={24}
            shares={12}
          /> */}
      </div>
        
          
          


    </div>
  );
}

export default App;
