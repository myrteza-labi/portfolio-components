import React from 'react'
import './MainImage.css'; 

function MainImage(props) {
    return (
        <img src={props.src} alt={props.alt} className="ResponsiveMainImage" />
    )
}

export default MainImage
