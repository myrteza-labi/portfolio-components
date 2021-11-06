import React from 'react'
import './Tab.css'; 

function Tab(props) {
    return (
        <a href={props.tagHref} className="Tab">{props.tagTitle}</a>
    )
}

export default Tab
