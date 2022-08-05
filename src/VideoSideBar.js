import React, { useState } from 'react';
import "./VideoSideBar.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

                        // props added below
function VideoSideBar(  {likes,messages,shares}  ) {
  // Variable for the used icon
  const [liked, setLiked] = useState(false);

  return (
    <div className='videoSideBar'>
        <div className='videoSideBar__button'>
          {liked ? (
            <FavoriteIcon fontSize='large' 
              onClick={(e) => setLiked(false)}
            />
          ) : (
            <FavoriteBorderIcon fontSize='large' 
              onClick={(e) => setLiked(true)}
            />
          )
        }
            <p>{liked ? likes + 1 : likes }</p>
        </div>

        <div className='videoSideBar__button'>
            <MessageIcon fontSize='large' />
            <p>{messages}</p>
        </div>

        <div className='videoSideBar__button'>
            <ShareIcon fontSize='large' />
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSideBar