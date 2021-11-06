import React from 'react'
import Tab from './Tab'; 
import './TabContainer.css'; 


function TabContainer(props) {
    return (
        <div className={"TabContainer " + props.active }>
            <Tab tagTitle={"Présentation"} tagHref={"#"}/>
            <Tab tagTitle={"Caractéristiques"} tagHref={"#"}/>
        </div>
    )
}

export default TabContainer
