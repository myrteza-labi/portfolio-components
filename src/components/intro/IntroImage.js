import React from 'react'
import './IntroImage.css'; 
import developpeurImg from '../../images/developpeur.png'; 


function IntroImage() {
    return (
        <div className="IntroImage">
            <img src={developpeurImg} alt="main sur un clavier" className="introMainImage" />
        </div>
    )
}

export default IntroImage
