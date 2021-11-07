import React from 'react'
import './Parallax.css'; 
import ParallaxBg from './ParallaxBg';
import ParallaxText from './ParallaxText'; 

class Parallax extends React.Component {

    constructor(props){
        super(props); 
        this.state = {

        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(e) {
        alert('scroll')
    }

    handleClick(e){
        let current = e.target.getBoundingClientRect()
        e.
        alert(current.y)
    }

    render(){
        return (
            <div className="Parallax">
                <div className="parallaxMainCtn">
                    <ParallaxBg/>
                </div>
                <ParallaxText onClick={this.handleClick}/>
            </div>
        )
    }
    

    
}

export default Parallax
