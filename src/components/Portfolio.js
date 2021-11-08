import React from 'react'
import './Portfolio.css'
import Navbar from './navbar/Navbar';
import Intro from './intro/Intro'; 
import Parallax from './parallax/Parallax';
import Responsive from './responsive/Responsive'; 

function Portfolio() {

    /* si active le filtre est activé sinon si il est vide fitlre désactivé */
    let active = " "

    return (
        <div className="Portfolio">
            <Navbar/>
            <div className={"shadowfilter " + active}></div>
            <Intro/>
            <Parallax/>
            <Responsive/>
        </div>
    )
}

export default Portfolio