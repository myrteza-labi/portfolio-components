import React from 'react'
import './Portfolio.css'
import Navbar from './navbar/Navbar';
import Intro from './intro/Intro'; 
import Parallax from './parallax/Parallax';

function Portfolio() {

    /* si active le filtre est activé sinon si il est vide fitlre désactivé */
    let active = " "

    return (
        <div className="Portfolio">
            <Navbar/>
            <div className={"shadowfilter " + active}></div>
            <Intro/>
            <Parallax/>
        </div>
    )
}

export default Portfolio


/*

<section className="Parallax">
            
            <div className="parallaxMainContainer">
                <ParallaxBg/>
                <ParallaxText/>
            </div>
            
        </section>







        css 

        .Parallax {
    min-height: 600px; 
    position: relative; 
    
}

.parallaxMainContainer {
    min-height: 100%; 
    position: -webkit-sticky;
    position: sticky;
    top:20px; 
}

*/