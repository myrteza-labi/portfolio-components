import React from 'react'
import './Parallax.css'; 
import ParallaxBg from './ParallaxBg';
import ParallaxText from './ParallaxText'; 

class Parallax extends React.Component {

    constructor(props){
        super(props); 
        this.state = {
            activeText : [
                " ", 
                " ", 
                " ", 
                " ", 
                " ",                                
            ],
            liActivePosition : [
                {
                    turnOn : 890,
                    turnOff : 900,
                },
                {
                    turnOn : 900,
                    turnOff : 715,
                },
                {
                    turnOn : 715,
                    turnOff : 600,
                },
                {
                    turnOn : 600,
                    turnOff : 450,
                },
                {
                    turnOn : 450,
                    turnOff : 600,
                },
            ],
        }
        this.handleClick = this.handleClick.bind(this); 
        this.handleScroll = this.handleScroll.bind(this); 
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(e) {


        const newArray = this.state.activeText.slice(); 

        const innerHeight = window.innerHeight; 

        const li1posY = document.getElementById('li1').getBoundingClientRect().y * 100 / innerHeight; 
        const li2posY = document.getElementById('li2').getBoundingClientRect().y * 100 / innerHeight; 
        const li3posY = document.getElementById('li3').getBoundingClientRect().y * 100 / innerHeight; 
        const li4posY = document.getElementById('li4').getBoundingClientRect().y * 100 / innerHeight; 
        const li5posY = document.getElementById('li5').getBoundingClientRect().y * 100 / innerHeight; 


        console.log(li1posY); 


        
         


        /* li 1 */
        if(li1posY >= 70){
            newArray[0] = "active ";
            newArray[1] = " ";             
            this.setState({
                activeText : newArray, 
            })
        }

        if (li1posY >= 50 && li1posY < 70){
            newArray[0] = " "; 
            newArray[1] = "active "; 
            newArray[2] = " "; 
            this.setState({
                activeText : newArray, 
            })
        }

        if (li1posY >= 30 && li1posY < 50){
            newArray[1] = " "; 
            newArray[2] = "active "; 
            newArray[3] = " "; 
            this.setState({
                activeText : newArray, 
            })
        }
        if (li1posY >= 10 && li1posY < 30){
            newArray[2] = " "; 
            newArray[3] = "active "; 
            newArray[4] = " "; 
            this.setState({
                activeText : newArray, 
            })
        }
        if (li1posY >= 0 && li1posY < 10){
            newArray[3] = " "; 
            newArray[4] = "active "; 
            this.setState({
                activeText : newArray, 
            })
        }


        
        

        

        /*
        const li1Rect = this.state.li1.getBoundingClientRect(); 
        const li1posY = li1Rect.y; 
        console.log(li1posY); 
        */
    }
    

    handleClick(e){
        const li1 = document.getElementById('li1');
        /*
        const li1Rect = li1.getBoundingClientRect(); 
        const li1posY = li1Rect.y; */
        console.log(li1.id); 
    }

    

    render(){

        return (
            <div className="Parallax">
                <div className="parallaxMainCtn">
                    <ParallaxBg/>
                </div>
                <ParallaxText activeTextArray={this.state.activeText} onClick={this.handleClick}/>
            </div>
        )
    }
    

    
}

export default Parallax
