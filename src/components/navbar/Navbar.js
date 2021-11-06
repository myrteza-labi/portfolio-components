import React from 'react'
import './Navbar.css'; 
import Home from './Home'; 
import TabContainer from './TabContainer'; 
import DropBtn from './DropBtn'; 
import HireBtn from './HireBtn'; 


function Navbar() {
    return (
        <nav className="Navbar">
            <div className="filterBg"></div>
            <div className="navbarMainCtn">
                <Home/>
                <div className="sideNavbar">
                    <DropBtn active={" "}/>
                    <HireBtn/>
                </div>
            </div>
            <TabContainer active={" "}/>
        </nav>
    )
}

export default Navbar
