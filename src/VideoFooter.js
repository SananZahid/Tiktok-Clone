import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";
                        //Props Below
function VideoFooter({channel, description, song}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__test'>

            <h3>@{channel}</h3>

            <p>{description}</p>

            {/* npm i --force  react-ticker */}
            <div className='videoFooter__ticker'>
                <MusicNoteIcon className='videoFooter__icon' />

                <Ticker mode="smooth" >
                    {({ index }) => (
                        <>
                            <p>{song}</p>
                        </>
                    )}
                </Ticker>
            </div>

        </div>
        <img 
        className='videoFooter__record'
        src='https://static.thenounproject.com/png/934821-200.png'
        />

    </div>
  )
}

export default VideoFooter