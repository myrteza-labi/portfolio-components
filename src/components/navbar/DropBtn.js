import React from 'react'
import './DropBtn.css'; 
import downArrow from '../../images/down-arrow.png';
import upArrow from '../../images/up-arrow.png'; 

function DropBtn(props) {
    let active = props.active; 
    return (
        <button className="DropBtn">
            <img src={active == ' ' ? downArrow : upArrow } 
                 alt="drop down arrow" className="dropDownArrow" />
        </button>
    )
}

export default DropBtn
