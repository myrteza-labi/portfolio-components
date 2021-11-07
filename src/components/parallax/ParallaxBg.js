import React from 'react'
import './ParallaxBg.css'; 
import smallParallax from '../../images/parallax-small.mp4'

function ParallaxBg() {
    return (
        <video  className="ParallaxBg" 
                src={smallParallax}
                controls={false} 
                muted 
                autoPlay 
                preload="auto"
                loop={true}
                /*
                mutedplayinline 
                loop={true}
                area-hidden={true}
                autoplay={true}*/
                ></video>
    )
}

export default ParallaxBg
