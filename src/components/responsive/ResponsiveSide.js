import React from 'react'
import './ResponsiveSide.css'; 
import MainImage from './MainImage'; 

function ResponsiveSide(props) {
    return (
        <div id={props.id} style={{marginRight:props.margin}} className={"ResponsiveSide " + props.side}>
            <div className={"imageContainer " + props.side}>
                <MainImage src={props.imgSrc} alt={props.imgAlt}/>
            </div>
            <p className={"responsiveText " + props.side}>
                {props.title}
            </p>
        </div> 
        
    )
}

export default ResponsiveSide
