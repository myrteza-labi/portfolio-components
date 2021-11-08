import React from 'react'
import './Responsive.css'; 
import SideContainer from './SideContainer';



class Responsive extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            marginArray : [
                -100,
                -100,
                " ",
            ]
        }

        this.handleScroll = this.handleScroll.bind(this); 

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll() {
        const innerHeight = window.innerHeight;   
        
        const mobileSide = document.getElementById('responsiveSide1'); 
        const tabletSide = document.getElementById('responsiveSide2'); 
        const desktopSide = document.getElementById('responsiveSide3'); 
        const sectionPosition = document.getElementById('position').getBoundingClientRect().y * 100 / innerHeight ; 
        const newArray = this.state.marginArray.slice(); 
        const marginUnit = 0.3; 

       if(sectionPosition > 0 && sectionPosition < 100){
            newArray[0] = -sectionPosition ; 
            newArray[1] = -sectionPosition ; 
            newArray[2] = -sectionPosition ; 


            this.setState({
                marginArray : newArray,
            })
            
       }


        console.log(sectionPosition); 



        
    }

    

    render(){
        return (
            <section className="Responsive">
    
                <div className="responsiveMainCtn">
    
                    <p className="responsiveText">
                        Responsive design<br/>
                        <span className="responsiveTextDetail">Pixel perfect</span> <br/>
                    </p>
    
                    <SideContainer marginArray={this.state.marginArray}/>
                    
                    
                </div>
            
            </section>
        )
    }
    
}

export default Responsive
 