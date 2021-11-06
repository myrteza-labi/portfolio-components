import React from 'react'
import './Intro.css'; 
import ProfileName from './ProfileName'; 
import IntroImage from './IntroImage'; 

function Intro() {
    return (
        <div className="Intro">
            <ProfileName/>
            <IntroImage/>
        </div>
    )
}

export default Intro
