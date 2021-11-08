import React from 'react'
import './SideContainer.css'; 
import mobile from "../../images/mobile.png"; 
import tablette from "../../images/tablette.png"; 
import desktop from "../../images/desktop.png"; 
import ResponsiveSide from './ResponsiveSide';

function SideContainer(props) {

    const marginArray = props.marginArray; 
    return (
        <div id="SideContainer" className="SideContainer">
            <div id="position"></div>
            <ResponsiveSide margin={marginArray[0]} id={"responsiveSide1"} imgSrc={mobile} side={"left"} title={"Mobile"}/>
            <ResponsiveSide margin={marginArray[1]} id={"responsiveSide2"} imgSrc={tablette} side={"center"} title={"Tablet"}/>
            <ResponsiveSide margin={marginArray[2]} id={"responsiveSide3"} imgSrc={desktop} side={"right"} title={"Desktop"}/>
        </div>
    )
}

export default SideContainer
